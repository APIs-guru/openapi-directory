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
var CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams.prototype, "product", void 0);
    return CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams };
var CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams };
var CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity, _super);
    function CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity };
var CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest, _super);
    function CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest };
var CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse, _super);
    function CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse };
