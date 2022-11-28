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
export var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
(function (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum) {
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum || (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = {}));
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "targetingType", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListQueryParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest.prototype, "security", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPartnerAssignedTargetingOptionsResponse)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse.prototype, "listPartnerAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse };
