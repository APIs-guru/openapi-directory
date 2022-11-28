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
import { AgeRangeAssignedTargetingOptionDetails } from "./agerangeassignedtargetingoptiondetails";
import { AppCategoryAssignedTargetingOptionDetailsInput } from "./appcategoryassignedtargetingoptiondetails";
import { AppAssignedTargetingOptionDetailsInput } from "./appassignedtargetingoptiondetails";
import { AudienceGroupAssignedTargetingOptionDetails } from "./audiencegroupassignedtargetingoptiondetails";
import { AudioContentTypeAssignedTargetingOptionDetails } from "./audiocontenttypeassignedtargetingoptiondetails";
import { AuthorizedSellerStatusAssignedTargetingOptionDetailsInput } from "./authorizedsellerstatusassignedtargetingoptiondetails";
import { BrowserAssignedTargetingOptionDetailsInput } from "./browserassignedtargetingoptiondetails";
import { BusinessChainAssignedTargetingOptionDetailsInput } from "./businesschainassignedtargetingoptiondetails";
import { CarrierAndIspAssignedTargetingOptionDetailsInput } from "./carrierandispassignedtargetingoptiondetails";
import { CategoryAssignedTargetingOptionDetailsInput } from "./categoryassignedtargetingoptiondetails";
import { ChannelAssignedTargetingOptionDetails } from "./channelassignedtargetingoptiondetails";
import { ContentDurationAssignedTargetingOptionDetailsInput } from "./contentdurationassignedtargetingoptiondetails";
import { ContentGenreAssignedTargetingOptionDetailsInput } from "./contentgenreassignedtargetingoptiondetails";
import { ContentInstreamPositionAssignedTargetingOptionDetailsInput } from "./contentinstreampositionassignedtargetingoptiondetails";
import { ContentOutstreamPositionAssignedTargetingOptionDetailsInput } from "./contentoutstreampositionassignedtargetingoptiondetails";
import { ContentStreamTypeAssignedTargetingOptionDetailsInput } from "./contentstreamtypeassignedtargetingoptiondetails";
import { DayAndTimeAssignedTargetingOptionDetails } from "./dayandtimeassignedtargetingoptiondetails";
import { DeviceMakeModelAssignedTargetingOptionDetailsInput } from "./devicemakemodelassignedtargetingoptiondetails";
import { DeviceTypeAssignedTargetingOptionDetails } from "./devicetypeassignedtargetingoptiondetails";
import { DigitalContentLabelAssignedTargetingOptionDetailsInput } from "./digitalcontentlabelassignedtargetingoptiondetails";
import { EnvironmentAssignedTargetingOptionDetails } from "./environmentassignedtargetingoptiondetails";
import { ExchangeAssignedTargetingOptionDetails } from "./exchangeassignedtargetingoptiondetails";
import { GenderAssignedTargetingOptionDetails } from "./genderassignedtargetingoptiondetails";
import { GeoRegionAssignedTargetingOptionDetailsInput } from "./georegionassignedtargetingoptiondetails";
import { HouseholdIncomeAssignedTargetingOptionDetails } from "./householdincomeassignedtargetingoptiondetails";
import { InventorySourceAssignedTargetingOptionDetails } from "./inventorysourceassignedtargetingoptiondetails";
import { InventorySourceGroupAssignedTargetingOptionDetails } from "./inventorysourcegroupassignedtargetingoptiondetails";
import { KeywordAssignedTargetingOptionDetails } from "./keywordassignedtargetingoptiondetails";
import { LanguageAssignedTargetingOptionDetailsInput } from "./languageassignedtargetingoptiondetails";
import { NativeContentPositionAssignedTargetingOptionDetails } from "./nativecontentpositionassignedtargetingoptiondetails";
import { NegativeKeywordListAssignedTargetingOptionDetails } from "./negativekeywordlistassignedtargetingoptiondetails";
import { OmidAssignedTargetingOptionDetails } from "./omidassignedtargetingoptiondetails";
import { OnScreenPositionAssignedTargetingOptionDetailsInput } from "./onscreenpositionassignedtargetingoptiondetails";
import { OperatingSystemAssignedTargetingOptionDetailsInput } from "./operatingsystemassignedtargetingoptiondetails";
import { ParentalStatusAssignedTargetingOptionDetails } from "./parentalstatusassignedtargetingoptiondetails";
import { PoiAssignedTargetingOptionDetailsInput } from "./poiassignedtargetingoptiondetails";
import { ProximityLocationListAssignedTargetingOptionDetails } from "./proximitylocationlistassignedtargetingoptiondetails";
import { RegionalLocationListAssignedTargetingOptionDetails } from "./regionallocationlistassignedtargetingoptiondetails";
import { SensitiveCategoryAssignedTargetingOptionDetailsInput } from "./sensitivecategoryassignedtargetingoptiondetails";
import { SubExchangeAssignedTargetingOptionDetails } from "./subexchangeassignedtargetingoptiondetails";
import { ThirdPartyVerifierAssignedTargetingOptionDetails } from "./thirdpartyverifierassignedtargetingoptiondetails";
import { UrlAssignedTargetingOptionDetails } from "./urlassignedtargetingoptiondetails";
import { UserRewardedContentAssignedTargetingOptionDetailsInput } from "./userrewardedcontentassignedtargetingoptiondetails";
import { VideoPlayerSizeAssignedTargetingOptionDetails } from "./videoplayersizeassignedtargetingoptiondetails";
import { ViewabilityAssignedTargetingOptionDetails } from "./viewabilityassignedtargetingoptiondetails";
import { AppCategoryAssignedTargetingOptionDetails } from "./appcategoryassignedtargetingoptiondetails";
import { AppAssignedTargetingOptionDetails } from "./appassignedtargetingoptiondetails";
import { AuthorizedSellerStatusAssignedTargetingOptionDetails } from "./authorizedsellerstatusassignedtargetingoptiondetails";
import { BrowserAssignedTargetingOptionDetails } from "./browserassignedtargetingoptiondetails";
import { BusinessChainAssignedTargetingOptionDetails } from "./businesschainassignedtargetingoptiondetails";
import { CarrierAndIspAssignedTargetingOptionDetails } from "./carrierandispassignedtargetingoptiondetails";
import { CategoryAssignedTargetingOptionDetails } from "./categoryassignedtargetingoptiondetails";
import { ContentDurationAssignedTargetingOptionDetails } from "./contentdurationassignedtargetingoptiondetails";
import { ContentGenreAssignedTargetingOptionDetails } from "./contentgenreassignedtargetingoptiondetails";
import { ContentInstreamPositionAssignedTargetingOptionDetails } from "./contentinstreampositionassignedtargetingoptiondetails";
import { ContentOutstreamPositionAssignedTargetingOptionDetails } from "./contentoutstreampositionassignedtargetingoptiondetails";
import { ContentStreamTypeAssignedTargetingOptionDetails } from "./contentstreamtypeassignedtargetingoptiondetails";
import { DeviceMakeModelAssignedTargetingOptionDetails } from "./devicemakemodelassignedtargetingoptiondetails";
import { DigitalContentLabelAssignedTargetingOptionDetails } from "./digitalcontentlabelassignedtargetingoptiondetails";
import { GeoRegionAssignedTargetingOptionDetails } from "./georegionassignedtargetingoptiondetails";
import { LanguageAssignedTargetingOptionDetails } from "./languageassignedtargetingoptiondetails";
import { OnScreenPositionAssignedTargetingOptionDetails } from "./onscreenpositionassignedtargetingoptiondetails";
import { OperatingSystemAssignedTargetingOptionDetails } from "./operatingsystemassignedtargetingoptiondetails";
import { PoiAssignedTargetingOptionDetails } from "./poiassignedtargetingoptiondetails";
import { SensitiveCategoryAssignedTargetingOptionDetails } from "./sensitivecategoryassignedtargetingoptiondetails";
import { UserRewardedContentAssignedTargetingOptionDetails } from "./userrewardedcontentassignedtargetingoptiondetails";
export var AssignedTargetingOptionInheritanceEnum;
(function (AssignedTargetingOptionInheritanceEnum) {
    AssignedTargetingOptionInheritanceEnum["InheritanceUnspecified"] = "INHERITANCE_UNSPECIFIED";
    AssignedTargetingOptionInheritanceEnum["NotInherited"] = "NOT_INHERITED";
    AssignedTargetingOptionInheritanceEnum["InheritedFromPartner"] = "INHERITED_FROM_PARTNER";
    AssignedTargetingOptionInheritanceEnum["InheritedFromAdvertiser"] = "INHERITED_FROM_ADVERTISER";
})(AssignedTargetingOptionInheritanceEnum || (AssignedTargetingOptionInheritanceEnum = {}));
export var AssignedTargetingOptionTargetingTypeEnum;
(function (AssignedTargetingOptionTargetingTypeEnum) {
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    AssignedTargetingOptionTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(AssignedTargetingOptionTargetingTypeEnum || (AssignedTargetingOptionTargetingTypeEnum = {}));
// AssignedTargetingOptionInput
/**
 * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
**/
var AssignedTargetingOptionInput = /** @class */ (function (_super) {
    __extends(AssignedTargetingOptionInput, _super);
    function AssignedTargetingOptionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageRangeDetails" }),
        __metadata("design:type", AgeRangeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "ageRangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appCategoryDetails" }),
        __metadata("design:type", AppCategoryAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "appCategoryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appDetails" }),
        __metadata("design:type", AppAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "appDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceGroupDetails" }),
        __metadata("design:type", AudienceGroupAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "audienceGroupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioContentTypeDetails" }),
        __metadata("design:type", AudioContentTypeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "audioContentTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedSellerStatusDetails" }),
        __metadata("design:type", AuthorizedSellerStatusAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "authorizedSellerStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserDetails" }),
        __metadata("design:type", BrowserAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "browserDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessChainDetails" }),
        __metadata("design:type", BusinessChainAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "businessChainDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrierAndIspDetails" }),
        __metadata("design:type", CarrierAndIspAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "carrierAndIspDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryDetails" }),
        __metadata("design:type", CategoryAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "categoryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelDetails" }),
        __metadata("design:type", ChannelAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "channelDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDurationDetails" }),
        __metadata("design:type", ContentDurationAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "contentDurationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentGenreDetails" }),
        __metadata("design:type", ContentGenreAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "contentGenreDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentInstreamPositionDetails" }),
        __metadata("design:type", ContentInstreamPositionAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "contentInstreamPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOutstreamPositionDetails" }),
        __metadata("design:type", ContentOutstreamPositionAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "contentOutstreamPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentStreamTypeDetails" }),
        __metadata("design:type", ContentStreamTypeAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "contentStreamTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayAndTimeDetails" }),
        __metadata("design:type", DayAndTimeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "dayAndTimeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMakeModelDetails" }),
        __metadata("design:type", DeviceMakeModelAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "deviceMakeModelDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceTypeDetails" }),
        __metadata("design:type", DeviceTypeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "deviceTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digitalContentLabelExclusionDetails" }),
        __metadata("design:type", DigitalContentLabelAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "digitalContentLabelExclusionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentDetails" }),
        __metadata("design:type", EnvironmentAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "environmentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeDetails" }),
        __metadata("design:type", ExchangeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "exchangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genderDetails" }),
        __metadata("design:type", GenderAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "genderDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoRegionDetails" }),
        __metadata("design:type", GeoRegionAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "geoRegionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=householdIncomeDetails" }),
        __metadata("design:type", HouseholdIncomeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "householdIncomeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceDetails" }),
        __metadata("design:type", InventorySourceAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "inventorySourceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceGroupDetails" }),
        __metadata("design:type", InventorySourceGroupAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "inventorySourceGroupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordDetails" }),
        __metadata("design:type", KeywordAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "keywordDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageDetails" }),
        __metadata("design:type", LanguageAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "languageDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nativeContentPositionDetails" }),
        __metadata("design:type", NativeContentPositionAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "nativeContentPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negativeKeywordListDetails" }),
        __metadata("design:type", NegativeKeywordListAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "negativeKeywordListDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=omidDetails" }),
        __metadata("design:type", OmidAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "omidDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onScreenPositionDetails" }),
        __metadata("design:type", OnScreenPositionAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "onScreenPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatingSystemDetails" }),
        __metadata("design:type", OperatingSystemAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "operatingSystemDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentalStatusDetails" }),
        __metadata("design:type", ParentalStatusAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "parentalStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poiDetails" }),
        __metadata("design:type", PoiAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "poiDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityLocationListDetails" }),
        __metadata("design:type", ProximityLocationListAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "proximityLocationListDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalLocationListDetails" }),
        __metadata("design:type", RegionalLocationListAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "regionalLocationListDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitiveCategoryExclusionDetails" }),
        __metadata("design:type", SensitiveCategoryAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "sensitiveCategoryExclusionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subExchangeDetails" }),
        __metadata("design:type", SubExchangeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "subExchangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyVerifierDetails" }),
        __metadata("design:type", ThirdPartyVerifierAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "thirdPartyVerifierDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlDetails" }),
        __metadata("design:type", UrlAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "urlDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRewardedContentDetails" }),
        __metadata("design:type", UserRewardedContentAssignedTargetingOptionDetailsInput)
    ], AssignedTargetingOptionInput.prototype, "userRewardedContentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoPlayerSizeDetails" }),
        __metadata("design:type", VideoPlayerSizeAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "videoPlayerSizeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewabilityDetails" }),
        __metadata("design:type", ViewabilityAssignedTargetingOptionDetails)
    ], AssignedTargetingOptionInput.prototype, "viewabilityDetails", void 0);
    return AssignedTargetingOptionInput;
}(SpeakeasyBase));
export { AssignedTargetingOptionInput };
// AssignedTargetingOption
/**
 * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
**/
var AssignedTargetingOption = /** @class */ (function (_super) {
    __extends(AssignedTargetingOption, _super);
    function AssignedTargetingOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageRangeDetails" }),
        __metadata("design:type", AgeRangeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "ageRangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appCategoryDetails" }),
        __metadata("design:type", AppCategoryAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "appCategoryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appDetails" }),
        __metadata("design:type", AppAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "appDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], AssignedTargetingOption.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceGroupDetails" }),
        __metadata("design:type", AudienceGroupAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "audienceGroupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioContentTypeDetails" }),
        __metadata("design:type", AudioContentTypeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "audioContentTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedSellerStatusDetails" }),
        __metadata("design:type", AuthorizedSellerStatusAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "authorizedSellerStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserDetails" }),
        __metadata("design:type", BrowserAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "browserDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessChainDetails" }),
        __metadata("design:type", BusinessChainAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "businessChainDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrierAndIspDetails" }),
        __metadata("design:type", CarrierAndIspAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "carrierAndIspDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryDetails" }),
        __metadata("design:type", CategoryAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "categoryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelDetails" }),
        __metadata("design:type", ChannelAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "channelDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDurationDetails" }),
        __metadata("design:type", ContentDurationAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "contentDurationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentGenreDetails" }),
        __metadata("design:type", ContentGenreAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "contentGenreDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentInstreamPositionDetails" }),
        __metadata("design:type", ContentInstreamPositionAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "contentInstreamPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOutstreamPositionDetails" }),
        __metadata("design:type", ContentOutstreamPositionAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "contentOutstreamPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentStreamTypeDetails" }),
        __metadata("design:type", ContentStreamTypeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "contentStreamTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayAndTimeDetails" }),
        __metadata("design:type", DayAndTimeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "dayAndTimeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMakeModelDetails" }),
        __metadata("design:type", DeviceMakeModelAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "deviceMakeModelDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceTypeDetails" }),
        __metadata("design:type", DeviceTypeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "deviceTypeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digitalContentLabelExclusionDetails" }),
        __metadata("design:type", DigitalContentLabelAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "digitalContentLabelExclusionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentDetails" }),
        __metadata("design:type", EnvironmentAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "environmentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeDetails" }),
        __metadata("design:type", ExchangeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "exchangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genderDetails" }),
        __metadata("design:type", GenderAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "genderDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoRegionDetails" }),
        __metadata("design:type", GeoRegionAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "geoRegionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=householdIncomeDetails" }),
        __metadata("design:type", HouseholdIncomeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "householdIncomeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritance" }),
        __metadata("design:type", String)
    ], AssignedTargetingOption.prototype, "inheritance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceDetails" }),
        __metadata("design:type", InventorySourceAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "inventorySourceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceGroupDetails" }),
        __metadata("design:type", InventorySourceGroupAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "inventorySourceGroupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordDetails" }),
        __metadata("design:type", KeywordAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "keywordDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageDetails" }),
        __metadata("design:type", LanguageAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "languageDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AssignedTargetingOption.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nativeContentPositionDetails" }),
        __metadata("design:type", NativeContentPositionAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "nativeContentPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negativeKeywordListDetails" }),
        __metadata("design:type", NegativeKeywordListAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "negativeKeywordListDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=omidDetails" }),
        __metadata("design:type", OmidAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "omidDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onScreenPositionDetails" }),
        __metadata("design:type", OnScreenPositionAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "onScreenPositionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatingSystemDetails" }),
        __metadata("design:type", OperatingSystemAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "operatingSystemDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentalStatusDetails" }),
        __metadata("design:type", ParentalStatusAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "parentalStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poiDetails" }),
        __metadata("design:type", PoiAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "poiDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proximityLocationListDetails" }),
        __metadata("design:type", ProximityLocationListAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "proximityLocationListDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalLocationListDetails" }),
        __metadata("design:type", RegionalLocationListAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "regionalLocationListDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitiveCategoryExclusionDetails" }),
        __metadata("design:type", SensitiveCategoryAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "sensitiveCategoryExclusionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subExchangeDetails" }),
        __metadata("design:type", SubExchangeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "subExchangeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingType" }),
        __metadata("design:type", String)
    ], AssignedTargetingOption.prototype, "targetingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyVerifierDetails" }),
        __metadata("design:type", ThirdPartyVerifierAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "thirdPartyVerifierDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlDetails" }),
        __metadata("design:type", UrlAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "urlDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRewardedContentDetails" }),
        __metadata("design:type", UserRewardedContentAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "userRewardedContentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoPlayerSizeDetails" }),
        __metadata("design:type", VideoPlayerSizeAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "videoPlayerSizeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewabilityDetails" }),
        __metadata("design:type", ViewabilityAssignedTargetingOptionDetails)
    ], AssignedTargetingOption.prototype, "viewabilityDetails", void 0);
    return AssignedTargetingOption;
}(SpeakeasyBase));
export { AssignedTargetingOption };
