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
export var ProfileAuthenticationTypeEnum;
(function (ProfileAuthenticationTypeEnum) {
    ProfileAuthenticationTypeEnum["Password"] = "password";
    ProfileAuthenticationTypeEnum["Github"] = "github";
})(ProfileAuthenticationTypeEnum || (ProfileAuthenticationTypeEnum = {}));
export var ProfileLishAuthMethodEnum;
(function (ProfileLishAuthMethodEnum) {
    ProfileLishAuthMethodEnum["PasswordKeys"] = "password_keys";
    ProfileLishAuthMethodEnum["KeysOnly"] = "keys_only";
    ProfileLishAuthMethodEnum["Disabled"] = "disabled";
})(ProfileLishAuthMethodEnum || (ProfileLishAuthMethodEnum = {}));
// ProfileReferrals
/**
 * Information about your status in our referral program.
 *
 * This information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.
 *
**/
var ProfileReferrals = /** @class */ (function (_super) {
    __extends(ProfileReferrals, _super);
    function ProfileReferrals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ProfileReferrals.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed" }),
        __metadata("design:type", Number)
    ], ProfileReferrals.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credit" }),
        __metadata("design:type", Number)
    ], ProfileReferrals.prototype, "credit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pending" }),
        __metadata("design:type", Number)
    ], ProfileReferrals.prototype, "pending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProfileReferrals.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProfileReferrals.prototype, "url", void 0);
    return ProfileReferrals;
}(SpeakeasyBase));
export { ProfileReferrals };
// ProfileInput
/**
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
 *
**/
var ProfileInput = /** @class */ (function (_super) {
    __extends(ProfileInput, _super);
    function ProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized_keys" }),
        __metadata("design:type", Array)
    ], ProfileInput.prototype, "authorizedKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_notifications" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "emailNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_whitelist_enabled" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "ipWhitelistEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lish_auth_method" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "lishAuthMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restricted" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "restricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=two_factor_auth" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "twoFactorAuth", void 0);
    return ProfileInput;
}(SpeakeasyBase));
export { ProfileInput };
// Profile
/**
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
 *
**/
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication_type" }),
        __metadata("design:type", String)
    ], Profile.prototype, "authenticationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized_keys" }),
        __metadata("design:type", Array)
    ], Profile.prototype, "authorizedKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Profile.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_notifications" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "emailNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_whitelist_enabled" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "ipWhitelistEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lish_auth_method" }),
        __metadata("design:type", String)
    ], Profile.prototype, "lishAuthMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrals" }),
        __metadata("design:type", ProfileReferrals)
    ], Profile.prototype, "referrals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restricted" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "restricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Profile.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=two_factor_auth" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "twoFactorAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", Number)
    ], Profile.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Profile.prototype, "username", void 0);
    return Profile;
}(SpeakeasyBase));
export { Profile };
