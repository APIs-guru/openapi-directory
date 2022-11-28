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
var PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity };
var PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisableCertificateAuthorityRequest)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest };
var PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse };
