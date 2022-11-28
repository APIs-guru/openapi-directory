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
var PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams.prototype, "parent", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=certificateId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "certificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity };
var PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CertificateInput)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest };
var PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Certificate)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse };
