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
var RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams.prototype, "product", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams };
var RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams };
var RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity };
var RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2betaRemoveLocalInventoriesRequest)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest };
var RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse };
