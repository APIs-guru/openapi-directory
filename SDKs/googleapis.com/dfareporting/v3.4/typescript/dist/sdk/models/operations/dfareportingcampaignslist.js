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
var DfareportingCampaignsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingCampaignsListPathParams, _super);
    function DfareportingCampaignsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListPathParams.prototype, "profileId", void 0);
    return DfareportingCampaignsListPathParams;
}(SpeakeasyBase));
export { DfareportingCampaignsListPathParams };
export var DfareportingCampaignsListSortFieldEnum;
(function (DfareportingCampaignsListSortFieldEnum) {
    DfareportingCampaignsListSortFieldEnum["Id"] = "ID";
    DfareportingCampaignsListSortFieldEnum["Name"] = "NAME";
})(DfareportingCampaignsListSortFieldEnum || (DfareportingCampaignsListSortFieldEnum = {}));
export var DfareportingCampaignsListSortOrderEnum;
(function (DfareportingCampaignsListSortOrderEnum) {
    DfareportingCampaignsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingCampaignsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingCampaignsListSortOrderEnum || (DfareportingCampaignsListSortOrderEnum = {}));
var DfareportingCampaignsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCampaignsListQueryParams, _super);
    function DfareportingCampaignsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserGroupIds" }),
        __metadata("design:type", Array)
    ], DfareportingCampaignsListQueryParams.prototype, "advertiserGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" }),
        __metadata("design:type", Array)
    ], DfareportingCampaignsListQueryParams.prototype, "advertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], DfareportingCampaignsListQueryParams.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=atLeastOneOptimizationActivity" }),
        __metadata("design:type", Boolean)
    ], DfareportingCampaignsListQueryParams.prototype, "atLeastOneOptimizationActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludedIds" }),
        __metadata("design:type", Array)
    ], DfareportingCampaignsListQueryParams.prototype, "excludedIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingCampaignsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingCampaignsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=overriddenEventTagId" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "overriddenEventTagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCampaignsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccountId" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCampaignsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCampaignsListQueryParams;
}(SpeakeasyBase));
export { DfareportingCampaignsListQueryParams };
var DfareportingCampaignsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCampaignsListSecurity, _super);
    function DfareportingCampaignsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCampaignsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCampaignsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingCampaignsListSecurity;
}(SpeakeasyBase));
export { DfareportingCampaignsListSecurity };
var DfareportingCampaignsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingCampaignsListRequest, _super);
    function DfareportingCampaignsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignsListPathParams)
    ], DfareportingCampaignsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignsListQueryParams)
    ], DfareportingCampaignsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignsListSecurity)
    ], DfareportingCampaignsListRequest.prototype, "security", void 0);
    return DfareportingCampaignsListRequest;
}(SpeakeasyBase));
export { DfareportingCampaignsListRequest };
var DfareportingCampaignsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingCampaignsListResponse, _super);
    function DfareportingCampaignsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CampaignsListResponse)
    ], DfareportingCampaignsListResponse.prototype, "campaignsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCampaignsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCampaignsListResponse.prototype, "statusCode", void 0);
    return DfareportingCampaignsListResponse;
}(SpeakeasyBase));
export { DfareportingCampaignsListResponse };
