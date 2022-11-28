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
export var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
(function (DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum) {
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum || (DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = {}));
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=insertionOrderId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "insertionOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest };
var DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse, _super);
    function DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse };
