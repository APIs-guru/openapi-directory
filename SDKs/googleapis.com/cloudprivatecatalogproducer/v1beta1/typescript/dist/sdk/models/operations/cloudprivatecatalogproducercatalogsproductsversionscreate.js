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
var CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams.prototype, "parent", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams };
var CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams };
var CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity };
var CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPrivatecatalogproducerV1beta1Version)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest };
var CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse };
