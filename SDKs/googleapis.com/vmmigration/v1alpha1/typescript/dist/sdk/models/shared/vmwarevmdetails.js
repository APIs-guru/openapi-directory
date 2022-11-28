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
export var VmwareVmDetailsBootOptionEnum;
(function (VmwareVmDetailsBootOptionEnum) {
    VmwareVmDetailsBootOptionEnum["BootOptionUnspecified"] = "BOOT_OPTION_UNSPECIFIED";
    VmwareVmDetailsBootOptionEnum["Efi"] = "EFI";
    VmwareVmDetailsBootOptionEnum["Bios"] = "BIOS";
})(VmwareVmDetailsBootOptionEnum || (VmwareVmDetailsBootOptionEnum = {}));
export var VmwareVmDetailsPowerStateEnum;
(function (VmwareVmDetailsPowerStateEnum) {
    VmwareVmDetailsPowerStateEnum["PowerStateUnspecified"] = "POWER_STATE_UNSPECIFIED";
    VmwareVmDetailsPowerStateEnum["On"] = "ON";
    VmwareVmDetailsPowerStateEnum["Off"] = "OFF";
    VmwareVmDetailsPowerStateEnum["Suspended"] = "SUSPENDED";
})(VmwareVmDetailsPowerStateEnum || (VmwareVmDetailsPowerStateEnum = {}));
// VmwareVmDetails
/**
 * VmwareVmDetails describes a VM in vCenter.
**/
var VmwareVmDetails = /** @class */ (function (_super) {
    __extends(VmwareVmDetails, _super);
    function VmwareVmDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootOption" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "bootOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committedStorage" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "committedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committedStorageMb" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "committedStorageMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuCount" }),
        __metadata("design:type", Number)
    ], VmwareVmDetails.prototype, "cpuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenterDescription" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "datacenterDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenterId" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "datacenterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskCount" }),
        __metadata("design:type", Number)
    ], VmwareVmDetails.prototype, "diskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestDescription" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "guestDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryMb" }),
        __metadata("design:type", Number)
    ], VmwareVmDetails.prototype, "memoryMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerState" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "powerState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "uuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmId" }),
        __metadata("design:type", String)
    ], VmwareVmDetails.prototype, "vmId", void 0);
    return VmwareVmDetails;
}(SpeakeasyBase));
export { VmwareVmDetails };
// VmwareVmDetailsInput
/**
 * VmwareVmDetails describes a VM in vCenter.
**/
var VmwareVmDetailsInput = /** @class */ (function (_super) {
    __extends(VmwareVmDetailsInput, _super);
    function VmwareVmDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committedStorage" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "committedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committedStorageMb" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "committedStorageMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuCount" }),
        __metadata("design:type", Number)
    ], VmwareVmDetailsInput.prototype, "cpuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenterDescription" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "datacenterDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenterId" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "datacenterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskCount" }),
        __metadata("design:type", Number)
    ], VmwareVmDetailsInput.prototype, "diskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestDescription" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "guestDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryMb" }),
        __metadata("design:type", Number)
    ], VmwareVmDetailsInput.prototype, "memoryMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerState" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "powerState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "uuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmId" }),
        __metadata("design:type", String)
    ], VmwareVmDetailsInput.prototype, "vmId", void 0);
    return VmwareVmDetailsInput;
}(SpeakeasyBase));
export { VmwareVmDetailsInput };
