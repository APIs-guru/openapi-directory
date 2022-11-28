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
import { GoogleIdentityAccesscontextmanagerV1OsConstraint } from "./googleidentityaccesscontextmanagerv1osconstraint";
export var GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum;
(function (GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum) {
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum["ManagementUnspecified"] = "MANAGEMENT_UNSPECIFIED";
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum["None"] = "NONE";
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum["Basic"] = "BASIC";
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum["Complete"] = "COMPLETE";
})(GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum || (GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum = {}));
export var GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum;
(function (GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum) {
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum["EncryptionUnspecified"] = "ENCRYPTION_UNSPECIFIED";
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum["EncryptionUnsupported"] = "ENCRYPTION_UNSUPPORTED";
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum["Unencrypted"] = "UNENCRYPTED";
    GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum["Encrypted"] = "ENCRYPTED";
})(GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum || (GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum = {}));
// GoogleIdentityAccesscontextmanagerV1DevicePolicy
/**
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
**/
var GoogleIdentityAccesscontextmanagerV1DevicePolicy = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1DevicePolicy, _super);
    function GoogleIdentityAccesscontextmanagerV1DevicePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedDeviceManagementLevels" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1DevicePolicy.prototype, "allowedDeviceManagementLevels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedEncryptionStatuses" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1DevicePolicy.prototype, "allowedEncryptionStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osConstraints", elemType: GoogleIdentityAccesscontextmanagerV1OsConstraint }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1DevicePolicy.prototype, "osConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireAdminApproval" }),
        __metadata("design:type", Boolean)
    ], GoogleIdentityAccesscontextmanagerV1DevicePolicy.prototype, "requireAdminApproval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireCorpOwned" }),
        __metadata("design:type", Boolean)
    ], GoogleIdentityAccesscontextmanagerV1DevicePolicy.prototype, "requireCorpOwned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireScreenlock" }),
        __metadata("design:type", Boolean)
    ], GoogleIdentityAccesscontextmanagerV1DevicePolicy.prototype, "requireScreenlock", void 0);
    return GoogleIdentityAccesscontextmanagerV1DevicePolicy;
}(SpeakeasyBase));
export { GoogleIdentityAccesscontextmanagerV1DevicePolicy };
