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
var CertificatemanagerProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsGetPathParams, _super);
    function CertificatemanagerProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return CertificatemanagerProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsGetPathParams };
var CertificatemanagerProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsGetQueryParams, _super);
    function CertificatemanagerProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CertificatemanagerProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsGetQueryParams };
var CertificatemanagerProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsGetSecurity, _super);
    function CertificatemanagerProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CertificatemanagerProjectsLocationsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CertificatemanagerProjectsLocationsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return CertificatemanagerProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsGetSecurity };
var CertificatemanagerProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsGetRequest, _super);
    function CertificatemanagerProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsOperationsGetPathParams)
    ], CertificatemanagerProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsOperationsGetQueryParams)
    ], CertificatemanagerProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsOperationsGetSecurity)
    ], CertificatemanagerProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return CertificatemanagerProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsGetRequest };
var CertificatemanagerProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsGetResponse, _super);
    function CertificatemanagerProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CertificatemanagerProjectsLocationsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return CertificatemanagerProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsGetResponse };
