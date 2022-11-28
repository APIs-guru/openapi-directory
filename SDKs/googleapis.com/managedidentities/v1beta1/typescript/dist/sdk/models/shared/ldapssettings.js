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
import { Certificate } from "./certificate";
export var LdapsSettingsStateEnum;
(function (LdapsSettingsStateEnum) {
    LdapsSettingsStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    LdapsSettingsStateEnum["Updating"] = "UPDATING";
    LdapsSettingsStateEnum["Active"] = "ACTIVE";
    LdapsSettingsStateEnum["Failed"] = "FAILED";
})(LdapsSettingsStateEnum || (LdapsSettingsStateEnum = {}));
// LdapsSettingsInput
/**
 * LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
var LdapsSettingsInput = /** @class */ (function (_super) {
    __extends(LdapsSettingsInput, _super);
    function LdapsSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", Certificate)
    ], LdapsSettingsInput.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePassword" }),
        __metadata("design:type", String)
    ], LdapsSettingsInput.prototype, "certificatePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePfx" }),
        __metadata("design:type", String)
    ], LdapsSettingsInput.prototype, "certificatePfx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LdapsSettingsInput.prototype, "name", void 0);
    return LdapsSettingsInput;
}(SpeakeasyBase));
export { LdapsSettingsInput };
// LdapsSettings
/**
 * LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
var LdapsSettings = /** @class */ (function (_super) {
    __extends(LdapsSettings, _super);
    function LdapsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", Certificate)
    ], LdapsSettings.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePassword" }),
        __metadata("design:type", String)
    ], LdapsSettings.prototype, "certificatePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePfx" }),
        __metadata("design:type", String)
    ], LdapsSettings.prototype, "certificatePfx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LdapsSettings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], LdapsSettings.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], LdapsSettings.prototype, "updateTime", void 0);
    return LdapsSettings;
}(SpeakeasyBase));
export { LdapsSettings };
