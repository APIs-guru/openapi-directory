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
export var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
(function (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum) {
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum || (DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = {}));
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "targetingType", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssignedTargetingOptionInput)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "security", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest };
var DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse, _super);
    function DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse };
