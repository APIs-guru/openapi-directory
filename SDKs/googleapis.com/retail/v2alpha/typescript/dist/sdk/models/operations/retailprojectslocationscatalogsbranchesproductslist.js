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
var RetailProjectsLocationsCatalogsBranchesProductsListPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsListPathParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListPathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsListPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsListPathParams };
var RetailProjectsLocationsCatalogsBranchesProductsListQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsListQueryParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireTotalSize" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "requireTotalSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsListQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsListQueryParams };
var RetailProjectsLocationsCatalogsBranchesProductsListSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsListSecurity, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsBranchesProductsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsBranchesProductsListSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsListSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsListSecurity };
var RetailProjectsLocationsCatalogsBranchesProductsListRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsListRequest, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsListPathParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsListQueryParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsListSecurity)
    ], RetailProjectsLocationsCatalogsBranchesProductsListRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsListRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsListRequest };
var RetailProjectsLocationsCatalogsBranchesProductsListResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsListResponse, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaListProductsResponse)
    ], RetailProjectsLocationsCatalogsBranchesProductsListResponse.prototype, "googleCloudRetailV2alphaListProductsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsBranchesProductsListResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsListResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsListResponse };
