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
export var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
(function (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum) {
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum || (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = {}));
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse };
