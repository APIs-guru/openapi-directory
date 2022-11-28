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
var DfareportingAdsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdsListPathParams, _super);
    function DfareportingAdsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdsListPathParams.prototype, "profileId", void 0);
    return DfareportingAdsListPathParams;
}(SpeakeasyBase));
export { DfareportingAdsListPathParams };
export var DfareportingAdsListCompatibilityEnum;
(function (DfareportingAdsListCompatibilityEnum) {
    DfareportingAdsListCompatibilityEnum["Display"] = "DISPLAY";
    DfareportingAdsListCompatibilityEnum["DisplayInterstitial"] = "DISPLAY_INTERSTITIAL";
    DfareportingAdsListCompatibilityEnum["App"] = "APP";
    DfareportingAdsListCompatibilityEnum["AppInterstitial"] = "APP_INTERSTITIAL";
    DfareportingAdsListCompatibilityEnum["InStreamVideo"] = "IN_STREAM_VIDEO";
    DfareportingAdsListCompatibilityEnum["InStreamAudio"] = "IN_STREAM_AUDIO";
})(DfareportingAdsListCompatibilityEnum || (DfareportingAdsListCompatibilityEnum = {}));
export var DfareportingAdsListSortFieldEnum;
(function (DfareportingAdsListSortFieldEnum) {
    DfareportingAdsListSortFieldEnum["Id"] = "ID";
    DfareportingAdsListSortFieldEnum["Name"] = "NAME";
})(DfareportingAdsListSortFieldEnum || (DfareportingAdsListSortFieldEnum = {}));
export var DfareportingAdsListSortOrderEnum;
(function (DfareportingAdsListSortOrderEnum) {
    DfareportingAdsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingAdsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingAdsListSortOrderEnum || (DfareportingAdsListSortOrderEnum = {}));
export var DfareportingAdsListTypeEnum;
(function (DfareportingAdsListTypeEnum) {
    DfareportingAdsListTypeEnum["AdServingStandardAd"] = "AD_SERVING_STANDARD_AD";
    DfareportingAdsListTypeEnum["AdServingDefaultAd"] = "AD_SERVING_DEFAULT_AD";
    DfareportingAdsListTypeEnum["AdServingClickTracker"] = "AD_SERVING_CLICK_TRACKER";
    DfareportingAdsListTypeEnum["AdServingTracking"] = "AD_SERVING_TRACKING";
    DfareportingAdsListTypeEnum["AdServingBrandSafeAd"] = "AD_SERVING_BRAND_SAFE_AD";
})(DfareportingAdsListTypeEnum || (DfareportingAdsListTypeEnum = {}));
var DfareportingAdsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdsListQueryParams, _super);
    function DfareportingAdsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdsListQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdsListQueryParams.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audienceSegmentIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "audienceSegmentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "campaignIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compatibility" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "compatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creativeIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "creativeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creativeOptimizationConfigurationIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "creativeOptimizationConfigurationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicClickTracker" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdsListQueryParams.prototype, "dynamicClickTracker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=landingPageIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "landingPageIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingAdsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=overriddenEventTagId" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "overriddenEventTagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "placementIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remarketingListIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "remarketingListIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sizeIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "sizeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sslCompliant" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdsListQueryParams.prototype, "sslCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sslRequired" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdsListQueryParams.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], DfareportingAdsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdsListQueryParams;
}(SpeakeasyBase));
export { DfareportingAdsListQueryParams };
var DfareportingAdsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdsListSecurity, _super);
    function DfareportingAdsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdsListSecurity;
}(SpeakeasyBase));
export { DfareportingAdsListSecurity };
var DfareportingAdsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdsListRequest, _super);
    function DfareportingAdsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdsListPathParams)
    ], DfareportingAdsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdsListQueryParams)
    ], DfareportingAdsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdsListSecurity)
    ], DfareportingAdsListRequest.prototype, "security", void 0);
    return DfareportingAdsListRequest;
}(SpeakeasyBase));
export { DfareportingAdsListRequest };
var DfareportingAdsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdsListResponse, _super);
    function DfareportingAdsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdsListResponse)
    ], DfareportingAdsListResponse.prototype, "adsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdsListResponse.prototype, "statusCode", void 0);
    return DfareportingAdsListResponse;
}(SpeakeasyBase));
export { DfareportingAdsListResponse };
