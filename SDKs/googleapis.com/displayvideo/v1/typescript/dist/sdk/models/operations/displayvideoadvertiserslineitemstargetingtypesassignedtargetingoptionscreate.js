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
export var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
(function (DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum) {
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum || (DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = {}));
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lineItemId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "lineItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssignedTargetingOptionInput)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest };
var DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse, _super);
    function DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse };
