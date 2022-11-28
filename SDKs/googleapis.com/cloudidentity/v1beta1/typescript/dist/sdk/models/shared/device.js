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
import { AndroidAttributes } from "./androidattributes";
import { EndpointVerificationSpecificAttributes } from "./endpointverificationspecificattributes";
export var DeviceClientTypesEnum;
(function (DeviceClientTypesEnum) {
    DeviceClientTypesEnum["ClientTypeUnspecified"] = "CLIENT_TYPE_UNSPECIFIED";
    DeviceClientTypesEnum["DriveFs"] = "DRIVE_FS";
    DeviceClientTypesEnum["Fundamental"] = "FUNDAMENTAL";
    DeviceClientTypesEnum["EndpointVerification"] = "ENDPOINT_VERIFICATION";
    DeviceClientTypesEnum["WindowsAdvanced"] = "WINDOWS_ADVANCED";
    DeviceClientTypesEnum["GoogleCredentialsProviderForWindows"] = "GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS";
})(DeviceClientTypesEnum || (DeviceClientTypesEnum = {}));
export var DeviceCompromisedStateEnum;
(function (DeviceCompromisedStateEnum) {
    DeviceCompromisedStateEnum["CompromisedStateUnspecified"] = "COMPROMISED_STATE_UNSPECIFIED";
    DeviceCompromisedStateEnum["Compromised"] = "COMPROMISED";
    DeviceCompromisedStateEnum["Uncompromised"] = "UNCOMPROMISED";
})(DeviceCompromisedStateEnum || (DeviceCompromisedStateEnum = {}));
export var DeviceDeviceTypeEnum;
(function (DeviceDeviceTypeEnum) {
    DeviceDeviceTypeEnum["DeviceTypeUnspecified"] = "DEVICE_TYPE_UNSPECIFIED";
    DeviceDeviceTypeEnum["Android"] = "ANDROID";
    DeviceDeviceTypeEnum["Ios"] = "IOS";
    DeviceDeviceTypeEnum["GoogleSync"] = "GOOGLE_SYNC";
    DeviceDeviceTypeEnum["Windows"] = "WINDOWS";
    DeviceDeviceTypeEnum["MacOs"] = "MAC_OS";
    DeviceDeviceTypeEnum["Linux"] = "LINUX";
    DeviceDeviceTypeEnum["ChromeOs"] = "CHROME_OS";
})(DeviceDeviceTypeEnum || (DeviceDeviceTypeEnum = {}));
export var DeviceEncryptionStateEnum;
(function (DeviceEncryptionStateEnum) {
    DeviceEncryptionStateEnum["EncryptionStateUnspecified"] = "ENCRYPTION_STATE_UNSPECIFIED";
    DeviceEncryptionStateEnum["UnsupportedByDevice"] = "UNSUPPORTED_BY_DEVICE";
    DeviceEncryptionStateEnum["Encrypted"] = "ENCRYPTED";
    DeviceEncryptionStateEnum["NotEncrypted"] = "NOT_ENCRYPTED";
})(DeviceEncryptionStateEnum || (DeviceEncryptionStateEnum = {}));
export var DeviceManagementStateEnum;
(function (DeviceManagementStateEnum) {
    DeviceManagementStateEnum["ManagementStateUnspecified"] = "MANAGEMENT_STATE_UNSPECIFIED";
    DeviceManagementStateEnum["Approved"] = "APPROVED";
    DeviceManagementStateEnum["Blocked"] = "BLOCKED";
    DeviceManagementStateEnum["Pending"] = "PENDING";
    DeviceManagementStateEnum["Unprovisioned"] = "UNPROVISIONED";
    DeviceManagementStateEnum["Wiping"] = "WIPING";
    DeviceManagementStateEnum["Wiped"] = "WIPED";
})(DeviceManagementStateEnum || (DeviceManagementStateEnum = {}));
export var DeviceOwnerTypeEnum;
(function (DeviceOwnerTypeEnum) {
    DeviceOwnerTypeEnum["DeviceOwnershipUnspecified"] = "DEVICE_OWNERSHIP_UNSPECIFIED";
    DeviceOwnerTypeEnum["Company"] = "COMPANY";
    DeviceOwnerTypeEnum["Byod"] = "BYOD";
})(DeviceOwnerTypeEnum || (DeviceOwnerTypeEnum = {}));
// Device
/**
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidSpecificAttributes" }),
        __metadata("design:type", AndroidAttributes)
    ], Device.prototype, "androidSpecificAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetTag" }),
        __metadata("design:type", String)
    ], Device.prototype, "assetTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basebandVersion" }),
        __metadata("design:type", String)
    ], Device.prototype, "basebandVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootloaderVersion" }),
        __metadata("design:type", String)
    ], Device.prototype, "bootloaderVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], Device.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildNumber" }),
        __metadata("design:type", String)
    ], Device.prototype, "buildNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientTypes" }),
        __metadata("design:type", Array)
    ], Device.prototype, "clientTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compromisedState" }),
        __metadata("design:type", String)
    ], Device.prototype, "compromisedState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], Device.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceType" }),
        __metadata("design:type", String)
    ], Device.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledDeveloperOptions" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "enabledDeveloperOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledUsbDebugging" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "enabledUsbDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionState" }),
        __metadata("design:type", String)
    ], Device.prototype, "encryptionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointVerificationSpecificAttributes" }),
        __metadata("design:type", EndpointVerificationSpecificAttributes)
    ], Device.prototype, "endpointVerificationSpecificAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], Device.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imei" }),
        __metadata("design:type", String)
    ], Device.prototype, "imei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kernelVersion" }),
        __metadata("design:type", String)
    ], Device.prototype, "kernelVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSyncTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastSyncTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementState" }),
        __metadata("design:type", String)
    ], Device.prototype, "managementState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], Device.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meid" }),
        __metadata("design:type", String)
    ], Device.prototype, "meid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], Device.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkOperator" }),
        __metadata("design:type", String)
    ], Device.prototype, "networkOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osVersion" }),
        __metadata("design:type", String)
    ], Device.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherAccounts" }),
        __metadata("design:type", Array)
    ], Device.prototype, "otherAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerType" }),
        __metadata("design:type", String)
    ], Device.prototype, "ownerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseVersion" }),
        __metadata("design:type", String)
    ], Device.prototype, "releaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityPatchTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "securityPatchTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], Device.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiMacAddresses" }),
        __metadata("design:type", Array)
    ], Device.prototype, "wifiMacAddresses", void 0);
    return Device;
}(SpeakeasyBase));
export { Device };
// DeviceInput
/**
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
var DeviceInput = /** @class */ (function (_super) {
    __extends(DeviceInput, _super);
    function DeviceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidSpecificAttributes" }),
        __metadata("design:type", AndroidAttributes)
    ], DeviceInput.prototype, "androidSpecificAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetTag" }),
        __metadata("design:type", String)
    ], DeviceInput.prototype, "assetTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientTypes" }),
        __metadata("design:type", Array)
    ], DeviceInput.prototype, "clientTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], DeviceInput.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointVerificationSpecificAttributes" }),
        __metadata("design:type", EndpointVerificationSpecificAttributes)
    ], DeviceInput.prototype, "endpointVerificationSpecificAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], DeviceInput.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSyncTime" }),
        __metadata("design:type", String)
    ], DeviceInput.prototype, "lastSyncTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], DeviceInput.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiMacAddresses" }),
        __metadata("design:type", Array)
    ], DeviceInput.prototype, "wifiMacAddresses", void 0);
    return DeviceInput;
}(SpeakeasyBase));
export { DeviceInput };
