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
// AboutStorageQuota
/**
 * The user's storage quota limits and usage. All fields are measured in bytes.
**/
var AboutStorageQuota = /** @class */ (function (_super) {
    __extends(AboutStorageQuota, _super);
    function AboutStorageQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", String)
    ], AboutStorageQuota.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", String)
    ], AboutStorageQuota.prototype, "usage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageInDrive" }),
        __metadata("design:type", String)
    ], AboutStorageQuota.prototype, "usageInDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageInDriveTrash" }),
        __metadata("design:type", String)
    ], AboutStorageQuota.prototype, "usageInDriveTrash", void 0);
    return AboutStorageQuota;
}(SpeakeasyBase));
export { AboutStorageQuota };
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
 * Information about the user, the user's Drive, and system capabilities.
**/
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appInstalled" }),
        __metadata("design:type", Boolean)
    ], About.prototype, "appInstalled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateDrives" }),
        __metadata("design:type", Boolean)
    ], About.prototype, "canCreateDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateTeamDrives" }),
        __metadata("design:type", Boolean)
    ], About.prototype, "canCreateTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveThemes", elemType: AboutDriveThemes }),
        __metadata("design:type", Array)
    ], About.prototype, "driveThemes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exportFormats" }),
        __metadata("design:type", Map)
    ], About.prototype, "exportFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderColorPalette" }),
        __metadata("design:type", Array)
    ], About.prototype, "folderColorPalette", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importFormats" }),
        __metadata("design:type", Map)
    ], About.prototype, "importFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], About.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxImportSizes" }),
        __metadata("design:type", Map)
    ], About.prototype, "maxImportSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxUploadSize" }),
        __metadata("design:type", String)
    ], About.prototype, "maxUploadSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageQuota" }),
        __metadata("design:type", AboutStorageQuota)
    ], About.prototype, "storageQuota", void 0);
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
