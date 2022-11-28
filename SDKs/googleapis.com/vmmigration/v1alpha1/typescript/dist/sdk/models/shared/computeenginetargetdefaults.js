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
export var ComputeEngineTargetDefaultsBootOptionEnum;
(function (ComputeEngineTargetDefaultsBootOptionEnum) {
    ComputeEngineTargetDefaultsBootOptionEnum["ComputeEngineBootOptionUnspecified"] = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED";
    ComputeEngineTargetDefaultsBootOptionEnum["ComputeEngineBootOptionEfi"] = "COMPUTE_ENGINE_BOOT_OPTION_EFI";
    ComputeEngineTargetDefaultsBootOptionEnum["ComputeEngineBootOptionBios"] = "COMPUTE_ENGINE_BOOT_OPTION_BIOS";
})(ComputeEngineTargetDefaultsBootOptionEnum || (ComputeEngineTargetDefaultsBootOptionEnum = {}));
export var ComputeEngineTargetDefaultsDiskTypeEnum;
(function (ComputeEngineTargetDefaultsDiskTypeEnum) {
    ComputeEngineTargetDefaultsDiskTypeEnum["ComputeEngineDiskTypeUnspecified"] = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED";
    ComputeEngineTargetDefaultsDiskTypeEnum["ComputeEngineDiskTypeStandard"] = "COMPUTE_ENGINE_DISK_TYPE_STANDARD";
    ComputeEngineTargetDefaultsDiskTypeEnum["ComputeEngineDiskTypeSsd"] = "COMPUTE_ENGINE_DISK_TYPE_SSD";
    ComputeEngineTargetDefaultsDiskTypeEnum["ComputeEngineDiskTypeBalanced"] = "COMPUTE_ENGINE_DISK_TYPE_BALANCED";
})(ComputeEngineTargetDefaultsDiskTypeEnum || (ComputeEngineTargetDefaultsDiskTypeEnum = {}));
export var ComputeEngineTargetDefaultsLicenseTypeEnum;
(function (ComputeEngineTargetDefaultsLicenseTypeEnum) {
    ComputeEngineTargetDefaultsLicenseTypeEnum["ComputeEngineLicenseTypeDefault"] = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT";
    ComputeEngineTargetDefaultsLicenseTypeEnum["ComputeEngineLicenseTypePayg"] = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG";
    ComputeEngineTargetDefaultsLicenseTypeEnum["ComputeEngineLicenseTypeByol"] = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL";
})(ComputeEngineTargetDefaultsLicenseTypeEnum || (ComputeEngineTargetDefaultsLicenseTypeEnum = {}));
// ComputeEngineTargetDefaults
/**
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
**/
var ComputeEngineTargetDefaults = /** @class */ (function (_super) {
    __extends(ComputeEngineTargetDefaults, _super);
    function ComputeEngineTargetDefaults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalLicenses" }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDefaults.prototype, "additionalLicenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedLicense" }),
        __metadata("design:type", AppliedLicense)
    ], ComputeEngineTargetDefaults.prototype, "appliedLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootOption" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "bootOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeScheduling" }),
        __metadata("design:type", ComputeScheduling)
    ], ComputeEngineTargetDefaults.prototype, "computeScheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ComputeEngineTargetDefaults.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "licenseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineTypeSeries" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "machineTypeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ComputeEngineTargetDefaults.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDefaults.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTags" }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDefaults.prototype, "networkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secureBoot" }),
        __metadata("design:type", Boolean)
    ], ComputeEngineTargetDefaults.prototype, "secureBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetProject" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "targetProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmName" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "vmName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaults.prototype, "zone", void 0);
    return ComputeEngineTargetDefaults;
}(SpeakeasyBase));
export { ComputeEngineTargetDefaults };
// ComputeEngineTargetDefaultsInput
/**
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
**/
var ComputeEngineTargetDefaultsInput = /** @class */ (function (_super) {
    __extends(ComputeEngineTargetDefaultsInput, _super);
    function ComputeEngineTargetDefaultsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalLicenses" }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDefaultsInput.prototype, "additionalLicenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedLicense" }),
        __metadata("design:type", AppliedLicense)
    ], ComputeEngineTargetDefaultsInput.prototype, "appliedLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeScheduling" }),
        __metadata("design:type", ComputeScheduling)
    ], ComputeEngineTargetDefaultsInput.prototype, "computeScheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ComputeEngineTargetDefaultsInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "licenseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineTypeSeries" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "machineTypeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ComputeEngineTargetDefaultsInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDefaultsInput.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTags" }),
        __metadata("design:type", Array)
    ], ComputeEngineTargetDefaultsInput.prototype, "networkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secureBoot" }),
        __metadata("design:type", Boolean)
    ], ComputeEngineTargetDefaultsInput.prototype, "secureBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetProject" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "targetProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmName" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "vmName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], ComputeEngineTargetDefaultsInput.prototype, "zone", void 0);
    return ComputeEngineTargetDefaultsInput;
}(SpeakeasyBase));
export { ComputeEngineTargetDefaultsInput };
