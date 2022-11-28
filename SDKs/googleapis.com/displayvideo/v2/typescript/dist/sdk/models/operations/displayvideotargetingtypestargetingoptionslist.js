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
export var DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum;
(function (DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum) {
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum || (DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum = {}));
var DisplayvideoTargetingTypesTargetingOptionsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsListPathParams, _super);
    function DisplayvideoTargetingTypesTargetingOptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListPathParams.prototype, "targetingType", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsListPathParams };
var DisplayvideoTargetingTypesTargetingOptionsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsListQueryParams, _super);
    function DisplayvideoTargetingTypesTargetingOptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsListQueryParams };
var DisplayvideoTargetingTypesTargetingOptionsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsListSecurity, _super);
    function DisplayvideoTargetingTypesTargetingOptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoTargetingTypesTargetingOptionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoTargetingTypesTargetingOptionsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsListSecurity };
var DisplayvideoTargetingTypesTargetingOptionsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsListRequest, _super);
    function DisplayvideoTargetingTypesTargetingOptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsListPathParams)
    ], DisplayvideoTargetingTypesTargetingOptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsListQueryParams)
    ], DisplayvideoTargetingTypesTargetingOptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoTargetingTypesTargetingOptionsListSecurity)
    ], DisplayvideoTargetingTypesTargetingOptionsListRequest.prototype, "security", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsListRequest;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsListRequest };
var DisplayvideoTargetingTypesTargetingOptionsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoTargetingTypesTargetingOptionsListResponse, _super);
    function DisplayvideoTargetingTypesTargetingOptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoTargetingTypesTargetingOptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTargetingOptionsResponse)
    ], DisplayvideoTargetingTypesTargetingOptionsListResponse.prototype, "listTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoTargetingTypesTargetingOptionsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoTargetingTypesTargetingOptionsListResponse;
}(SpeakeasyBase));
export { DisplayvideoTargetingTypesTargetingOptionsListResponse };
