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
var SqlSslCertsInsertPathParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsInsertPathParams, _super);
    function SqlSslCertsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertPathParams.prototype, "project", void 0);
    return SqlSslCertsInsertPathParams;
}(SpeakeasyBase));
export { SqlSslCertsInsertPathParams };
var SqlSslCertsInsertQueryParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsInsertQueryParams, _super);
    function SqlSslCertsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlSslCertsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlSslCertsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return SqlSslCertsInsertQueryParams;
}(SpeakeasyBase));
export { SqlSslCertsInsertQueryParams };
var SqlSslCertsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlSslCertsInsertSecurityOption1, _super);
    function SqlSslCertsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return SqlSslCertsInsertSecurityOption1;
}(SpeakeasyBase));
export { SqlSslCertsInsertSecurityOption1 };
var SqlSslCertsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlSslCertsInsertSecurityOption2, _super);
    function SqlSslCertsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return SqlSslCertsInsertSecurityOption2;
}(SpeakeasyBase));
export { SqlSslCertsInsertSecurityOption2 };
var SqlSslCertsInsertSecurity = /** @class */ (function (_super) {
    __extends(SqlSslCertsInsertSecurity, _super);
    function SqlSslCertsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsInsertSecurityOption1)
    ], SqlSslCertsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsInsertSecurityOption2)
    ], SqlSslCertsInsertSecurity.prototype, "option2", void 0);
    return SqlSslCertsInsertSecurity;
}(SpeakeasyBase));
export { SqlSslCertsInsertSecurity };
var SqlSslCertsInsertRequest = /** @class */ (function (_super) {
    __extends(SqlSslCertsInsertRequest, _super);
    function SqlSslCertsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsInsertPathParams)
    ], SqlSslCertsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsInsertQueryParams)
    ], SqlSslCertsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SslCertsInsertRequest)
    ], SqlSslCertsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsInsertSecurity)
    ], SqlSslCertsInsertRequest.prototype, "security", void 0);
    return SqlSslCertsInsertRequest;
}(SpeakeasyBase));
export { SqlSslCertsInsertRequest };
var SqlSslCertsInsertResponse = /** @class */ (function (_super) {
    __extends(SqlSslCertsInsertResponse, _super);
    function SqlSslCertsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlSslCertsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SslCertsInsertResponse)
    ], SqlSslCertsInsertResponse.prototype, "sslCertsInsertResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlSslCertsInsertResponse.prototype, "statusCode", void 0);
    return SqlSslCertsInsertResponse;
}(SpeakeasyBase));
export { SqlSslCertsInsertResponse };
