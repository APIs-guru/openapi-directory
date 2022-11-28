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
import { AgeRangeTargetingOptionDetails } from "./agerangetargetingoptiondetails";
import { AppCategoryTargetingOptionDetails } from "./appcategorytargetingoptiondetails";
import { AudioContentTypeTargetingOptionDetails } from "./audiocontenttypetargetingoptiondetails";
import { AuthorizedSellerStatusTargetingOptionDetails } from "./authorizedsellerstatustargetingoptiondetails";
import { BrowserTargetingOptionDetails } from "./browsertargetingoptiondetails";
import { BusinessChainTargetingOptionDetails } from "./businesschaintargetingoptiondetails";
import { CarrierAndIspTargetingOptionDetails } from "./carrierandisptargetingoptiondetails";
import { CategoryTargetingOptionDetails } from "./categorytargetingoptiondetails";
import { ContentDurationTargetingOptionDetails } from "./contentdurationtargetingoptiondetails";
import { ContentGenreTargetingOptionDetails } from "./contentgenretargetingoptiondetails";
import { ContentInstreamPositionTargetingOptionDetails } from "./contentinstreampositiontargetingoptiondetails";
import { ContentOutstreamPositionTargetingOptionDetails } from "./contentoutstreampositiontargetingoptiondetails";
import { ContentStreamTypeTargetingOptionDetails } from "./contentstreamtypetargetingoptiondetails";
import { DeviceMakeModelTargetingOptionDetails } from "./devicemakemodeltargetingoptiondetails";
import { DeviceTypeTargetingOptionDetails } from "./devicetypetargetingoptiondetails";
import { DigitalContentLabelTargetingOptionDetails } from "./digitalcontentlabeltargetingoptiondetails";
import { EnvironmentTargetingOptionDetails } from "./environmenttargetingoptiondetails";
import { ExchangeTargetingOptionDetails } from "./exchangetargetingoptiondetails";
import { GenderTargetingOptionDetails } from "./gendertargetingoptiondetails";
import { GeoRegionTargetingOptionDetails } from "./georegiontargetingoptiondetails";
import { HouseholdIncomeTargetingOptionDetails } from "./householdincometargetingoptiondetails";
import { LanguageTargetingOptionDetails } from "./languagetargetingoptiondetails";
import { NativeContentPositionTargetingOptionDetails } from "./nativecontentpositiontargetingoptiondetails";
import { OmidTargetingOptionDetails } from "./omidtargetingoptiondetails";
import { OnScreenPositionTargetingOptionDetails } from "./onscreenpositiontargetingoptiondetails";
import { OperatingSystemTargetingOptionDetails } from "./operatingsystemtargetingoptiondetails";
import { ParentalStatusTargetingOptionDetails } from "./parentalstatustargetingoptiondetails";
import { PoiTargetingOptionDetails } from "./poitargetingoptiondetails";
import { SensitiveCategoryTargetingOptionDetails } from "./sensitivecategorytargetingoptiondetails";
import { SubExchangeTargetingOptionDetails } from "./subexchangetargetingoptiondetails";
import { UserRewardedContentTargetingOptionDetails } from "./userrewardedcontenttargetingoptiondetails";
import { VideoPlayerSizeTargetingOptionDetails } from "./videoplayersizetargetingoptiondetails";
import { ViewabilityTargetingOptionDetails } from "./viewabilitytargetingoptiondetails";
export var TargetingOptionTargetingTypeEnum;
(function (TargetingOptionTargetingTypeEnum) {
    TargetingOptionTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    TargetingOptionTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    TargetingOptionTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    TargetingOptionTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    TargetingOptionTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    TargetingOptionTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    TargetingOptionTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    TargetingOptionTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    TargetingOptionTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    TargetingOptionTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    TargetingOptionTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    TargetingOptionTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    TargetingOptionTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    TargetingOptionTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    TargetingOptionTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    TargetingOptionTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    TargetingOptionTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    TargetingOptionTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    TargetingOptionTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    TargetingOptionTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    TargetingOptionTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    TargetingOptionTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    TargetingOptionTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    TargetingOptionTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    TargetingOptionTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    TargetingOptionTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    TargetingOptionTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    TargetingOptionTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    TargetingOptionTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    TargetingOptionTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    TargetingOptionTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    TargetingOptionTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    TargetingOptionTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    TargetingOptionTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    TargetingOptionTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    TargetingOptionTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    TargetingOptionTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    TargetingOptionTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    TargetingOptionTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    TargetingOptionTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    TargetingOptionTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    TargetingOptionTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    TargetingOptionTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    TargetingOptionTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    TargetingOptionTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    TargetingOptionTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(TargetingOptionTargetingTypeEnum || (TargetingOptionTargetingTypeEnum = {}));
// TargetingOption
/**
 * Represents a single targeting option, which is a targetable concept in DV360.
**/
var TargetingOption = /** @class */ (function (_super) {
    __extends(TargetingOption, _super);
    function TargetingOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageRangeDetails" }),
        __metadata("design:type", AgeRangeTargetingOptionDetails)
    ], TargetingOption.prototype, "ageRangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appCategoryDetails" }),
        __metadata("design:type", AppCategoryTargetingOptionDetails)
    ], TargetingOption.prototype, "appCategoryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioContentTypeDetails" }),
        __metadata("design:type", AudioContentTypeTargetingOptionDetails)
    ], TargetingOption.prototype, "audioContentTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedSellerStatusDetails" }),
        __metadata("design:type", AuthorizedSellerStatusTargetingOptionDetails)
    ], TargetingOption.prototype, "authorizedSellerStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserDetails" }),
        __metadata("design:type", BrowserTargetingOptionDetails)
    ], TargetingOption.prototype, "browserDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessChainDetails" }),
        __metadata("design:type", BusinessChainTargetingOptionDetails)
    ], TargetingOption.prototype, "businessChainDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrierAndIspDetails" }),
        __metadata("design:type", CarrierAndIspTargetingOptionDetails)
    ], TargetingOption.prototype, "carrierAndIspDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryDetails" }),
        __metadata("design:type", CategoryTargetingOptionDetails)
    ], TargetingOption.prototype, "categoryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDurationDetails" }),
        __metadata("design:type", ContentDurationTargetingOptionDetails)
    ], TargetingOption.prototype, "contentDurationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentGenreDetails" }),
        __metadata("design:type", ContentGenreTargetingOptionDetails)
    ], TargetingOption.prototype, "contentGenreDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentInstreamPositionDetails" }),
        __metadata("design:type", ContentInstreamPositionTargetingOptionDetails)
    ], TargetingOption.prototype, "contentInstreamPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOutstreamPositionDetails" }),
        __metadata("design:type", ContentOutstreamPositionTargetingOptionDetails)
    ], TargetingOption.prototype, "contentOutstreamPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentStreamTypeDetails" }),
        __metadata("design:type", ContentStreamTypeTargetingOptionDetails)
    ], TargetingOption.prototype, "contentStreamTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMakeModelDetails" }),
        __metadata("design:type", DeviceMakeModelTargetingOptionDetails)
    ], TargetingOption.prototype, "deviceMakeModelDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceTypeDetails" }),
        __metadata("design:type", DeviceTypeTargetingOptionDetails)
    ], TargetingOption.prototype, "deviceTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digitalContentLabelDetails" }),
        __metadata("design:type", DigitalContentLabelTargetingOptionDetails)
    ], TargetingOption.prototype, "digitalContentLabelDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentDetails" }),
        __metadata("design:type", EnvironmentTargetingOptionDetails)
    ], TargetingOption.prototype, "environmentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeDetails" }),
        __metadata("design:type", ExchangeTargetingOptionDetails)
    ], TargetingOption.prototype, "exchangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genderDetails" }),
        __metadata("design:type", GenderTargetingOptionDetails)
    ], TargetingOption.prototype, "genderDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoRegionDetails" }),
        __metadata("design:type", GeoRegionTargetingOptionDetails)
    ], TargetingOption.prototype, "geoRegionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=householdIncomeDetails" }),
        __metadata("design:type", HouseholdIncomeTargetingOptionDetails)
    ], TargetingOption.prototype, "householdIncomeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageDetails" }),
        __metadata("design:type", LanguageTargetingOptionDetails)
    ], TargetingOption.prototype, "languageDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TargetingOption.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nativeContentPositionDetails" }),
        __metadata("design:type", NativeContentPositionTargetingOptionDetails)
    ], TargetingOption.prototype, "nativeContentPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=omidDetails" }),
        __metadata("design:type", OmidTargetingOptionDetails)
    ], TargetingOption.prototype, "omidDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onScreenPositionDetails" }),
        __metadata("design:type", OnScreenPositionTargetingOptionDetails)
    ], TargetingOption.prototype, "onScreenPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatingSystemDetails" }),
        __metadata("design:type", OperatingSystemTargetingOptionDetails)
    ], TargetingOption.prototype, "operatingSystemDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentalStatusDetails" }),
        __metadata("design:type", ParentalStatusTargetingOptionDetails)
    ], TargetingOption.prototype, "parentalStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poiDetails" }),
        __metadata("design:type", PoiTargetingOptionDetails)
    ], TargetingOption.prototype, "poiDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitiveCategoryDetails" }),
        __metadata("design:type", SensitiveCategoryTargetingOptionDetails)
    ], TargetingOption.prototype, "sensitiveCategoryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subExchangeDetails" }),
        __metadata("design:type", SubExchangeTargetingOptionDetails)
    ], TargetingOption.prototype, "subExchangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], TargetingOption.prototype, "targetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingType" }),
        __metadata("design:type", String)
    ], TargetingOption.prototype, "targetingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRewardedContentDetails" }),
        __metadata("design:type", UserRewardedContentTargetingOptionDetails)
    ], TargetingOption.prototype, "userRewardedContentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoPlayerSizeDetails" }),
        __metadata("design:type", VideoPlayerSizeTargetingOptionDetails)
    ], TargetingOption.prototype, "videoPlayerSizeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewabilityDetails" }),
        __metadata("design:type", ViewabilityTargetingOptionDetails)
    ], TargetingOption.prototype, "viewabilityDetails", void 0);
    return TargetingOption;
}(SpeakeasyBase));
export { TargetingOption };
