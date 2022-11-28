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
import { AwsSecurityGroup } from "./awssecuritygroup";
export var AwsVmDetailsArchitectureEnum;
(function (AwsVmDetailsArchitectureEnum) {
    AwsVmDetailsArchitectureEnum["VmArchitectureUnspecified"] = "VM_ARCHITECTURE_UNSPECIFIED";
    AwsVmDetailsArchitectureEnum["I386"] = "I386";
    AwsVmDetailsArchitectureEnum["X8664"] = "X86_64";
    AwsVmDetailsArchitectureEnum["Arm64"] = "ARM64";
    AwsVmDetailsArchitectureEnum["X8664Mac"] = "X86_64_MAC";
})(AwsVmDetailsArchitectureEnum || (AwsVmDetailsArchitectureEnum = {}));
export var AwsVmDetailsBootOptionEnum;
(function (AwsVmDetailsBootOptionEnum) {
    AwsVmDetailsBootOptionEnum["BootOptionUnspecified"] = "BOOT_OPTION_UNSPECIFIED";
    AwsVmDetailsBootOptionEnum["Efi"] = "EFI";
    AwsVmDetailsBootOptionEnum["Bios"] = "BIOS";
})(AwsVmDetailsBootOptionEnum || (AwsVmDetailsBootOptionEnum = {}));
export var AwsVmDetailsPowerStateEnum;
(function (AwsVmDetailsPowerStateEnum) {
    AwsVmDetailsPowerStateEnum["PowerStateUnspecified"] = "POWER_STATE_UNSPECIFIED";
    AwsVmDetailsPowerStateEnum["On"] = "ON";
    AwsVmDetailsPowerStateEnum["Off"] = "OFF";
    AwsVmDetailsPowerStateEnum["Suspended"] = "SUSPENDED";
    AwsVmDetailsPowerStateEnum["Pending"] = "PENDING";
})(AwsVmDetailsPowerStateEnum || (AwsVmDetailsPowerStateEnum = {}));
export var AwsVmDetailsVirtualizationTypeEnum;
(function (AwsVmDetailsVirtualizationTypeEnum) {
    AwsVmDetailsVirtualizationTypeEnum["VmVirtualizationTypeUnspecified"] = "VM_VIRTUALIZATION_TYPE_UNSPECIFIED";
    AwsVmDetailsVirtualizationTypeEnum["Hvm"] = "HVM";
    AwsVmDetailsVirtualizationTypeEnum["Paravirtual"] = "PARAVIRTUAL";
})(AwsVmDetailsVirtualizationTypeEnum || (AwsVmDetailsVirtualizationTypeEnum = {}));
// AwsVmDetails
/**
 * AwsVmDetails describes a VM in AWS.
**/
var AwsVmDetails = /** @class */ (function (_super) {
    __extends(AwsVmDetails, _super);
    function AwsVmDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architecture" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootOption" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "bootOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committedStorageMb" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "committedStorageMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuCount" }),
        __metadata("design:type", Number)
    ], AwsVmDetails.prototype, "cpuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskCount" }),
        __metadata("design:type", Number)
    ], AwsVmDetails.prototype, "diskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryMb" }),
        __metadata("design:type", Number)
    ], AwsVmDetails.prototype, "memoryMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osDescription" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "osDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerState" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "powerState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroups", elemType: AwsSecurityGroup }),
        __metadata("design:type", Array)
    ], AwsVmDetails.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceDescription" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "sourceDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], AwsVmDetails.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualizationType" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "virtualizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmId" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "vmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcId" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "vpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], AwsVmDetails.prototype, "zone", void 0);
    return AwsVmDetails;
}(SpeakeasyBase));
export { AwsVmDetails };
