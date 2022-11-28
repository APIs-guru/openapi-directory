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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";
import { GradeCategory } from "./gradecategory";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
import { MultipleChoiceQuestion } from "./multiplechoicequestion";
export var CourseWorkAssigneeModeEnum;
(function (CourseWorkAssigneeModeEnum) {
    CourseWorkAssigneeModeEnum["AssigneeModeUnspecified"] = "ASSIGNEE_MODE_UNSPECIFIED";
    CourseWorkAssigneeModeEnum["AllStudents"] = "ALL_STUDENTS";
    CourseWorkAssigneeModeEnum["IndividualStudents"] = "INDIVIDUAL_STUDENTS";
})(CourseWorkAssigneeModeEnum || (CourseWorkAssigneeModeEnum = {}));
export var CourseWorkStateEnum;
(function (CourseWorkStateEnum) {
    CourseWorkStateEnum["CourseWorkStateUnspecified"] = "COURSE_WORK_STATE_UNSPECIFIED";
    CourseWorkStateEnum["Published"] = "PUBLISHED";
    CourseWorkStateEnum["Draft"] = "DRAFT";
    CourseWorkStateEnum["Deleted"] = "DELETED";
})(CourseWorkStateEnum || (CourseWorkStateEnum = {}));
export var CourseWorkSubmissionModificationModeEnum;
(function (CourseWorkSubmissionModificationModeEnum) {
    CourseWorkSubmissionModificationModeEnum["SubmissionModificationModeUnspecified"] = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED";
    CourseWorkSubmissionModificationModeEnum["ModifiableUntilTurnedIn"] = "MODIFIABLE_UNTIL_TURNED_IN";
    CourseWorkSubmissionModificationModeEnum["Modifiable"] = "MODIFIABLE";
})(CourseWorkSubmissionModificationModeEnum || (CourseWorkSubmissionModificationModeEnum = {}));
export var CourseWorkWorkTypeEnum;
(function (CourseWorkWorkTypeEnum) {
    CourseWorkWorkTypeEnum["CourseWorkTypeUnspecified"] = "COURSE_WORK_TYPE_UNSPECIFIED";
    CourseWorkWorkTypeEnum["Assignment"] = "ASSIGNMENT";
    CourseWorkWorkTypeEnum["ShortAnswerQuestion"] = "SHORT_ANSWER_QUESTION";
    CourseWorkWorkTypeEnum["MultipleChoiceQuestion"] = "MULTIPLE_CHOICE_QUESTION";
})(CourseWorkWorkTypeEnum || (CourseWorkWorkTypeEnum = {}));
// CourseWork
/**
 * Course work created by a teacher for students of the course.
**/
var CourseWork = /** @class */ (function (_super) {
    __extends(CourseWork, _super);
    function CourseWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "alternateLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assigneeMode" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "assigneeMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignment" }),
        __metadata("design:type", Assignment)
    ], CourseWork.prototype, "assignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedWithDeveloper" }),
        __metadata("design:type", Boolean)
    ], CourseWork.prototype, "associatedWithDeveloper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=courseId" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorUserId" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "creatorUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dueDate" }),
        __metadata("design:type", Date)
    ], CourseWork.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dueTime" }),
        __metadata("design:type", TimeOfDay)
    ], CourseWork.prototype, "dueTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeCategory" }),
        __metadata("design:type", GradeCategory)
    ], CourseWork.prototype, "gradeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualStudentsOptions" }),
        __metadata("design:type", IndividualStudentsOptions)
    ], CourseWork.prototype, "individualStudentsOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials", elemType: Material }),
        __metadata("design:type", Array)
    ], CourseWork.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPoints" }),
        __metadata("design:type", Number)
    ], CourseWork.prototype, "maxPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multipleChoiceQuestion" }),
        __metadata("design:type", MultipleChoiceQuestion)
    ], CourseWork.prototype, "multipleChoiceQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledTime" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "scheduledTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submissionModificationMode" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "submissionModificationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicId" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workType" }),
        __metadata("design:type", String)
    ], CourseWork.prototype, "workType", void 0);
    return CourseWork;
}(SpeakeasyBase));
export { CourseWork };
