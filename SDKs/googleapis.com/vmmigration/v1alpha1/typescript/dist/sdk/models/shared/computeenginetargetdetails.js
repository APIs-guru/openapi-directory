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
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";
export var ComputeEngineTargetDetailsBootOptionEnum;
(function (ComputeEngineTargetDetailsBootOptionEnum) {
    ComputeEngineTargetDetailsBootOptionEnum["ComputeEngineBootOptionUnspecified"] = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED";
    ComputeEngineTargetDetailsBootOptionEnum["ComputeEngineBootOptionEfi"] = "COMPUTE_ENGINE_BOOT_OPTION_EFI";
    ComputeEngineTargetDetailsBootOptionEnum["ComputeEngineBootOptionBios"] = "COMPUTE_ENGINE_BOOT_OPTION_BIOS";
})(ComputeEngineTargetDetailsBootOptionEnum || (ComputeEngineTargetDetailsBootOptionEnum = {}));
export var ComputeEngineTargetDetailsDiskTypeEnum;
(function (ComputeEngineTargetDetailsDiskTypeEnum) {
    ComputeEngineTargetDetailsDiskTypeEnum["ComputeEngineDiskTypeUnspecified"] = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED";
    ComputeEngineTargetDetailsDiskTypeEnum["ComputeEngineDiskTypeStandard"] = "COMPUTE_ENGINE_DISK_TYPE_STANDARD";
    ComputeEngineTargetDetailsDiskTypeEnum["ComputeEngineDiskTypeSsd"] = "COMPUTE_ENGINE_DISK_TYPE_SSD";
    ComputeEngineTargetDetailsDiskTypeEnum["ComputeEngineDiskTypeBalanced"] = "COMPUTE_ENGINE_DISK_TYPE_BALANCED";
})(ComputeEngineTargetDetailsDiskTypeEnum || (ComputeEngineTargetDetailsDiskTypeEnum = {}));
export var ComputeEngineTargetDetailsLicenseTypeEnum;
(function (ComputeEngineTargetDetailsLicenseTypeEnum) {
    ComputeEngineTargetDetailsLicenseTypeEnum["ComputeEngineLicenseTypeDefault"] = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT";
    ComputeEngineTargetDetailsLicenseTypeEnum["ComputeEngineLicenseTypePayg"] = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG";
    ComputeEngineTargetDetailsLicenseTypeEnum["ComputeEngineLicenseTypeByol"] = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL";
})(ComputeEngineTargetDetailsLicenseTypeEnum || (ComputeEngineTargetDetailsLicenseTypeEnum = {}));
// ComputeEngineTargetDetails
/**
 * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
var ComputeEngineTargetDetails = /** @class */ (function (_super) {
    __extends(ComputeEngineTargetDetails, _super);
    function ComputeEngineTargetDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalLicenses" }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDetails.prototype, "additionalLicenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedLicense" }),
        __metadata("design:type", AppliedLicense)
    ], ComputeEngineTargetDetails.prototype, "appliedLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootOption" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "bootOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeScheduling" }),
        __metadata("design:type", ComputeScheduling)
    ], ComputeEngineTargetDetails.prototype, "computeScheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ComputeEngineTargetDetails.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "licenseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineTypeSeries" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "machineTypeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ComputeEngineTargetDetails.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDetails.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTags" }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDetails.prototype, "networkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secureBoot" }),
        __metadata("design:type", Boolean)
    ], ComputeEngineTargetDetails.prototype, "secureBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmName" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "vmName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDetails.prototype, "zone", void 0);
    return ComputeEngineTargetDetails;
}(SpeakeasyBase));
export { ComputeEngineTargetDetails };
