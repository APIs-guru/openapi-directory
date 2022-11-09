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
var CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams.prototype, "name", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams };
var CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams };
var CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity.prototype, "oauth2c", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity };
var CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DnsAuthorization)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest.prototype, "security", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest };
var CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse.prototype, "statusCode", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse };
