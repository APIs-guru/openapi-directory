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
var IntegrationsProjectsLocationsProductsCreateBundlePathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsCreateBundlePathParams, _super);
    function IntegrationsProjectsLocationsProductsCreateBundlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundlePathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsProductsCreateBundlePathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsCreateBundlePathParams };
var IntegrationsProjectsLocationsProductsCreateBundleQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsCreateBundleQueryParams, _super);
    function IntegrationsProjectsLocationsProductsCreateBundleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsCreateBundleQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsCreateBundleQueryParams };
var IntegrationsProjectsLocationsProductsCreateBundleSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsCreateBundleSecurity, _super);
    function IntegrationsProjectsLocationsProductsCreateBundleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsCreateBundleSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsCreateBundleSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsCreateBundleSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsCreateBundleSecurity };
var IntegrationsProjectsLocationsProductsCreateBundleRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsCreateBundleRequest, _super);
    function IntegrationsProjectsLocationsProductsCreateBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsCreateBundlePathParams)
    ], IntegrationsProjectsLocationsProductsCreateBundleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsCreateBundleQueryParams)
    ], IntegrationsProjectsLocationsProductsCreateBundleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaCreateBundleRequest)
    ], IntegrationsProjectsLocationsProductsCreateBundleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsCreateBundleSecurity)
    ], IntegrationsProjectsLocationsProductsCreateBundleRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsCreateBundleRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsCreateBundleRequest };
var IntegrationsProjectsLocationsProductsCreateBundleResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsCreateBundleResponse, _super);
    function IntegrationsProjectsLocationsProductsCreateBundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsCreateBundleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaCreateBundleResponse)
    ], IntegrationsProjectsLocationsProductsCreateBundleResponse.prototype, "googleCloudIntegrationsV1alphaCreateBundleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsCreateBundleResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsCreateBundleResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsCreateBundleResponse };
