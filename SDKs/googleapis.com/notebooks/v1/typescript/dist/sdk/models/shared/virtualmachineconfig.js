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
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";
import { ContainerImage } from "./containerimage";
import { LocalDisk } from "./localdisk";
import { EncryptionConfig } from "./encryptionconfig";
import { RuntimeShieldedInstanceConfig } from "./runtimeshieldedinstanceconfig";
import { LocalDiskInput } from "./localdisk";
export var VirtualMachineConfigNicTypeEnum;
(function (VirtualMachineConfigNicTypeEnum) {
    VirtualMachineConfigNicTypeEnum["UnspecifiedNicType"] = "UNSPECIFIED_NIC_TYPE";
    VirtualMachineConfigNicTypeEnum["VirtioNet"] = "VIRTIO_NET";
    VirtualMachineConfigNicTypeEnum["Gvnic"] = "GVNIC";
})(VirtualMachineConfigNicTypeEnum || (VirtualMachineConfigNicTypeEnum = {}));
// VirtualMachineConfig
/**
 * The config settings for virtual machine.
**/
var VirtualMachineConfig = /** @class */ (function (_super) {
    __extends(VirtualMachineConfig, _super);
    function VirtualMachineConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", RuntimeAcceleratorConfig)
    ], VirtualMachineConfig.prototype, "acceleratorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootImage" }),
        __metadata("design:type", Map)
    ], VirtualMachineConfig.prototype, "bootImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerImages", elemType: ContainerImage }),
        __metadata("design:type", Array)
    ], VirtualMachineConfig.prototype, "containerImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDisk" }),
        __metadata("design:type", LocalDisk)
    ], VirtualMachineConfig.prototype, "dataDisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], VirtualMachineConfig.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestAttributes" }),
        __metadata("design:type", Map)
    ], VirtualMachineConfig.prototype, "guestAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalIpOnly" }),
        __metadata("design:type", Boolean)
    ], VirtualMachineConfig.prototype, "internalIpOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], VirtualMachineConfig.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], VirtualMachineConfig.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], VirtualMachineConfig.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], VirtualMachineConfig.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nicType" }),
        __metadata("design:type", String)
    ], VirtualMachineConfig.prototype, "nicType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRange" }),
        __metadata("design:type", String)
    ], VirtualMachineConfig.prototype, "reservedIpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" }),
        __metadata("design:type", RuntimeShieldedInstanceConfig)
    ], VirtualMachineConfig.prototype, "shieldedInstanceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], VirtualMachineConfig.prototype, "subnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VirtualMachineConfig.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], VirtualMachineConfig.prototype, "zone", void 0);
    return VirtualMachineConfig;
}(SpeakeasyBase));
export { VirtualMachineConfig };
// VirtualMachineConfigInput
/**
 * The config settings for virtual machine.
**/
var VirtualMachineConfigInput = /** @class */ (function (_super) {
    __extends(VirtualMachineConfigInput, _super);
    function VirtualMachineConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", RuntimeAcceleratorConfig)
    ], VirtualMachineConfigInput.prototype, "acceleratorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootImage" }),
        __metadata("design:type", Map)
    ], VirtualMachineConfigInput.prototype, "bootImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerImages", elemType: ContainerImage }),
        __metadata("design:type", Array)
    ], VirtualMachineConfigInput.prototype, "containerImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDisk" }),
        __metadata("design:type", LocalDiskInput)
    ], VirtualMachineConfigInput.prototype, "dataDisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], VirtualMachineConfigInput.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalIpOnly" }),
        __metadata("design:type", Boolean)
    ], VirtualMachineConfigInput.prototype, "internalIpOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], VirtualMachineConfigInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], VirtualMachineConfigInput.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], VirtualMachineConfigInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], VirtualMachineConfigInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nicType" }),
        __metadata("design:type", String)
    ], VirtualMachineConfigInput.prototype, "nicType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRange" }),
        __metadata("design:type", String)
    ], VirtualMachineConfigInput.prototype, "reservedIpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" }),
        __metadata("design:type", RuntimeShieldedInstanceConfig)
    ], VirtualMachineConfigInput.prototype, "shieldedInstanceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], VirtualMachineConfigInput.prototype, "subnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VirtualMachineConfigInput.prototype, "tags", void 0);
    return VirtualMachineConfigInput;
}(SpeakeasyBase));
export { VirtualMachineConfigInput };
