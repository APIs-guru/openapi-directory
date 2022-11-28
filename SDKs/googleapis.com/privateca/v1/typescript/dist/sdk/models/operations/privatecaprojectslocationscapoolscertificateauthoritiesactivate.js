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
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ActivateCertificateAuthorityRequest)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse };
