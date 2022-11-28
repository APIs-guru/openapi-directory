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
export var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
(function (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum) {
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum || (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = {}));
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListQueryParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAdvertiserAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse.prototype, "listAdvertiserAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse };
