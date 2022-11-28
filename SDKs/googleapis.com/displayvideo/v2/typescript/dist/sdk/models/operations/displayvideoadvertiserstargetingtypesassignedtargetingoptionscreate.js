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
export var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
(function (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum) {
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum || (DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = {}));
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetingType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams.prototype, "targetingType", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssignedTargetingOptionInput)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest };
var DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse, _super);
    function DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedTargetingOption)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "assignedTargetingOption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse };
