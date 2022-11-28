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
var RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams };
var RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productId" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams };
var RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity };
var RetailProjectsLocationsCatalogsBranchesProductsCreateRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsCreateRequest, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaProductInput)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsCreateRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsCreateRequest };
var RetailProjectsLocationsCatalogsBranchesProductsCreateResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsCreateResponse, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaProduct)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateResponse.prototype, "googleCloudRetailV2alphaProduct", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsBranchesProductsCreateResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsCreateResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsCreateResponse };
