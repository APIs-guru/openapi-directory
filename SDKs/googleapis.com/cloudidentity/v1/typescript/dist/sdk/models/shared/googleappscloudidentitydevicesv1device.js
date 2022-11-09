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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCloudidentityDevicesV1AndroidAttributes } from "./googleappscloudidentitydevicesv1androidattributes";
export var GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum["CompromisedStateUnspecified"] = "COMPROMISED_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum["Compromised"] = "COMPROMISED";
    GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum["Uncompromised"] = "UNCOMPROMISED";
})(GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum || (GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum = {}));
export var GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["DeviceTypeUnspecified"] = "DEVICE_TYPE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["Android"] = "ANDROID";
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["Ios"] = "IOS";
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["GoogleSync"] = "GOOGLE_SYNC";
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["Windows"] = "WINDOWS";
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["MacOs"] = "MAC_OS";
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["Linux"] = "LINUX";
    GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum["ChromeOs"] = "CHROME_OS";
})(GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum || (GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = {}));
export var GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum["EncryptionStateUnspecified"] = "ENCRYPTION_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum["UnsupportedByDevice"] = "UNSUPPORTED_BY_DEVICE";
    GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum["Encrypted"] = "ENCRYPTED";
    GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum["NotEncrypted"] = "NOT_ENCRYPTED";
})(GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum || (GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum = {}));
export var GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum["ManagementStateUnspecified"] = "MANAGEMENT_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum["Approved"] = "APPROVED";
    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum["Blocked"] = "BLOCKED";
    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum["Pending"] = "PENDING";
    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum["Unprovisioned"] = "UNPROVISIONED";
    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum["Wiping"] = "WIPING";
    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum["Wiped"] = "WIPED";
})(GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum || (GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = {}));
export var GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum["DeviceOwnershipUnspecified"] = "DEVICE_OWNERSHIP_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum["Company"] = "COMPANY";
    GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum["Byod"] = "BYOD";
})(GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum || (GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum = {}));
// GoogleAppsCloudidentityDevicesV1Device
/**
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
var GoogleAppsCloudidentityDevicesV1Device = /** @class */ (function (_super) {
    __extends(GoogleAppsCloudidentityDevicesV1Device, _super);
    function GoogleAppsCloudidentityDevicesV1Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=androidSpecificAttributes" }),
        __metadata("design:type", GoogleAppsCloudidentityDevicesV1AndroidAttributes)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "androidSpecificAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=assetTag" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "assetTag", void 0);
    __decorate([
        Metadata({ data: "json, name=basebandVersion" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "basebandVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=bootloaderVersion" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "bootloaderVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "brand", void 0);
    __decorate([
        Metadata({ data: "json, name=buildNumber" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "buildNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=compromisedState" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "compromisedState", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "deviceId", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceType" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "deviceType", void 0);
    __decorate([
        Metadata({ data: "json, name=enabledDeveloperOptions" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "enabledDeveloperOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=enabledUsbDebugging" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "enabledUsbDebugging", void 0);
    __decorate([
        Metadata({ data: "json, name=encryptionState" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "encryptionState", void 0);
    __decorate([
        Metadata({ data: "json, name=imei" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "imei", void 0);
    __decorate([
        Metadata({ data: "json, name=kernelVersion" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "kernelVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=lastSyncTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "lastSyncTime", void 0);
    __decorate([
        Metadata({ data: "json, name=managementState" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "managementState", void 0);
    __decorate([
        Metadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "manufacturer", void 0);
    __decorate([
        Metadata({ data: "json, name=meid" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "meid", void 0);
    __decorate([
        Metadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "model", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=networkOperator" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "networkOperator", void 0);
    __decorate([
        Metadata({ data: "json, name=osVersion" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "osVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=otherAccounts" }),
        __metadata("design:type", Array)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "otherAccounts", void 0);
    __decorate([
        Metadata({ data: "json, name=ownerType" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "ownerType", void 0);
    __decorate([
        Metadata({ data: "json, name=releaseVersion" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "releaseVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=securityPatchTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "securityPatchTime", void 0);
    __decorate([
        Metadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "serialNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=wifiMacAddresses" }),
        __metadata("design:type", Array)
    ], GoogleAppsCloudidentityDevicesV1Device.prototype, "wifiMacAddresses", void 0);
    return GoogleAppsCloudidentityDevicesV1Device;
}(SpeakeasyBase));
export { GoogleAppsCloudidentityDevicesV1Device };
