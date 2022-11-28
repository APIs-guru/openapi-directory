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
var RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesPathParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesPathParams.prototype, "product", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesPathParams };
var RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams };
var RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity };
var RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesPathParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesQueryParams)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2AddFulfillmentPlacesRequest)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest };
var RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse, _super);
    function RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse };
