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
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";
export var FirstAndThirdPartyAudienceAudienceSourceEnum;
(function (FirstAndThirdPartyAudienceAudienceSourceEnum) {
    FirstAndThirdPartyAudienceAudienceSourceEnum["AudienceSourceUnspecified"] = "AUDIENCE_SOURCE_UNSPECIFIED";
    FirstAndThirdPartyAudienceAudienceSourceEnum["DisplayVideo360"] = "DISPLAY_VIDEO_360";
    FirstAndThirdPartyAudienceAudienceSourceEnum["CampaignManager"] = "CAMPAIGN_MANAGER";
    FirstAndThirdPartyAudienceAudienceSourceEnum["AdManager"] = "AD_MANAGER";
    FirstAndThirdPartyAudienceAudienceSourceEnum["SearchAds360"] = "SEARCH_ADS_360";
    FirstAndThirdPartyAudienceAudienceSourceEnum["Youtube"] = "YOUTUBE";
    FirstAndThirdPartyAudienceAudienceSourceEnum["AdsDataHub"] = "ADS_DATA_HUB";
})(FirstAndThirdPartyAudienceAudienceSourceEnum || (FirstAndThirdPartyAudienceAudienceSourceEnum = {}));
export var FirstAndThirdPartyAudienceAudienceTypeEnum;
(function (FirstAndThirdPartyAudienceAudienceTypeEnum) {
    FirstAndThirdPartyAudienceAudienceTypeEnum["AudienceTypeUnspecified"] = "AUDIENCE_TYPE_UNSPECIFIED";
    FirstAndThirdPartyAudienceAudienceTypeEnum["CustomerMatchContactInfo"] = "CUSTOMER_MATCH_CONTACT_INFO";
    FirstAndThirdPartyAudienceAudienceTypeEnum["CustomerMatchDeviceId"] = "CUSTOMER_MATCH_DEVICE_ID";
    FirstAndThirdPartyAudienceAudienceTypeEnum["CustomerMatchUserId"] = "CUSTOMER_MATCH_USER_ID";
    FirstAndThirdPartyAudienceAudienceTypeEnum["ActivityBased"] = "ACTIVITY_BASED";
    FirstAndThirdPartyAudienceAudienceTypeEnum["FrequencyCap"] = "FREQUENCY_CAP";
    FirstAndThirdPartyAudienceAudienceTypeEnum["TagBased"] = "TAG_BASED";
    FirstAndThirdPartyAudienceAudienceTypeEnum["YoutubeUsers"] = "YOUTUBE_USERS";
    FirstAndThirdPartyAudienceAudienceTypeEnum["Licensed"] = "LICENSED";
})(FirstAndThirdPartyAudienceAudienceTypeEnum || (FirstAndThirdPartyAudienceAudienceTypeEnum = {}));
export var FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
(function (FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum) {
    FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum["FirstAndThirdPartyAudienceTypeUnspecified"] = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED";
    FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum["FirstAndThirdPartyAudienceTypeFirstParty"] = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY";
    FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum["FirstAndThirdPartyAudienceTypeThirdParty"] = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY";
})(FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum || (FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum = {}));
// FirstAndThirdPartyAudienceInput
/**
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
var FirstAndThirdPartyAudienceInput = /** @class */ (function (_super) {
    __extends(FirstAndThirdPartyAudienceInput, _super);
    function FirstAndThirdPartyAudienceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceInput.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceType" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceInput.prototype, "audienceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactInfoList" }),
        __metadata("design:type", ContactInfoList)
    ], FirstAndThirdPartyAudienceInput.prototype, "contactInfoList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceType" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceInput.prototype, "firstAndThirdPartyAudienceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipDurationDays" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudienceInput.prototype, "membershipDurationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileDeviceIdList" }),
        __metadata("design:type", MobileDeviceIdList)
    ], FirstAndThirdPartyAudienceInput.prototype, "mobileDeviceIdList", void 0);
    return FirstAndThirdPartyAudienceInput;
}(SpeakeasyBase));
export { FirstAndThirdPartyAudienceInput };
// FirstAndThirdPartyAudience
/**
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
var FirstAndThirdPartyAudience = /** @class */ (function (_super) {
    __extends(FirstAndThirdPartyAudience, _super);
    function FirstAndThirdPartyAudience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeDisplayAudienceSize" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "activeDisplayAudienceSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceSource" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "audienceSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceType" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "audienceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactInfoList" }),
        __metadata("design:type", ContactInfoList)
    ], FirstAndThirdPartyAudience.prototype, "contactInfoList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayAudienceSize" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "displayAudienceSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayDesktopAudienceSize" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "displayDesktopAudienceSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayMobileAppAudienceSize" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "displayMobileAppAudienceSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayMobileWebAudienceSize" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "displayMobileWebAudienceSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceId" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "firstAndThirdPartyAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceType" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "firstAndThirdPartyAudienceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gmailAudienceSize" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "gmailAudienceSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipDurationDays" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "membershipDurationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileDeviceIdList" }),
        __metadata("design:type", MobileDeviceIdList)
    ], FirstAndThirdPartyAudience.prototype, "mobileDeviceIdList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=youtubeAudienceSize" }),
        __metadata("design:type", String)
    ], FirstAndThirdPartyAudience.prototype, "youtubeAudienceSize", void 0);
    return FirstAndThirdPartyAudience;
}(SpeakeasyBase));
export { FirstAndThirdPartyAudience };
