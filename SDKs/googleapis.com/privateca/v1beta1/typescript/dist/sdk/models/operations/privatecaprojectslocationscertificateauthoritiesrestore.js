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
var PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams };
var PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity };
var PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RestoreCertificateAuthorityRequest)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest };
var PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse, _super);
    function PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse };
