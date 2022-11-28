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
var ProfilesProfilesProfileConfigCredentials = /** @class */ (function (_super) {
    __extends(ProfilesProfilesProfileConfigCredentials, _super);
    function ProfilesProfilesProfileConfigCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigCredentials.prototype, "username", void 0);
    return ProfilesProfilesProfileConfigCredentials;
}(SpeakeasyBase));
export { ProfilesProfilesProfileConfigCredentials };
var ProfilesProfilesProfileConfigLocatorsPassword = /** @class */ (function (_super) {
    __extends(ProfilesProfilesProfileConfigLocatorsPassword, _super);
    function ProfilesProfilesProfileConfigLocatorsPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigLocatorsPassword.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigLocatorsPassword.prototype, "value", void 0);
    return ProfilesProfilesProfileConfigLocatorsPassword;
}(SpeakeasyBase));
export { ProfilesProfilesProfileConfigLocatorsPassword };
var ProfilesProfilesProfileConfigLocatorsSubmit = /** @class */ (function (_super) {
    __extends(ProfilesProfilesProfileConfigLocatorsSubmit, _super);
    function ProfilesProfilesProfileConfigLocatorsSubmit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigLocatorsSubmit.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigLocatorsSubmit.prototype, "value", void 0);
    return ProfilesProfilesProfileConfigLocatorsSubmit;
}(SpeakeasyBase));
export { ProfilesProfilesProfileConfigLocatorsSubmit };
var ProfilesProfilesProfileConfigLocatorsUsername = /** @class */ (function (_super) {
    __extends(ProfilesProfilesProfileConfigLocatorsUsername, _super);
    function ProfilesProfilesProfileConfigLocatorsUsername() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigLocatorsUsername.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfigLocatorsUsername.prototype, "value", void 0);
    return ProfilesProfilesProfileConfigLocatorsUsername;
}(SpeakeasyBase));
export { ProfilesProfilesProfileConfigLocatorsUsername };
var ProfilesProfilesProfileConfigLocators = /** @class */ (function (_super) {
    __extends(ProfilesProfilesProfileConfigLocators, _super);
    function ProfilesProfilesProfileConfigLocators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", ProfilesProfilesProfileConfigLocatorsPassword)
    ], ProfilesProfilesProfileConfigLocators.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submit" }),
        __metadata("design:type", ProfilesProfilesProfileConfigLocatorsSubmit)
    ], ProfilesProfilesProfileConfigLocators.prototype, "submit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", ProfilesProfilesProfileConfigLocatorsUsername)
    ], ProfilesProfilesProfileConfigLocators.prototype, "username", void 0);
    return ProfilesProfilesProfileConfigLocators;
}(SpeakeasyBase));
export { ProfilesProfilesProfileConfigLocators };
var ProfilesProfilesProfileConfig = /** @class */ (function (_super) {
    __extends(ProfilesProfilesProfileConfig, _super);
    function ProfilesProfilesProfileConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", ProfilesProfilesProfileConfigCredentials)
    ], ProfilesProfilesProfileConfig.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locators" }),
        __metadata("design:type", ProfilesProfilesProfileConfigLocators)
    ], ProfilesProfilesProfileConfig.prototype, "locators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login_url" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfig.prototype, "loginUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile_name" }),
        __metadata("design:type", String)
    ], ProfilesProfilesProfileConfig.prototype, "profileName", void 0);
    return ProfilesProfilesProfileConfig;
}(SpeakeasyBase));
export { ProfilesProfilesProfileConfig };
var ProfilesProfiles = /** @class */ (function (_super) {
    __extends(ProfilesProfiles, _super);
    function ProfilesProfiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProfilesProfiles.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile_config" }),
        __metadata("design:type", ProfilesProfilesProfileConfig)
    ], ProfilesProfiles.prototype, "profileConfig", void 0);
    return ProfilesProfiles;
}(SpeakeasyBase));
export { ProfilesProfiles };
var Profiles = /** @class */ (function (_super) {
    __extends(Profiles, _super);
    function Profiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profiles", elemType: ProfilesProfiles }),
        __metadata("design:type", Array)
    ], Profiles.prototype, "profiles", void 0);
    return Profiles;
}(SpeakeasyBase));
export { Profiles };
