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
import { IndividualStudentsOptions } from "./individualstudentsoptions";
export var CourseWorkMaterialAssigneeModeEnum;
(function (CourseWorkMaterialAssigneeModeEnum) {
    CourseWorkMaterialAssigneeModeEnum["AssigneeModeUnspecified"] = "ASSIGNEE_MODE_UNSPECIFIED";
    CourseWorkMaterialAssigneeModeEnum["AllStudents"] = "ALL_STUDENTS";
    CourseWorkMaterialAssigneeModeEnum["IndividualStudents"] = "INDIVIDUAL_STUDENTS";
})(CourseWorkMaterialAssigneeModeEnum || (CourseWorkMaterialAssigneeModeEnum = {}));
export var CourseWorkMaterialStateEnum;
(function (CourseWorkMaterialStateEnum) {
    CourseWorkMaterialStateEnum["CourseworkMaterialStateUnspecified"] = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED";
    CourseWorkMaterialStateEnum["Published"] = "PUBLISHED";
    CourseWorkMaterialStateEnum["Draft"] = "DRAFT";
    CourseWorkMaterialStateEnum["Deleted"] = "DELETED";
})(CourseWorkMaterialStateEnum || (CourseWorkMaterialStateEnum = {}));
// CourseWorkMaterial
/**
 * Course work material created by a teacher for students of the course
**/
var CourseWorkMaterial = /** @class */ (function (_super) {
    __extends(CourseWorkMaterial, _super);
    function CourseWorkMaterial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "alternateLink", void 0);
    __decorate([
        Metadata({ data: "json, name=assigneeMode" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "assigneeMode", void 0);
    __decorate([
        Metadata({ data: "json, name=courseId" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=creatorUserId" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "creatorUserId", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=individualStudentsOptions" }),
        __metadata("design:type", IndividualStudentsOptions)
    ], CourseWorkMaterial.prototype, "individualStudentsOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=materials", elemType: shared.Material }),
        __metadata("design:type", Array)
    ], CourseWorkMaterial.prototype, "materials", void 0);
    __decorate([
        Metadata({ data: "json, name=scheduledTime" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "scheduledTime", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=topicId" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "topicId", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CourseWorkMaterial.prototype, "updateTime", void 0);
    return CourseWorkMaterial;
}(SpeakeasyBase));
export { CourseWorkMaterial };
