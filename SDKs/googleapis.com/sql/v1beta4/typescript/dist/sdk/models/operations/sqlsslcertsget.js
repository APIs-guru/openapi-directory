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
var SqlSslCertsGetPathParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsGetPathParams, _super);
    function SqlSslCertsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetPathParams.prototype, "sha1Fingerprint", void 0);
    return SqlSslCertsGetPathParams;
}(SpeakeasyBase));
export { SqlSslCertsGetPathParams };
var SqlSslCertsGetQueryParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsGetQueryParams, _super);
    function SqlSslCertsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlSslCertsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlSslCertsGetQueryParams.prototype, "uploadProtocol", void 0);
    return SqlSslCertsGetQueryParams;
}(SpeakeasyBase));
export { SqlSslCertsGetQueryParams };
var SqlSslCertsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlSslCertsGetSecurityOption1, _super);
    function SqlSslCertsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsGetSecurityOption1.prototype, "oauth2c", void 0);
    return SqlSslCertsGetSecurityOption1;
}(SpeakeasyBase));
export { SqlSslCertsGetSecurityOption1 };
var SqlSslCertsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlSslCertsGetSecurityOption2, _super);
    function SqlSslCertsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsGetSecurityOption2.prototype, "oauth2c", void 0);
    return SqlSslCertsGetSecurityOption2;
}(SpeakeasyBase));
export { SqlSslCertsGetSecurityOption2 };
var SqlSslCertsGetSecurity = /** @class */ (function (_super) {
    __extends(SqlSslCertsGetSecurity, _super);
    function SqlSslCertsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsGetSecurityOption1)
    ], SqlSslCertsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsGetSecurityOption2)
    ], SqlSslCertsGetSecurity.prototype, "option2", void 0);
    return SqlSslCertsGetSecurity;
}(SpeakeasyBase));
export { SqlSslCertsGetSecurity };
var SqlSslCertsGetRequest = /** @class */ (function (_super) {
    __extends(SqlSslCertsGetRequest, _super);
    function SqlSslCertsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsGetPathParams)
    ], SqlSslCertsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsGetQueryParams)
    ], SqlSslCertsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsGetSecurity)
    ], SqlSslCertsGetRequest.prototype, "security", void 0);
    return SqlSslCertsGetRequest;
}(SpeakeasyBase));
export { SqlSslCertsGetRequest };
var SqlSslCertsGetResponse = /** @class */ (function (_super) {
    __extends(SqlSslCertsGetResponse, _super);
    function SqlSslCertsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlSslCertsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SslCert)
    ], SqlSslCertsGetResponse.prototype, "sslCert", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlSslCertsGetResponse.prototype, "statusCode", void 0);
    return SqlSslCertsGetResponse;
}(SpeakeasyBase));
export { SqlSslCertsGetResponse };
