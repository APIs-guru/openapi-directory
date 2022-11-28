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
var PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams.prototype, "parent", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams };
var PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=certificateId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "certificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=issuingCertificateAuthorityId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "issuingCertificateAuthorityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams.prototype, "validateOnly", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams };
var PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity };
var PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CertificateInput)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest };
var PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse, _super);
    function PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Certificate)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse };
