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
export var GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;
(function (GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum) {
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum["ChallengeSecurityPreferenceUnspecified"] = "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum["Usability"] = "USABILITY";
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum["Balance"] = "BALANCE";
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum["Security"] = "SECURITY";
})(GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum || (GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum = {}));
export var GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
(function (GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum) {
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum["IntegrationTypeUnspecified"] = "INTEGRATION_TYPE_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum["Score"] = "SCORE";
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum["Checkbox"] = "CHECKBOX";
    GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum["Invisible"] = "INVISIBLE";
})(GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum || (GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum = {}));
// GoogleCloudRecaptchaenterpriseV1WebKeySettings
/**
 * Settings specific to keys that can be used by websites.
**/
var GoogleCloudRecaptchaenterpriseV1WebKeySettings = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1WebKeySettings, _super);
    function GoogleCloudRecaptchaenterpriseV1WebKeySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowAllDomains" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRecaptchaenterpriseV1WebKeySettings.prototype, "allowAllDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowAmpTraffic" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRecaptchaenterpriseV1WebKeySettings.prototype, "allowAmpTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedDomains" }),
        __metadata("design:type", Array)
    ], GoogleCloudRecaptchaenterpriseV1WebKeySettings.prototype, "allowedDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challengeSecurityPreference" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1WebKeySettings.prototype, "challengeSecurityPreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationType" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1WebKeySettings.prototype, "integrationType", void 0);
    return GoogleCloudRecaptchaenterpriseV1WebKeySettings;
}(SpeakeasyBase));
export { GoogleCloudRecaptchaenterpriseV1WebKeySettings };
