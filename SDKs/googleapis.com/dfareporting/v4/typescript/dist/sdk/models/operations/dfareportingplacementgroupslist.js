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
var DfareportingPlacementGroupsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementGroupsListPathParams, _super);
    function DfareportingPlacementGroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListPathParams.prototype, "profileId", void 0);
    return DfareportingPlacementGroupsListPathParams;
}(SpeakeasyBase));
export { DfareportingPlacementGroupsListPathParams };
export var DfareportingPlacementGroupsListActiveStatusEnum;
(function (DfareportingPlacementGroupsListActiveStatusEnum) {
    DfareportingPlacementGroupsListActiveStatusEnum["PlacementStatusUnknown"] = "PLACEMENT_STATUS_UNKNOWN";
    DfareportingPlacementGroupsListActiveStatusEnum["PlacementStatusActive"] = "PLACEMENT_STATUS_ACTIVE";
    DfareportingPlacementGroupsListActiveStatusEnum["PlacementStatusInactive"] = "PLACEMENT_STATUS_INACTIVE";
    DfareportingPlacementGroupsListActiveStatusEnum["PlacementStatusArchived"] = "PLACEMENT_STATUS_ARCHIVED";
    DfareportingPlacementGroupsListActiveStatusEnum["PlacementStatusPermanentlyArchived"] = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED";
})(DfareportingPlacementGroupsListActiveStatusEnum || (DfareportingPlacementGroupsListActiveStatusEnum = {}));
export var DfareportingPlacementGroupsListPlacementGroupTypeEnum;
(function (DfareportingPlacementGroupsListPlacementGroupTypeEnum) {
    DfareportingPlacementGroupsListPlacementGroupTypeEnum["PlacementPackage"] = "PLACEMENT_PACKAGE";
    DfareportingPlacementGroupsListPlacementGroupTypeEnum["PlacementRoadblock"] = "PLACEMENT_ROADBLOCK";
})(DfareportingPlacementGroupsListPlacementGroupTypeEnum || (DfareportingPlacementGroupsListPlacementGroupTypeEnum = {}));
export var DfareportingPlacementGroupsListPricingTypesEnum;
(function (DfareportingPlacementGroupsListPricingTypesEnum) {
    DfareportingPlacementGroupsListPricingTypesEnum["PricingTypeCpm"] = "PRICING_TYPE_CPM";
    DfareportingPlacementGroupsListPricingTypesEnum["PricingTypeCpc"] = "PRICING_TYPE_CPC";
    DfareportingPlacementGroupsListPricingTypesEnum["PricingTypeCpa"] = "PRICING_TYPE_CPA";
    DfareportingPlacementGroupsListPricingTypesEnum["PricingTypeFlatRateImpressions"] = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS";
    DfareportingPlacementGroupsListPricingTypesEnum["PricingTypeFlatRateClicks"] = "PRICING_TYPE_FLAT_RATE_CLICKS";
    DfareportingPlacementGroupsListPricingTypesEnum["PricingTypeCpmActiveview"] = "PRICING_TYPE_CPM_ACTIVEVIEW";
})(DfareportingPlacementGroupsListPricingTypesEnum || (DfareportingPlacementGroupsListPricingTypesEnum = {}));
export var DfareportingPlacementGroupsListSortFieldEnum;
(function (DfareportingPlacementGroupsListSortFieldEnum) {
    DfareportingPlacementGroupsListSortFieldEnum["Id"] = "ID";
    DfareportingPlacementGroupsListSortFieldEnum["Name"] = "NAME";
})(DfareportingPlacementGroupsListSortFieldEnum || (DfareportingPlacementGroupsListSortFieldEnum = {}));
export var DfareportingPlacementGroupsListSortOrderEnum;
(function (DfareportingPlacementGroupsListSortOrderEnum) {
    DfareportingPlacementGroupsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingPlacementGroupsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingPlacementGroupsListSortOrderEnum || (DfareportingPlacementGroupsListSortOrderEnum = {}));
var DfareportingPlacementGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementGroupsListQueryParams, _super);
    function DfareportingPlacementGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeStatus" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "activeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "advertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "campaignIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentCategoryIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "contentCategoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=directorySiteIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "directorySiteIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxEndDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "maxEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStartDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "maxStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minEndDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "minEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minStartDate" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "minStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementGroupType" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "placementGroupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementStrategyIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "placementStrategyIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pricingTypes" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "pricingTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteIds" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "siteIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingPlacementGroupsListQueryParams;
}(SpeakeasyBase));
export { DfareportingPlacementGroupsListQueryParams };
var DfareportingPlacementGroupsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingPlacementGroupsListSecurity, _super);
    function DfareportingPlacementGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingPlacementGroupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingPlacementGroupsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingPlacementGroupsListSecurity;
}(SpeakeasyBase));
export { DfareportingPlacementGroupsListSecurity };
var DfareportingPlacementGroupsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingPlacementGroupsListRequest, _super);
    function DfareportingPlacementGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementGroupsListPathParams)
    ], DfareportingPlacementGroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementGroupsListQueryParams)
    ], DfareportingPlacementGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementGroupsListSecurity)
    ], DfareportingPlacementGroupsListRequest.prototype, "security", void 0);
    return DfareportingPlacementGroupsListRequest;
}(SpeakeasyBase));
export { DfareportingPlacementGroupsListRequest };
var DfareportingPlacementGroupsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingPlacementGroupsListResponse, _super);
    function DfareportingPlacementGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingPlacementGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlacementGroupsListResponse)
    ], DfareportingPlacementGroupsListResponse.prototype, "placementGroupsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingPlacementGroupsListResponse.prototype, "statusCode", void 0);
    return DfareportingPlacementGroupsListResponse;
}(SpeakeasyBase));
export { DfareportingPlacementGroupsListResponse };
