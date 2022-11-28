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
export var DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum;
(function (DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum) {
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum || (DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum = {}));
var DisplayvideoTargetingTypesTargetingOptionsSearchPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsSearchPathParams, _super);
    function DisplayvideoTargetingTypesTargetingOptionsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchPathParams.prototype, "targetingType", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsSearchPathParams;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsSearchPathParams };
var DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams, _super);
    function DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams };
var DisplayvideoTargetingTypesTargetingOptionsSearchSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsSearchSecurity, _super);
    function DisplayvideoTargetingTypesTargetingOptionsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsSearchSecurity;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsSearchSecurity };
var DisplayvideoTargetingTypesTargetingOptionsSearchRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsSearchRequest, _super);
    function DisplayvideoTargetingTypesTargetingOptionsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsSearchPathParams)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchTargetingOptionsRequest)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsSearchSecurity)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchRequest.prototype, "security", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsSearchRequest;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsSearchRequest };
var DisplayvideoTargetingTypesTargetingOptionsSearchResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsSearchResponse, _super);
    function DisplayvideoTargetingTypesTargetingOptionsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchTargetingOptionsResponse)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchResponse.prototype, "searchTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoTargetingTypesTargetingOptionsSearchResponse.prototype, "statusCode", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsSearchResponse;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsSearchResponse };
