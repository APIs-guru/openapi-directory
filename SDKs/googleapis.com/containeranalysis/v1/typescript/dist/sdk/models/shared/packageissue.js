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
import { Version } from "./version";
import { GrafeasV1FileLocation } from "./grafeasv1filelocation";
export var PackageIssueEffectiveSeverityEnum;
(function (PackageIssueEffectiveSeverityEnum) {
    PackageIssueEffectiveSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    PackageIssueEffectiveSeverityEnum["Minimal"] = "MINIMAL";
    PackageIssueEffectiveSeverityEnum["Low"] = "LOW";
    PackageIssueEffectiveSeverityEnum["Medium"] = "MEDIUM";
    PackageIssueEffectiveSeverityEnum["High"] = "HIGH";
    PackageIssueEffectiveSeverityEnum["Critical"] = "CRITICAL";
})(PackageIssueEffectiveSeverityEnum || (PackageIssueEffectiveSeverityEnum = {}));
// PackageIssue
/**
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
**/
var PackageIssue = /** @class */ (function (_super) {
    __extends(PackageIssue, _super);
    function PackageIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedCpeUri" }),
        __metadata("design:type", String)
    ], PackageIssue.prototype, "affectedCpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedPackage" }),
        __metadata("design:type", String)
    ], PackageIssue.prototype, "affectedPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedVersion" }),
        __metadata("design:type", Version)
    ], PackageIssue.prototype, "affectedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveSeverity" }),
        __metadata("design:type", String)
    ], PackageIssue.prototype, "effectiveSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileLocation", elemType: GrafeasV1FileLocation }),
        __metadata("design:type", Array)
    ], PackageIssue.prototype, "fileLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixAvailable" }),
        __metadata("design:type", Boolean)
    ], PackageIssue.prototype, "fixAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedCpeUri" }),
        __metadata("design:type", String)
    ], PackageIssue.prototype, "fixedCpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedPackage" }),
        __metadata("design:type", String)
    ], PackageIssue.prototype, "fixedPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedVersion" }),
        __metadata("design:type", Version)
    ], PackageIssue.prototype, "fixedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], PackageIssue.prototype, "packageType", void 0);
    return PackageIssue;
}(SpeakeasyBase));
export { PackageIssue };
// PackageIssueInput
/**
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
**/
var PackageIssueInput = /** @class */ (function (_super) {
    __extends(PackageIssueInput, _super);
    function PackageIssueInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedCpeUri" }),
        __metadata("design:type", String)
    ], PackageIssueInput.prototype, "affectedCpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedPackage" }),
        __metadata("design:type", String)
    ], PackageIssueInput.prototype, "affectedPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedVersion" }),
        __metadata("design:type", Version)
    ], PackageIssueInput.prototype, "affectedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileLocation", elemType: GrafeasV1FileLocation }),
        __metadata("design:type", Array)
    ], PackageIssueInput.prototype, "fileLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixAvailable" }),
        __metadata("design:type", Boolean)
    ], PackageIssueInput.prototype, "fixAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedCpeUri" }),
        __metadata("design:type", String)
    ], PackageIssueInput.prototype, "fixedCpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedPackage" }),
        __metadata("design:type", String)
    ], PackageIssueInput.prototype, "fixedPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedVersion" }),
        __metadata("design:type", Version)
    ], PackageIssueInput.prototype, "fixedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], PackageIssueInput.prototype, "packageType", void 0);
    return PackageIssueInput;
}(SpeakeasyBase));
export { PackageIssueInput };
