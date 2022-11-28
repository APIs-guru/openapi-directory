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
var IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams };
var IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientCertificate.encryptedPrivateKey" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "clientCertificateEncryptedPrivateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientCertificate.passphrase" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "clientCertificatePassphrase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientCertificate.sslCertificate" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "clientCertificateSslCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams };
var IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity };
var IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsAuthConfigsCreatePathParams)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsAuthConfigsCreateQueryParams)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaAuthConfigInput)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest };
var IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaAuthConfig)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse.prototype, "googleCloudIntegrationsV1alphaAuthConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse };
