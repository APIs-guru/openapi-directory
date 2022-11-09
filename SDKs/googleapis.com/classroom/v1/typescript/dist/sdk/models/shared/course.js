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
import { GradebookSettings } from "./gradebooksettings";
import { DriveFolder } from "./drivefolder";
export var CourseCourseStateEnum;
(function (CourseCourseStateEnum) {
    CourseCourseStateEnum["CourseStateUnspecified"] = "COURSE_STATE_UNSPECIFIED";
    CourseCourseStateEnum["Active"] = "ACTIVE";
    CourseCourseStateEnum["Archived"] = "ARCHIVED";
    CourseCourseStateEnum["Provisioned"] = "PROVISIONED";
    CourseCourseStateEnum["Declined"] = "DECLINED";
    CourseCourseStateEnum["Suspended"] = "SUSPENDED";
})(CourseCourseStateEnum || (CourseCourseStateEnum = {}));
// Course
/**
 * A Course in Classroom.
**/
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], Course.prototype, "alternateLink", void 0);
    __decorate([
        Metadata({ data: "json, name=calendarId" }),
        __metadata("design:type", String)
    ], Course.prototype, "calendarId", void 0);
    __decorate([
        Metadata({ data: "json, name=courseGroupEmail" }),
        __metadata("design:type", String)
    ], Course.prototype, "courseGroupEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=courseMaterialSets", elemType: shared.CourseMaterialSet }),
        __metadata("design:type", Array)
    ], Course.prototype, "courseMaterialSets", void 0);
    __decorate([
        Metadata({ data: "json, name=courseState" }),
        __metadata("design:type", String)
    ], Course.prototype, "courseState", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Course.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Course.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=descriptionHeading" }),
        __metadata("design:type", String)
    ], Course.prototype, "descriptionHeading", void 0);
    __decorate([
        Metadata({ data: "json, name=enrollmentCode" }),
        __metadata("design:type", String)
    ], Course.prototype, "enrollmentCode", void 0);
    __decorate([
        Metadata({ data: "json, name=gradebookSettings" }),
        __metadata("design:type", GradebookSettings)
    ], Course.prototype, "gradebookSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=guardiansEnabled" }),
        __metadata("design:type", Boolean)
    ], Course.prototype, "guardiansEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Course.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Course.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=ownerId" }),
        __metadata("design:type", String)
    ], Course.prototype, "ownerId", void 0);
    __decorate([
        Metadata({ data: "json, name=room" }),
        __metadata("design:type", String)
    ], Course.prototype, "room", void 0);
    __decorate([
        Metadata({ data: "json, name=section" }),
        __metadata("design:type", String)
    ], Course.prototype, "section", void 0);
    __decorate([
        Metadata({ data: "json, name=teacherFolder" }),
        __metadata("design:type", DriveFolder)
    ], Course.prototype, "teacherFolder", void 0);
    __decorate([
        Metadata({ data: "json, name=teacherGroupEmail" }),
        __metadata("design:type", String)
    ], Course.prototype, "teacherGroupEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Course.prototype, "updateTime", void 0);
    return Course;
}(SpeakeasyBase));
export { Course };
