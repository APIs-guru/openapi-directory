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
export var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
(function (DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum) {
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum || (DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = {}));
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListQueryParams)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest };
var DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse, _super);
    function DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCampaignAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse.prototype, "listCampaignAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse };
