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
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams.prototype, "parent", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=certificateAuthorityId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "certificateAuthorityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CertificateAuthorityInput)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse };
