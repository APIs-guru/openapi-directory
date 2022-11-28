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
export var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
(function (DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum) {
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum || (DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = {}));
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lineItemId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "lineItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetQueryParams)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse };
