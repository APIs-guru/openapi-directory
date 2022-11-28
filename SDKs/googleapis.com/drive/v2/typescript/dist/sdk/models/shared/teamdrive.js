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
// TeamDriveBackgroundImageFile
/**
 * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
var TeamDriveBackgroundImageFile = /** @class */ (function (_super) {
    __extends(TeamDriveBackgroundImageFile, _super);
    function TeamDriveBackgroundImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TeamDriveBackgroundImageFile.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], TeamDriveBackgroundImageFile.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xCoordinate" }),
        __metadata("design:type", Number)
    ], TeamDriveBackgroundImageFile.prototype, "xCoordinate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yCoordinate" }),
        __metadata("design:type", Number)
    ], TeamDriveBackgroundImageFile.prototype, "yCoordinate", void 0);
    return TeamDriveBackgroundImageFile;
}(SpeakeasyBase));
export { TeamDriveBackgroundImageFile };
// TeamDriveCapabilities
/**
 * Capabilities the current user has on this Team Drive.
**/
var TeamDriveCapabilities = /** @class */ (function (_super) {
    __extends(TeamDriveCapabilities, _super);
    function TeamDriveCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canAddChildren" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canAddChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeCopyRequiresWriterPermissionRestriction" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canChangeCopyRequiresWriterPermissionRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeDomainUsersOnlyRestriction" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canChangeDomainUsersOnlyRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeTeamDriveBackground" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canChangeTeamDriveBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeTeamMembersOnlyRestriction" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canChangeTeamMembersOnlyRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canComment" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCopy" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteChildren" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canDeleteChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteTeamDrive" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canDeleteTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDownload" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canEdit" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canListChildren" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canListChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canManageMembers" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canManageMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canReadRevisions" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canReadRevisions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRemoveChildren" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canRemoveChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRename" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canRename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRenameTeamDrive" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canRenameTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canResetTeamDriveRestrictions" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canResetTeamDriveRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canShare" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canShare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canTrashChildren" }),
        __metadata("design:type", Boolean)
    ], TeamDriveCapabilities.prototype, "canTrashChildren", void 0);
    return TeamDriveCapabilities;
}(SpeakeasyBase));
export { TeamDriveCapabilities };
// TeamDriveRestrictions
/**
 * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
**/
var TeamDriveRestrictions = /** @class */ (function (_super) {
    __extends(TeamDriveRestrictions, _super);
    function TeamDriveRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminManagedRestrictions" }),
        __metadata("design:type", Boolean)
    ], TeamDriveRestrictions.prototype, "adminManagedRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" }),
        __metadata("design:type", Boolean)
    ], TeamDriveRestrictions.prototype, "copyRequiresWriterPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainUsersOnly" }),
        __metadata("design:type", Boolean)
    ], TeamDriveRestrictions.prototype, "domainUsersOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamMembersOnly" }),
        __metadata("design:type", Boolean)
    ], TeamDriveRestrictions.prototype, "teamMembersOnly", void 0);
    return TeamDriveRestrictions;
}(SpeakeasyBase));
export { TeamDriveRestrictions };
// TeamDrive
/**
 * Deprecated: use the drive collection instead.
**/
var TeamDrive = /** @class */ (function (_super) {
    __extends(TeamDrive, _super);
    function TeamDrive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundImageFile" }),
        __metadata("design:type", TeamDriveBackgroundImageFile)
    ], TeamDrive.prototype, "backgroundImageFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundImageLink" }),
        __metadata("design:type", String)
    ], TeamDrive.prototype, "backgroundImageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", TeamDriveCapabilities)
    ], TeamDrive.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorRgb" }),
        __metadata("design:type", String)
    ], TeamDrive.prototype, "colorRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], TeamDrive.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TeamDrive.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TeamDrive.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamDrive.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitId" }),
        __metadata("design:type", String)
    ], TeamDrive.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", TeamDriveRestrictions)
    ], TeamDrive.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themeId" }),
        __metadata("design:type", String)
    ], TeamDrive.prototype, "themeId", void 0);
    return TeamDrive;
}(SpeakeasyBase));
export { TeamDrive };
