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
// DriveBackgroundImageFile
/**
 * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
var DriveBackgroundImageFile = /** @class */ (function (_super) {
    __extends(DriveBackgroundImageFile, _super);
    function DriveBackgroundImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DriveBackgroundImageFile.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], DriveBackgroundImageFile.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xCoordinate" }),
        __metadata("design:type", Number)
    ], DriveBackgroundImageFile.prototype, "xCoordinate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yCoordinate" }),
        __metadata("design:type", Number)
    ], DriveBackgroundImageFile.prototype, "yCoordinate", void 0);
    return DriveBackgroundImageFile;
}(SpeakeasyBase));
export { DriveBackgroundImageFile };
// DriveCapabilities
/**
 * Capabilities the current user has on this shared drive.
**/
var DriveCapabilities = /** @class */ (function (_super) {
    __extends(DriveCapabilities, _super);
    function DriveCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canAddChildren" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canAddChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeCopyRequiresWriterPermissionRestriction" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canChangeCopyRequiresWriterPermissionRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeDomainUsersOnlyRestriction" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canChangeDomainUsersOnlyRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeDriveBackground" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canChangeDriveBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeDriveMembersOnlyRestriction" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canChangeDriveMembersOnlyRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canComment" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCopy" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteChildren" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canDeleteChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteDrive" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canDeleteDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDownload" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canEdit" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canListChildren" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canListChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canManageMembers" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canManageMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canReadRevisions" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canReadRevisions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRename" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canRename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRenameDrive" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canRenameDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canResetDriveRestrictions" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canResetDriveRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canShare" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canShare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canTrashChildren" }),
        __metadata("design:type", Boolean)
    ], DriveCapabilities.prototype, "canTrashChildren", void 0);
    return DriveCapabilities;
}(SpeakeasyBase));
export { DriveCapabilities };
// DriveRestrictions
/**
 * A set of restrictions that apply to this shared drive or items inside this shared drive.
**/
var DriveRestrictions = /** @class */ (function (_super) {
    __extends(DriveRestrictions, _super);
    function DriveRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminManagedRestrictions" }),
        __metadata("design:type", Boolean)
    ], DriveRestrictions.prototype, "adminManagedRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" }),
        __metadata("design:type", Boolean)
    ], DriveRestrictions.prototype, "copyRequiresWriterPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainUsersOnly" }),
        __metadata("design:type", Boolean)
    ], DriveRestrictions.prototype, "domainUsersOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveMembersOnly" }),
        __metadata("design:type", Boolean)
    ], DriveRestrictions.prototype, "driveMembersOnly", void 0);
    return DriveRestrictions;
}(SpeakeasyBase));
export { DriveRestrictions };
// Drive
/**
 * Representation of a shared drive.
**/
var Drive = /** @class */ (function (_super) {
    __extends(Drive, _super);
    function Drive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundImageFile" }),
        __metadata("design:type", DriveBackgroundImageFile)
    ], Drive.prototype, "backgroundImageFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundImageLink" }),
        __metadata("design:type", String)
    ], Drive.prototype, "backgroundImageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", DriveCapabilities)
    ], Drive.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorRgb" }),
        __metadata("design:type", String)
    ], Drive.prototype, "colorRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdTime" }),
        __metadata("design:type", Date)
    ], Drive.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], Drive.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Drive.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Drive.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Drive.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitId" }),
        __metadata("design:type", String)
    ], Drive.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", DriveRestrictions)
    ], Drive.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themeId" }),
        __metadata("design:type", String)
    ], Drive.prototype, "themeId", void 0);
    return Drive;
}(SpeakeasyBase));
export { Drive };
