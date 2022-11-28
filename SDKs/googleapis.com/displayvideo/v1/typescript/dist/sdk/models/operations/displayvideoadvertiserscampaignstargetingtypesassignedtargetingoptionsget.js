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
import * as shared from "../shared";
export var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
(function (DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum) {
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum || (DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = {}));
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetQueryParams)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse };
