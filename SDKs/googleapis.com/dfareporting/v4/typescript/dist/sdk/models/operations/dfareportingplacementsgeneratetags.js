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
var DfareportingPlacementsGeneratetagsPathParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsGeneratetagsPathParams, _super);
    function DfareportingPlacementsGeneratetagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsPathParams.prototype, "profileId", void 0);
    return DfareportingPlacementsGeneratetagsPathParams;
}(SpeakeasyBase));
export { DfareportingPlacementsGeneratetagsPathParams };
export var DfareportingPlacementsGeneratetagsTagFormatsEnum;
(function (DfareportingPlacementsGeneratetagsTagFormatsEnum) {
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagStandard"] = "PLACEMENT_TAG_STANDARD";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagIframeJavascript"] = "PLACEMENT_TAG_IFRAME_JAVASCRIPT";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagIframeIlayer"] = "PLACEMENT_TAG_IFRAME_ILAYER";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInternalRedirect"] = "PLACEMENT_TAG_INTERNAL_REDIRECT";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagJavascript"] = "PLACEMENT_TAG_JAVASCRIPT";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInterstitialIframeJavascript"] = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInterstitialInternalRedirect"] = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInterstitialJavascript"] = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagClickCommands"] = "PLACEMENT_TAG_CLICK_COMMANDS";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInstreamVideoPrefetch"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagTracking"] = "PLACEMENT_TAG_TRACKING";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagTrackingIframe"] = "PLACEMENT_TAG_TRACKING_IFRAME";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagTrackingJavascript"] = "PLACEMENT_TAG_TRACKING_JAVASCRIPT";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInstreamVideoPrefetchVast3"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagIframeJavascriptLegacy"] = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagJavascriptLegacy"] = "PLACEMENT_TAG_JAVASCRIPT_LEGACY";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInterstitialIframeJavascriptLegacy"] = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInterstitialJavascriptLegacy"] = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagInstreamVideoPrefetchVast4"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4";
    DfareportingPlacementsGeneratetagsTagFormatsEnum["PlacementTagTrackingThirdPartyMeasurement"] = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT";
})(DfareportingPlacementsGeneratetagsTagFormatsEnum || (DfareportingPlacementsGeneratetagsTagFormatsEnum = {}));
var DfareportingPlacementsGeneratetagsQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsGeneratetagsQueryParams, _super);
    function DfareportingPlacementsGeneratetagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignId" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "placementIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagFormats" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "tagFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingPlacementsGeneratetagsQueryParams;
}(SpeakeasyBase));
export { DfareportingPlacementsGeneratetagsQueryParams };
var DfareportingPlacementsGeneratetagsSecurity = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsGeneratetagsSecurity, _super);
    function DfareportingPlacementsGeneratetagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingPlacementsGeneratetagsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingPlacementsGeneratetagsSecurity.prototype, "oauth2c", void 0);
    return DfareportingPlacementsGeneratetagsSecurity;
}(SpeakeasyBase));
export { DfareportingPlacementsGeneratetagsSecurity };
var DfareportingPlacementsGeneratetagsRequest = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsGeneratetagsRequest, _super);
    function DfareportingPlacementsGeneratetagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementsGeneratetagsPathParams)
    ], DfareportingPlacementsGeneratetagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementsGeneratetagsQueryParams)
    ], DfareportingPlacementsGeneratetagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementsGeneratetagsSecurity)
    ], DfareportingPlacementsGeneratetagsRequest.prototype, "security", void 0);
    return DfareportingPlacementsGeneratetagsRequest;
}(SpeakeasyBase));
export { DfareportingPlacementsGeneratetagsRequest };
var DfareportingPlacementsGeneratetagsResponse = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsGeneratetagsResponse, _super);
    function DfareportingPlacementsGeneratetagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingPlacementsGeneratetagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlacementsGenerateTagsResponse)
    ], DfareportingPlacementsGeneratetagsResponse.prototype, "placementsGenerateTagsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingPlacementsGeneratetagsResponse.prototype, "statusCode", void 0);
    return DfareportingPlacementsGeneratetagsResponse;
}(SpeakeasyBase));
export { DfareportingPlacementsGeneratetagsResponse };
