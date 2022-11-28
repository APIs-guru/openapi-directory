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
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisableCertificateAuthorityRequest)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest };
var PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse };
