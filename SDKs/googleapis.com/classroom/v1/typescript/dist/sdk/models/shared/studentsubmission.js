var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignmentSubmission } from "./assignmentsubmission";
import { MultipleChoiceSubmission } from "./multiplechoicesubmission";
import { ShortAnswerSubmission } from "./shortanswersubmission";
export var StudentSubmissionCourseWorkTypeEnum;
(function (StudentSubmissionCourseWorkTypeEnum) {
    StudentSubmissionCourseWorkTypeEnum["CourseWorkTypeUnspecified"] = "COURSE_WORK_TYPE_UNSPECIFIED";
    StudentSubmissionCourseWorkTypeEnum["Assignment"] = "ASSIGNMENT";
    StudentSubmissionCourseWorkTypeEnum["ShortAnswerQuestion"] = "SHORT_ANSWER_QUESTION";
    StudentSubmissionCourseWorkTypeEnum["MultipleChoiceQuestion"] = "MULTIPLE_CHOICE_QUESTION";
})(StudentSubmissionCourseWorkTypeEnum || (StudentSubmissionCourseWorkTypeEnum = {}));
export var StudentSubmissionStateEnum;
(function (StudentSubmissionStateEnum) {
    StudentSubmissionStateEnum["SubmissionStateUnspecified"] = "SUBMISSION_STATE_UNSPECIFIED";
    StudentSubmissionStateEnum["New"] = "NEW";
    StudentSubmissionStateEnum["Created"] = "CREATED";
    StudentSubmissionStateEnum["TurnedIn"] = "TURNED_IN";
    StudentSubmissionStateEnum["Returned"] = "RETURNED";
    StudentSubmissionStateEnum["ReclaimedByStudent"] = "RECLAIMED_BY_STUDENT";
})(StudentSubmissionStateEnum || (StudentSubmissionStateEnum = {}));
// StudentSubmission
/**
 * Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
**/
var StudentSubmission = /** @class */ (function (_super) {
    __extends(StudentSubmission, _super);
    function StudentSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "alternateLink", void 0);
    __decorate([
        Metadata({ data: "json, name=assignedGrade" }),
        __metadata("design:type", Number)
    ], StudentSubmission.prototype, "assignedGrade", void 0);
    __decorate([
        Metadata({ data: "json, name=assignmentSubmission" }),
        __metadata("design:type", AssignmentSubmission)
    ], StudentSubmission.prototype, "assignmentSubmission", void 0);
    __decorate([
        Metadata({ data: "json, name=associatedWithDeveloper" }),
        __metadata("design:type", Boolean)
    ], StudentSubmission.prototype, "associatedWithDeveloper", void 0);
    __decorate([
        Metadata({ data: "json, name=courseId" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "json, name=courseWorkId" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "courseWorkId", void 0);
    __decorate([
        Metadata({ data: "json, name=courseWorkType" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "courseWorkType", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=draftGrade" }),
        __metadata("design:type", Number)
    ], StudentSubmission.prototype, "draftGrade", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=late" }),
        __metadata("design:type", Boolean)
    ], StudentSubmission.prototype, "late", void 0);
    __decorate([
        Metadata({ data: "json, name=multipleChoiceSubmission" }),
        __metadata("design:type", MultipleChoiceSubmission)
    ], StudentSubmission.prototype, "multipleChoiceSubmission", void 0);
    __decorate([
        Metadata({ data: "json, name=shortAnswerSubmission" }),
        __metadata("design:type", ShortAnswerSubmission)
    ], StudentSubmission.prototype, "shortAnswerSubmission", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=submissionHistory", elemType: shared.SubmissionHistory }),
        __metadata("design:type", Array)
    ], StudentSubmission.prototype, "submissionHistory", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], StudentSubmission.prototype, "userId", void 0);
    return StudentSubmission;
}(SpeakeasyBase));
export { StudentSubmission };
