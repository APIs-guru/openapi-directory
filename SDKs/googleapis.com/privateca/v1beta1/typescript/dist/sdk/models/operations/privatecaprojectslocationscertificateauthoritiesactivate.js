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
var PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity };
var PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ActivateCertificateAuthorityRequest)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest };
var PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse };
