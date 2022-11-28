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
export var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
(function (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum) {
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum || (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = {}));
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams.prototype, "targetingType", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetQueryParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest.prototype, "security", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse };
