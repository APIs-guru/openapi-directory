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
export var TargetVmDetailsBootOptionEnum;
(function (TargetVmDetailsBootOptionEnum) {
    TargetVmDetailsBootOptionEnum["BootOptionUnspecified"] = "BOOT_OPTION_UNSPECIFIED";
    TargetVmDetailsBootOptionEnum["Efi"] = "EFI";
    TargetVmDetailsBootOptionEnum["Bios"] = "BIOS";
})(TargetVmDetailsBootOptionEnum || (TargetVmDetailsBootOptionEnum = {}));
export var TargetVmDetailsDiskTypeEnum;
(function (TargetVmDetailsDiskTypeEnum) {
    TargetVmDetailsDiskTypeEnum["DiskTypeUnspecified"] = "DISK_TYPE_UNSPECIFIED";
    TargetVmDetailsDiskTypeEnum["Standard"] = "STANDARD";
    TargetVmDetailsDiskTypeEnum["Balanced"] = "BALANCED";
    TargetVmDetailsDiskTypeEnum["Ssd"] = "SSD";
})(TargetVmDetailsDiskTypeEnum || (TargetVmDetailsDiskTypeEnum = {}));
export var TargetVmDetailsLicenseTypeEnum;
(function (TargetVmDetailsLicenseTypeEnum) {
    TargetVmDetailsLicenseTypeEnum["Default"] = "DEFAULT";
    TargetVmDetailsLicenseTypeEnum["Payg"] = "PAYG";
    TargetVmDetailsLicenseTypeEnum["Byol"] = "BYOL";
})(TargetVmDetailsLicenseTypeEnum || (TargetVmDetailsLicenseTypeEnum = {}));
// TargetVmDetailsInput
/**
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
var TargetVmDetailsInput = /** @class */ (function (_super) {
    __extends(TargetVmDetailsInput, _super);
    function TargetVmDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedLicense" }),
        __metadata("design:type", AppliedLicense)
    ], TargetVmDetailsInput.prototype, "appliedLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeScheduling" }),
        __metadata("design:type", ComputeScheduling)
    ], TargetVmDetailsInput.prototype, "computeScheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalIp" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "externalIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalIp" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "internalIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], TargetVmDetailsInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseType" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "licenseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineTypeSeries" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "machineTypeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], TargetVmDetailsInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface }),
        __metadata("design:type", Array)
    ], TargetVmDetailsInput.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTags" }),
        __metadata("design:type", Array)
    ], TargetVmDetailsInput.prototype, "networkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secureBoot" }),
        __metadata("design:type", Boolean)
    ], TargetVmDetailsInput.prototype, "secureBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetProject" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "targetProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], TargetVmDetailsInput.prototype, "zone", void 0);
    return TargetVmDetailsInput;
}(SpeakeasyBase));
export { TargetVmDetailsInput };
// TargetVmDetails
/**
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
var TargetVmDetails = /** @class */ (function (_super) {
    __extends(TargetVmDetails, _super);
    function TargetVmDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedLicense" }),
        __metadata("design:type", AppliedLicense)
    ], TargetVmDetails.prototype, "appliedLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootOption" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "bootOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeScheduling" }),
        __metadata("design:type", ComputeScheduling)
    ], TargetVmDetails.prototype, "computeScheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalIp" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "externalIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalIp" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "internalIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], TargetVmDetails.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseType" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "licenseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineTypeSeries" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "machineTypeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], TargetVmDetails.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface }),
        __metadata("design:type", Array)
    ], TargetVmDetails.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTags" }),
        __metadata("design:type", Array)
    ], TargetVmDetails.prototype, "networkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secureBoot" }),
        __metadata("design:type", Boolean)
    ], TargetVmDetails.prototype, "secureBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetProject" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "targetProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], TargetVmDetails.prototype, "zone", void 0);
    return TargetVmDetails;
}(SpeakeasyBase));
export { TargetVmDetails };
