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
export var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
(function (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum) {
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum || (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = {}));
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedTargetingOptionId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "assignedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams.prototype, "targetingType", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest.prototype, "security", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse };
