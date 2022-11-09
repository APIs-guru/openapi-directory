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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams, _super);
    function CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams.prototype, "parent", void 0);
    return CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams };
var CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams, _super);
    function CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=certificateIssuanceConfigId" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "certificateIssuanceConfigId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams };
var CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity, _super);
    function CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity.prototype, "oauth2c", void 0);
    return CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity };
var CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest, _super);
    function CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CertificateIssuanceConfig)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest.prototype, "security", void 0);
    return CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest };
var CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse, _super);
    function CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse.prototype, "statusCode", void 0);
    return CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse };
