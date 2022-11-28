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
export var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
(function (DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum) {
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum || (DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = {}));
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=insertionOrderId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "insertionOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssignedTargetingOptionInput)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse };
