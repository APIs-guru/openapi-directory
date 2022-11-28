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
import { User } from "./user";
var AboutAdditionalRoleInfoRoleSets = /** @class */ (function (_super) {
    __extends(AboutAdditionalRoleInfoRoleSets, _super);
    function AboutAdditionalRoleInfoRoleSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalRoles" }),
        __metadata("design:type", Array)
    ], AboutAdditionalRoleInfoRoleSets.prototype, "additionalRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryRole" }),
        __metadata("design:type", String)
    ], AboutAdditionalRoleInfoRoleSets.prototype, "primaryRole", void 0);
    return AboutAdditionalRoleInfoRoleSets;
}(SpeakeasyBase));
export { AboutAdditionalRoleInfoRoleSets };
var AboutAdditionalRoleInfo = /** @class */ (function (_super) {
    __extends(AboutAdditionalRoleInfo, _super);
    function AboutAdditionalRoleInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleSets", elemType: AboutAdditionalRoleInfoRoleSets }),
        __metadata("design:type", Array)
    ], AboutAdditionalRoleInfo.prototype, "roleSets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AboutAdditionalRoleInfo.prototype, "type", void 0);
    return AboutAdditionalRoleInfo;
}(SpeakeasyBase));
export { AboutAdditionalRoleInfo };
var AboutDriveThemes = /** @class */ (function (_super) {
    __extends(AboutDriveThemes, _super);
    function AboutDriveThemes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundImageLink" }),
        __metadata("design:type", String)
    ], AboutDriveThemes.prototype, "backgroundImageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorRgb" }),
        __metadata("design:type", String)
    ], AboutDriveThemes.prototype, "colorRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AboutDriveThemes.prototype, "id", void 0);
    return AboutDriveThemes;
}(SpeakeasyBase));
export { AboutDriveThemes };
var AboutExportFormats = /** @class */ (function (_super) {
    __extends(AboutExportFormats, _super);
    function AboutExportFormats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], AboutExportFormats.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], AboutExportFormats.prototype, "targets", void 0);
    return AboutExportFormats;
}(SpeakeasyBase));
export { AboutExportFormats };
var AboutFeatures = /** @class */ (function (_super) {
    __extends(AboutFeatures, _super);
    function AboutFeatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featureName" }),
        __metadata("design:type", String)
    ], AboutFeatures.prototype, "featureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featureRate" }),
        __metadata("design:type", Number)
    ], AboutFeatures.prototype, "featureRate", void 0);
    return AboutFeatures;
}(SpeakeasyBase));
export { AboutFeatures };
var AboutImportFormats = /** @class */ (function (_super) {
    __extends(AboutImportFormats, _super);
    function AboutImportFormats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], AboutImportFormats.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], AboutImportFormats.prototype, "targets", void 0);
    return AboutImportFormats;
}(SpeakeasyBase));
export { AboutImportFormats };
var AboutMaxUploadSizes = /** @class */ (function (_super) {
    __extends(AboutMaxUploadSizes, _super);
    function AboutMaxUploadSizes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], AboutMaxUploadSizes.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AboutMaxUploadSizes.prototype, "type", void 0);
    return AboutMaxUploadSizes;
}(SpeakeasyBase));
export { AboutMaxUploadSizes };
var AboutQuotaBytesByService = /** @class */ (function (_super) {
    __extends(AboutQuotaBytesByService, _super);
    function AboutQuotaBytesByService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bytesUsed" }),
        __metadata("design:type", String)
    ], AboutQuotaBytesByService.prototype, "bytesUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], AboutQuotaBytesByService.prototype, "serviceName", void 0);
    return AboutQuotaBytesByService;
}(SpeakeasyBase));
export { AboutQuotaBytesByService };
var AboutTeamDriveThemes = /** @class */ (function (_super) {
    __extends(AboutTeamDriveThemes, _super);
    function AboutTeamDriveThemes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundImageLink" }),
        __metadata("design:type", String)
    ], AboutTeamDriveThemes.prototype, "backgroundImageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorRgb" }),
        __metadata("design:type", String)
    ], AboutTeamDriveThemes.prototype, "colorRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AboutTeamDriveThemes.prototype, "id", void 0);
    return AboutTeamDriveThemes;
}(SpeakeasyBase));
export { AboutTeamDriveThemes };
// About
/**
 * An item with user information and settings.
**/
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalRoleInfo", elemType: AboutAdditionalRoleInfo }),
        __metadata("design:type", Array)
    ], About.prototype, "additionalRoleInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateDrives" }),
        __metadata("design:type", Boolean)
    ], About.prototype, "canCreateDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateTeamDrives" }),
        __metadata("design:type", Boolean)
    ], About.prototype, "canCreateTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainSharingPolicy" }),
        __metadata("design:type", String)
    ], About.prototype, "domainSharingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveThemes", elemType: AboutDriveThemes }),
        __metadata("design:type", Array)
    ], About.prototype, "driveThemes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], About.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exportFormats", elemType: AboutExportFormats }),
        __metadata("design:type", Array)
    ], About.prototype, "exportFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features", elemType: AboutFeatures }),
        __metadata("design:type", Array)
    ], About.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderColorPalette" }),
        __metadata("design:type", Array)
    ], About.prototype, "folderColorPalette", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importFormats", elemType: AboutImportFormats }),
        __metadata("design:type", Array)
    ], About.prototype, "importFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isCurrentAppInstalled" }),
        __metadata("design:type", Boolean)
    ], About.prototype, "isCurrentAppInstalled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], About.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], About.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=largestChangeId" }),
        __metadata("design:type", String)
    ], About.prototype, "largestChangeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxUploadSizes", elemType: AboutMaxUploadSizes }),
        __metadata("design:type", Array)
    ], About.prototype, "maxUploadSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], About.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionId" }),
        __metadata("design:type", String)
    ], About.prototype, "permissionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaBytesByService", elemType: AboutQuotaBytesByService }),
        __metadata("design:type", Array)
    ], About.prototype, "quotaBytesByService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaBytesTotal" }),
        __metadata("design:type", String)
    ], About.prototype, "quotaBytesTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaBytesUsed" }),
        __metadata("design:type", String)
    ], About.prototype, "quotaBytesUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaBytesUsedAggregate" }),
        __metadata("design:type", String)
    ], About.prototype, "quotaBytesUsedAggregate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaBytesUsedInTrash" }),
        __metadata("design:type", String)
    ], About.prototype, "quotaBytesUsedInTrash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaType" }),
        __metadata("design:type", String)
    ], About.prototype, "quotaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingChangeIds" }),
        __metadata("design:type", String)
    ], About.prototype, "remainingChangeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootFolderId" }),
        __metadata("design:type", String)
    ], About.prototype, "rootFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], About.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamDriveThemes", elemType: AboutTeamDriveThemes }),
        __metadata("design:type", Array)
    ], About.prototype, "teamDriveThemes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], About.prototype, "user", void 0);
    return About;
}(SpeakeasyBase));
export { About };
