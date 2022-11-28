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
var DfareportingSitesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingSitesListPathParams, _super);
    function DfareportingSitesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingSitesListPathParams.prototype, "profileId", void 0);
    return DfareportingSitesListPathParams;
}(SpeakeasyBase));
export { DfareportingSitesListPathParams };
export var DfareportingSitesListSortFieldEnum;
(function (DfareportingSitesListSortFieldEnum) {
    DfareportingSitesListSortFieldEnum["Id"] = "ID";
    DfareportingSitesListSortFieldEnum["Name"] = "NAME";
})(DfareportingSitesListSortFieldEnum || (DfareportingSitesListSortFieldEnum = {}));
export var DfareportingSitesListSortOrderEnum;
(function (DfareportingSitesListSortOrderEnum) {
    DfareportingSitesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingSitesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingSitesListSortOrderEnum || (DfareportingSitesListSortOrderEnum = {}));
var DfareportingSitesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingSitesListQueryParams, _super);
    function DfareportingSitesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsInStreamVideoPlacements" }),
        __metadata("design:type", Boolean)
    ], DfareportingSitesListQueryParams.prototype, "acceptsInStreamVideoPlacements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsInterstitialPlacements" }),
        __metadata("design:type", Boolean)
    ], DfareportingSitesListQueryParams.prototype, "acceptsInterstitialPlacements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsPublisherPaidPlacements" }),
        __metadata("design:type", Boolean)
    ], DfareportingSitesListQueryParams.prototype, "acceptsPublisherPaidPlacements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adWordsSite" }),
        __metadata("design:type", Boolean)
    ], DfareportingSitesListQueryParams.prototype, "adWordsSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=approved" }),
        __metadata("design:type", Boolean)
    ], DfareportingSitesListQueryParams.prototype, "approved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignIds" }),
        __metadata("design:type", Array)
    ], DfareportingSitesListQueryParams.prototype, "campaignIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=directorySiteIds" }),
        __metadata("design:type", Array)
    ], DfareportingSitesListQueryParams.prototype, "directorySiteIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingSitesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingSitesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingSitesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccountId" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unmappedSite" }),
        __metadata("design:type", Boolean)
    ], DfareportingSitesListQueryParams.prototype, "unmappedSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingSitesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingSitesListQueryParams;
}(SpeakeasyBase));
export { DfareportingSitesListQueryParams };
var DfareportingSitesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingSitesListSecurity, _super);
    function DfareportingSitesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingSitesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingSitesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingSitesListSecurity;
}(SpeakeasyBase));
export { DfareportingSitesListSecurity };
var DfareportingSitesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingSitesListRequest, _super);
    function DfareportingSitesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingSitesListPathParams)
    ], DfareportingSitesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingSitesListQueryParams)
    ], DfareportingSitesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingSitesListSecurity)
    ], DfareportingSitesListRequest.prototype, "security", void 0);
    return DfareportingSitesListRequest;
}(SpeakeasyBase));
export { DfareportingSitesListRequest };
var DfareportingSitesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingSitesListResponse, _super);
    function DfareportingSitesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingSitesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SitesListResponse)
    ], DfareportingSitesListResponse.prototype, "sitesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingSitesListResponse.prototype, "statusCode", void 0);
    return DfareportingSitesListResponse;
}(SpeakeasyBase));
export { DfareportingSitesListResponse };
