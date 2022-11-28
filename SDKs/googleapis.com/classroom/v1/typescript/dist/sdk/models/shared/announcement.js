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
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
export var AnnouncementAssigneeModeEnum;
(function (AnnouncementAssigneeModeEnum) {
    AnnouncementAssigneeModeEnum["AssigneeModeUnspecified"] = "ASSIGNEE_MODE_UNSPECIFIED";
    AnnouncementAssigneeModeEnum["AllStudents"] = "ALL_STUDENTS";
    AnnouncementAssigneeModeEnum["IndividualStudents"] = "INDIVIDUAL_STUDENTS";
})(AnnouncementAssigneeModeEnum || (AnnouncementAssigneeModeEnum = {}));
export var AnnouncementStateEnum;
(function (AnnouncementStateEnum) {
    AnnouncementStateEnum["AnnouncementStateUnspecified"] = "ANNOUNCEMENT_STATE_UNSPECIFIED";
    AnnouncementStateEnum["Published"] = "PUBLISHED";
    AnnouncementStateEnum["Draft"] = "DRAFT";
    AnnouncementStateEnum["Deleted"] = "DELETED";
})(AnnouncementStateEnum || (AnnouncementStateEnum = {}));
// Announcement
/**
 * Announcement created by a teacher for students of the course
**/
var Announcement = /** @class */ (function (_super) {
    __extends(Announcement, _super);
    function Announcement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "alternateLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assigneeMode" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "assigneeMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=courseId" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorUserId" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "creatorUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualStudentsOptions" }),
        __metadata("design:type", IndividualStudentsOptions)
    ], Announcement.prototype, "individualStudentsOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials", elemType: Material }),
        __metadata("design:type", Array)
    ], Announcement.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledTime" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "scheduledTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Announcement.prototype, "updateTime", void 0);
    return Announcement;
}(SpeakeasyBase));
export { Announcement };
