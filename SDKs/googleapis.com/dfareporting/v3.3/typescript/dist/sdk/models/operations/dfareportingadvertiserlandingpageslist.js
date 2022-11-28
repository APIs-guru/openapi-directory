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
var DfareportingAdvertiserLandingPagesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesListPathParams, _super);
    function DfareportingAdvertiserLandingPagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListPathParams.prototype, "profileId", void 0);
    return DfareportingAdvertiserLandingPagesListPathParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesListPathParams };
export var DfareportingAdvertiserLandingPagesListSortFieldEnum;
(function (DfareportingAdvertiserLandingPagesListSortFieldEnum) {
    DfareportingAdvertiserLandingPagesListSortFieldEnum["Id"] = "ID";
    DfareportingAdvertiserLandingPagesListSortFieldEnum["Name"] = "NAME";
})(DfareportingAdvertiserLandingPagesListSortFieldEnum || (DfareportingAdvertiserLandingPagesListSortFieldEnum = {}));
export var DfareportingAdvertiserLandingPagesListSortOrderEnum;
(function (DfareportingAdvertiserLandingPagesListSortOrderEnum) {
    DfareportingAdvertiserLandingPagesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingAdvertiserLandingPagesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingAdvertiserLandingPagesListSortOrderEnum || (DfareportingAdvertiserLandingPagesListSortOrderEnum = {}));
var DfareportingAdvertiserLandingPagesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesListQueryParams, _super);
    function DfareportingAdvertiserLandingPagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "advertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "campaignIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccountId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdvertiserLandingPagesListQueryParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesListQueryParams };
var DfareportingAdvertiserLandingPagesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesListSecurity, _super);
    function DfareportingAdvertiserLandingPagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdvertiserLandingPagesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdvertiserLandingPagesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdvertiserLandingPagesListSecurity;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesListSecurity };
var DfareportingAdvertiserLandingPagesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesListRequest, _super);
    function DfareportingAdvertiserLandingPagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesListPathParams)
    ], DfareportingAdvertiserLandingPagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesListQueryParams)
    ], DfareportingAdvertiserLandingPagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesListSecurity)
    ], DfareportingAdvertiserLandingPagesListRequest.prototype, "security", void 0);
    return DfareportingAdvertiserLandingPagesListRequest;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesListRequest };
var DfareportingAdvertiserLandingPagesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesListResponse, _super);
    function DfareportingAdvertiserLandingPagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdvertiserLandingPagesListResponse)
    ], DfareportingAdvertiserLandingPagesListResponse.prototype, "advertiserLandingPagesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdvertiserLandingPagesListResponse.prototype, "statusCode", void 0);
    return DfareportingAdvertiserLandingPagesListResponse;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesListResponse };
