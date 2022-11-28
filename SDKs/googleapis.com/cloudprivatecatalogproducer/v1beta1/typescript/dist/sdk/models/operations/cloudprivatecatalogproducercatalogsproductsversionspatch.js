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
var CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams.prototype, "name", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams };
var CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams };
var CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity };
var CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPrivatecatalogproducerV1beta1Version)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest };
var CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse };
