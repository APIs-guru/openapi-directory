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
export var DeviceUserCompromisedStateEnum;
(function (DeviceUserCompromisedStateEnum) {
    DeviceUserCompromisedStateEnum["CompromisedStateUnspecified"] = "COMPROMISED_STATE_UNSPECIFIED";
    DeviceUserCompromisedStateEnum["Compromised"] = "COMPROMISED";
    DeviceUserCompromisedStateEnum["NotCompromised"] = "NOT_COMPROMISED";
})(DeviceUserCompromisedStateEnum || (DeviceUserCompromisedStateEnum = {}));
export var DeviceUserManagementStateEnum;
(function (DeviceUserManagementStateEnum) {
    DeviceUserManagementStateEnum["ManagementStateUnspecified"] = "MANAGEMENT_STATE_UNSPECIFIED";
    DeviceUserManagementStateEnum["Wiping"] = "WIPING";
    DeviceUserManagementStateEnum["Wiped"] = "WIPED";
    DeviceUserManagementStateEnum["Approved"] = "APPROVED";
    DeviceUserManagementStateEnum["Blocked"] = "BLOCKED";
    DeviceUserManagementStateEnum["PendingApproval"] = "PENDING_APPROVAL";
    DeviceUserManagementStateEnum["Unenrolled"] = "UNENROLLED";
})(DeviceUserManagementStateEnum || (DeviceUserManagementStateEnum = {}));
export var DeviceUserPasswordStateEnum;
(function (DeviceUserPasswordStateEnum) {
    DeviceUserPasswordStateEnum["PasswordStateUnspecified"] = "PASSWORD_STATE_UNSPECIFIED";
    DeviceUserPasswordStateEnum["PasswordSet"] = "PASSWORD_SET";
    DeviceUserPasswordStateEnum["PasswordNotSet"] = "PASSWORD_NOT_SET";
})(DeviceUserPasswordStateEnum || (DeviceUserPasswordStateEnum = {}));
// DeviceUser
/**
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
var DeviceUser = /** @class */ (function (_super) {
    __extends(DeviceUser, _super);
    function DeviceUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compromisedState" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "compromisedState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstSyncTime" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "firstSyncTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSyncTime" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "lastSyncTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementState" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "managementState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordState" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "passwordState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEmail" }),
        __metadata("design:type", String)
    ], DeviceUser.prototype, "userEmail", void 0);
    return DeviceUser;
}(SpeakeasyBase));
export { DeviceUser };
