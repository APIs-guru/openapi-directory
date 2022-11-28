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
var DfareportingCreativesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativesListPathParams, _super);
    function DfareportingCreativesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListPathParams.prototype, "profileId", void 0);
    return DfareportingCreativesListPathParams;
}(SpeakeasyBase));
export { DfareportingCreativesListPathParams };
export var DfareportingCreativesListSortFieldEnum;
(function (DfareportingCreativesListSortFieldEnum) {
    DfareportingCreativesListSortFieldEnum["Id"] = "ID";
    DfareportingCreativesListSortFieldEnum["Name"] = "NAME";
})(DfareportingCreativesListSortFieldEnum || (DfareportingCreativesListSortFieldEnum = {}));
export var DfareportingCreativesListSortOrderEnum;
(function (DfareportingCreativesListSortOrderEnum) {
    DfareportingCreativesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingCreativesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingCreativesListSortOrderEnum || (DfareportingCreativesListSortOrderEnum = {}));
export var DfareportingCreativesListTypesEnum;
(function (DfareportingCreativesListTypesEnum) {
    DfareportingCreativesListTypesEnum["Image"] = "IMAGE";
    DfareportingCreativesListTypesEnum["DisplayRedirect"] = "DISPLAY_REDIRECT";
    DfareportingCreativesListTypesEnum["CustomDisplay"] = "CUSTOM_DISPLAY";
    DfareportingCreativesListTypesEnum["InternalRedirect"] = "INTERNAL_REDIRECT";
    DfareportingCreativesListTypesEnum["CustomDisplayInterstitial"] = "CUSTOM_DISPLAY_INTERSTITIAL";
    DfareportingCreativesListTypesEnum["InterstitialInternalRedirect"] = "INTERSTITIAL_INTERNAL_REDIRECT";
    DfareportingCreativesListTypesEnum["TrackingText"] = "TRACKING_TEXT";
    DfareportingCreativesListTypesEnum["RichMediaDisplayBanner"] = "RICH_MEDIA_DISPLAY_BANNER";
    DfareportingCreativesListTypesEnum["RichMediaInpageFloating"] = "RICH_MEDIA_INPAGE_FLOATING";
    DfareportingCreativesListTypesEnum["RichMediaImExpand"] = "RICH_MEDIA_IM_EXPAND";
    DfareportingCreativesListTypesEnum["RichMediaDisplayExpanding"] = "RICH_MEDIA_DISPLAY_EXPANDING";
    DfareportingCreativesListTypesEnum["RichMediaDisplayInterstitial"] = "RICH_MEDIA_DISPLAY_INTERSTITIAL";
    DfareportingCreativesListTypesEnum["RichMediaDisplayMultiFloatingInterstitial"] = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL";
    DfareportingCreativesListTypesEnum["RichMediaMobileInApp"] = "RICH_MEDIA_MOBILE_IN_APP";
    DfareportingCreativesListTypesEnum["FlashInpage"] = "FLASH_INPAGE";
    DfareportingCreativesListTypesEnum["InstreamVideo"] = "INSTREAM_VIDEO";
    DfareportingCreativesListTypesEnum["VpaidLinearVideo"] = "VPAID_LINEAR_VIDEO";
    DfareportingCreativesListTypesEnum["VpaidNonLinearVideo"] = "VPAID_NON_LINEAR_VIDEO";
    DfareportingCreativesListTypesEnum["InstreamVideoRedirect"] = "INSTREAM_VIDEO_REDIRECT";
    DfareportingCreativesListTypesEnum["RichMediaPeelDown"] = "RICH_MEDIA_PEEL_DOWN";
    DfareportingCreativesListTypesEnum["Html5Banner"] = "HTML5_BANNER";
    DfareportingCreativesListTypesEnum["Display"] = "DISPLAY";
    DfareportingCreativesListTypesEnum["DisplayImageGallery"] = "DISPLAY_IMAGE_GALLERY";
    DfareportingCreativesListTypesEnum["BrandSafeDefaultInstreamVideo"] = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO";
    DfareportingCreativesListTypesEnum["InstreamAudio"] = "INSTREAM_AUDIO";
})(DfareportingCreativesListTypesEnum || (DfareportingCreativesListTypesEnum = {}));
var DfareportingCreativesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativesListQueryParams, _super);
    function DfareportingCreativesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" }),
        __metadata("design:type", Boolean)
    ], DfareportingCreativesListQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], DfareportingCreativesListQueryParams.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignId" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=companionCreativeIds" }),
        __metadata("design:type", Array)
    ], DfareportingCreativesListQueryParams.prototype, "companionCreativeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creativeFieldIds" }),
        __metadata("design:type", Array)
    ], DfareportingCreativesListQueryParams.prototype, "creativeFieldIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingCreativesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingCreativesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCreativesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=renderingIds" }),
        __metadata("design:type", Array)
    ], DfareportingCreativesListQueryParams.prototype, "renderingIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sizeIds" }),
        __metadata("design:type", Array)
    ], DfareportingCreativesListQueryParams.prototype, "sizeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studioCreativeId" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "studioCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", Array)
    ], DfareportingCreativesListQueryParams.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCreativesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCreativesListQueryParams;
}(SpeakeasyBase));
export { DfareportingCreativesListQueryParams };
var DfareportingCreativesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCreativesListSecurity, _super);
    function DfareportingCreativesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCreativesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCreativesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingCreativesListSecurity;
}(SpeakeasyBase));
export { DfareportingCreativesListSecurity };
var DfareportingCreativesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingCreativesListRequest, _super);
    function DfareportingCreativesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativesListPathParams)
    ], DfareportingCreativesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativesListQueryParams)
    ], DfareportingCreativesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativesListSecurity)
    ], DfareportingCreativesListRequest.prototype, "security", void 0);
    return DfareportingCreativesListRequest;
}(SpeakeasyBase));
export { DfareportingCreativesListRequest };
var DfareportingCreativesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingCreativesListResponse, _super);
    function DfareportingCreativesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCreativesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreativesListResponse)
    ], DfareportingCreativesListResponse.prototype, "creativesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCreativesListResponse.prototype, "statusCode", void 0);
    return DfareportingCreativesListResponse;
}(SpeakeasyBase));
export { DfareportingCreativesListResponse };
