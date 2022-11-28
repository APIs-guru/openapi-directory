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
var DfareportingBillingProfilesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesListPathParams, _super);
    function DfareportingBillingProfilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListPathParams.prototype, "profileId", void 0);
    return DfareportingBillingProfilesListPathParams;
}(SpeakeasyBase));
export { DfareportingBillingProfilesListPathParams };
export var DfareportingBillingProfilesListSortFieldEnum;
(function (DfareportingBillingProfilesListSortFieldEnum) {
    DfareportingBillingProfilesListSortFieldEnum["Id"] = "ID";
    DfareportingBillingProfilesListSortFieldEnum["Name"] = "NAME";
})(DfareportingBillingProfilesListSortFieldEnum || (DfareportingBillingProfilesListSortFieldEnum = {}));
export var DfareportingBillingProfilesListSortOrderEnum;
(function (DfareportingBillingProfilesListSortOrderEnum) {
    DfareportingBillingProfilesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingBillingProfilesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingBillingProfilesListSortOrderEnum || (DfareportingBillingProfilesListSortOrderEnum = {}));
export var DfareportingBillingProfilesListStatusEnum;
(function (DfareportingBillingProfilesListStatusEnum) {
    DfareportingBillingProfilesListStatusEnum["UnderReview"] = "UNDER_REVIEW";
    DfareportingBillingProfilesListStatusEnum["Active"] = "ACTIVE";
    DfareportingBillingProfilesListStatusEnum["Archived"] = "ARCHIVED";
})(DfareportingBillingProfilesListStatusEnum || (DfareportingBillingProfilesListStatusEnum = {}));
var DfareportingBillingProfilesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesListQueryParams, _super);
    function DfareportingBillingProfilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency_code" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingBillingProfilesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingBillingProfilesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlySuggestion" }),
        __metadata("design:type", Boolean)
    ], DfareportingBillingProfilesListQueryParams.prototype, "onlySuggestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingBillingProfilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Array)
    ], DfareportingBillingProfilesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccountIds" }),
        __metadata("design:type", Array)
    ], DfareportingBillingProfilesListQueryParams.prototype, "subaccountIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingBillingProfilesListQueryParams;
}(SpeakeasyBase));
export { DfareportingBillingProfilesListQueryParams };
var DfareportingBillingProfilesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesListSecurity, _super);
    function DfareportingBillingProfilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingBillingProfilesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingBillingProfilesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingBillingProfilesListSecurity;
}(SpeakeasyBase));
export { DfareportingBillingProfilesListSecurity };
var DfareportingBillingProfilesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesListRequest, _super);
    function DfareportingBillingProfilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingBillingProfilesListPathParams)
    ], DfareportingBillingProfilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingBillingProfilesListQueryParams)
    ], DfareportingBillingProfilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingBillingProfilesListSecurity)
    ], DfareportingBillingProfilesListRequest.prototype, "security", void 0);
    return DfareportingBillingProfilesListRequest;
}(SpeakeasyBase));
export { DfareportingBillingProfilesListRequest };
var DfareportingBillingProfilesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesListResponse, _super);
    function DfareportingBillingProfilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillingProfilesListResponse)
    ], DfareportingBillingProfilesListResponse.prototype, "billingProfilesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingBillingProfilesListResponse.prototype, "statusCode", void 0);
    return DfareportingBillingProfilesListResponse;
}(SpeakeasyBase));
export { DfareportingBillingProfilesListResponse };
