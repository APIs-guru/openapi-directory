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
import { ExternalRef } from "./externalref";
import { License } from "./license";
// PackageInfoNote
/**
 * PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
var PackageInfoNote = /** @class */ (function (_super) {
    __extends(PackageInfoNote, _super);
    function PackageInfoNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyzed" }),
        __metadata("design:type", Boolean)
    ], PackageInfoNote.prototype, "analyzed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailedDescription" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "detailedDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadLocation" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "downloadLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalRefs", elemType: ExternalRef }),
        __metadata("design:type", Array)
    ], PackageInfoNote.prototype, "externalRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesLicenseInfo" }),
        __metadata("design:type", Array)
    ], PackageInfoNote.prototype, "filesLicenseInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homePage" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "homePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseDeclared" }),
        __metadata("design:type", License)
    ], PackageInfoNote.prototype, "licenseDeclared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originator" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "originator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summaryDescription" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "summaryDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplier" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "supplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verificationCode" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "verificationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], PackageInfoNote.prototype, "version", void 0);
    return PackageInfoNote;
}(SpeakeasyBase));
export { PackageInfoNote };
