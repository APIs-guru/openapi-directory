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
export var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
(function (DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum) {
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum || (DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = {}));
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lineItemId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "lineItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLineItemAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse.prototype, "listLineItemAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse };
