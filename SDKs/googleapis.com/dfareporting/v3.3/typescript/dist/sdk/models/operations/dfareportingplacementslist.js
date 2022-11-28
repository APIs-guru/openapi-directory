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
var DfareportingPlacementsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsListPathParams, _super);
    function DfareportingPlacementsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListPathParams.prototype, "profileId", void 0);
    return DfareportingPlacementsListPathParams;
}(SpeakeasyBase));
export { DfareportingPlacementsListPathParams };
export var DfareportingPlacementsListCompatibilitiesEnum;
(function (DfareportingPlacementsListCompatibilitiesEnum) {
    DfareportingPlacementsListCompatibilitiesEnum["Display"] = "DISPLAY";
    DfareportingPlacementsListCompatibilitiesEnum["DisplayInterstitial"] = "DISPLAY_INTERSTITIAL";
    DfareportingPlacementsListCompatibilitiesEnum["App"] = "APP";
    DfareportingPlacementsListCompatibilitiesEnum["AppInterstitial"] = "APP_INTERSTITIAL";
    DfareportingPlacementsListCompatibilitiesEnum["InStreamVideo"] = "IN_STREAM_VIDEO";
    DfareportingPlacementsListCompatibilitiesEnum["InStreamAudio"] = "IN_STREAM_AUDIO";
})(DfareportingPlacementsListCompatibilitiesEnum || (DfareportingPlacementsListCompatibilitiesEnum = {}));
export var DfareportingPlacementsListPaymentSourceEnum;
(function (DfareportingPlacementsListPaymentSourceEnum) {
    DfareportingPlacementsListPaymentSourceEnum["PlacementAgencyPaid"] = "PLACEMENT_AGENCY_PAID";
    DfareportingPlacementsListPaymentSourceEnum["PlacementPublisherPaid"] = "PLACEMENT_PUBLISHER_PAID";
})(DfareportingPlacementsListPaymentSourceEnum || (DfareportingPlacementsListPaymentSourceEnum = {}));
export var DfareportingPlacementsListPricingTypesEnum;
(function (DfareportingPlacementsListPricingTypesEnum) {
    DfareportingPlacementsListPricingTypesEnum["PricingTypeCpm"] = "PRICING_TYPE_CPM";
    DfareportingPlacementsListPricingTypesEnum["PricingTypeCpc"] = "PRICING_TYPE_CPC";
    DfareportingPlacementsListPricingTypesEnum["PricingTypeCpa"] = "PRICING_TYPE_CPA";
    DfareportingPlacementsListPricingTypesEnum["PricingTypeFlatRateImpressions"] = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS";
    DfareportingPlacementsListPricingTypesEnum["PricingTypeFlatRateClicks"] = "PRICING_TYPE_FLAT_RATE_CLICKS";
    DfareportingPlacementsListPricingTypesEnum["PricingTypeCpmActiveview"] = "PRICING_TYPE_CPM_ACTIVEVIEW";
})(DfareportingPlacementsListPricingTypesEnum || (DfareportingPlacementsListPricingTypesEnum = {}));
export var DfareportingPlacementsListSortFieldEnum;
(function (DfareportingPlacementsListSortFieldEnum) {
    DfareportingPlacementsListSortFieldEnum["Id"] = "ID";
    DfareportingPlacementsListSortFieldEnum["Name"] = "NAME";
})(DfareportingPlacementsListSortFieldEnum || (DfareportingPlacementsListSortFieldEnum = {}));
export var DfareportingPlacementsListSortOrderEnum;
(function (DfareportingPlacementsListSortOrderEnum) {
    DfareportingPlacementsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingPlacementsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingPlacementsListSortOrderEnum || (DfareportingPlacementsListSortOrderEnum = {}));
var DfareportingPlacementsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsListQueryParams, _super);
    function DfareportingPlacementsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "advertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], DfareportingPlacementsListQueryParams.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "campaignIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compatibilities" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "compatibilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentCategoryIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "contentCategoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=directorySiteIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "directorySiteIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxEndDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "maxEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingPlacementsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStartDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "maxStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minEndDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "minEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minStartDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "minStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentSource" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "paymentSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementStrategyIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "placementStrategyIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingPlacementsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pricingTypes" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "pricingTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "siteIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sizeIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementsListQueryParams.prototype, "sizeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingPlacementsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingPlacementsListQueryParams;
}(SpeakeasyBase));
export { DfareportingPlacementsListQueryParams };
var DfareportingPlacementsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsListSecurity, _super);
    function DfareportingPlacementsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingPlacementsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingPlacementsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingPlacementsListSecurity;
}(SpeakeasyBase));
export { DfareportingPlacementsListSecurity };
var DfareportingPlacementsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsListRequest, _super);
    function DfareportingPlacementsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementsListPathParams)
    ], DfareportingPlacementsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementsListQueryParams)
    ], DfareportingPlacementsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementsListSecurity)
    ], DfareportingPlacementsListRequest.prototype, "security", void 0);
    return DfareportingPlacementsListRequest;
}(SpeakeasyBase));
export { DfareportingPlacementsListRequest };
var DfareportingPlacementsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingPlacementsListResponse, _super);
    function DfareportingPlacementsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingPlacementsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlacementsListResponse)
    ], DfareportingPlacementsListResponse.prototype, "placementsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingPlacementsListResponse.prototype, "statusCode", void 0);
    return DfareportingPlacementsListResponse;
}(SpeakeasyBase));
export { DfareportingPlacementsListResponse };
