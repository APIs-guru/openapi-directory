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
export var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
(function (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum) {
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum || (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = {}));
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteQueryParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse };
