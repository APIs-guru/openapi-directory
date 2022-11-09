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
var CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams.prototype, "parent", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams };
var CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dnsAuthorizationId" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "dnsAuthorizationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams };
var CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity.prototype, "oauth2c", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity };
var CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DnsAuthorization)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest.prototype, "security", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest };
var CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse.prototype, "statusCode", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse };
