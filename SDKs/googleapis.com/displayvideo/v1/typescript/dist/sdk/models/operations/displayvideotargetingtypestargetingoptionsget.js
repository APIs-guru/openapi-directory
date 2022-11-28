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
export var DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum;
(function (DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum) {
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum || (DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum = {}));
var DisplayvideoTargetingTypesTargetingOptionsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsGetPathParams, _super);
    function DisplayvideoTargetingTypesTargetingOptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetPathParams.prototype, "targetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetPathParams.prototype, "targetingType", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsGetPathParams };
var DisplayvideoTargetingTypesTargetingOptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsGetQueryParams, _super);
    function DisplayvideoTargetingTypesTargetingOptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsGetQueryParams };
var DisplayvideoTargetingTypesTargetingOptionsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsGetSecurity, _super);
    function DisplayvideoTargetingTypesTargetingOptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoTargetingTypesTargetingOptionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoTargetingTypesTargetingOptionsGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsGetSecurity };
var DisplayvideoTargetingTypesTargetingOptionsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsGetRequest, _super);
    function DisplayvideoTargetingTypesTargetingOptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsGetPathParams)
    ], DisplayvideoTargetingTypesTargetingOptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsGetQueryParams)
    ], DisplayvideoTargetingTypesTargetingOptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsGetSecurity)
    ], DisplayvideoTargetingTypesTargetingOptionsGetRequest.prototype, "security", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsGetRequest };
var DisplayvideoTargetingTypesTargetingOptionsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsGetResponse, _super);
    function DisplayvideoTargetingTypesTargetingOptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoTargetingTypesTargetingOptionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TargetingOption)
    ], DisplayvideoTargetingTypesTargetingOptionsGetResponse.prototype, "targetingOption", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsGetResponse };
