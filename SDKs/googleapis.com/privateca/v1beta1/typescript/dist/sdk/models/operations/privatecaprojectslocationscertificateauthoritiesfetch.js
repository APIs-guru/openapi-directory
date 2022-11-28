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
var PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity };
var PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesFetchPathParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesFetchQueryParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesFetchSecurity)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest };
var PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FetchCertificateAuthorityCsrResponse)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse.prototype, "fetchCertificateAuthorityCsrResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse };
