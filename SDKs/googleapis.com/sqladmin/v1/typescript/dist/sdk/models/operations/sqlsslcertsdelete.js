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
var SqlSslCertsDeletePathParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsDeletePathParams, _super);
    function SqlSslCertsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeletePathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeletePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeletePathParams.prototype, "sha1Fingerprint", void 0);
    return SqlSslCertsDeletePathParams;
}(SpeakeasyBase));
export { SqlSslCertsDeletePathParams };
var SqlSslCertsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsDeleteQueryParams, _super);
    function SqlSslCertsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlSslCertsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SqlSslCertsDeleteQueryParams;
}(SpeakeasyBase));
export { SqlSslCertsDeleteQueryParams };
var SqlSslCertsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlSslCertsDeleteSecurityOption1, _super);
    function SqlSslCertsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return SqlSslCertsDeleteSecurityOption1;
}(SpeakeasyBase));
export { SqlSslCertsDeleteSecurityOption1 };
var SqlSslCertsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlSslCertsDeleteSecurityOption2, _super);
    function SqlSslCertsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return SqlSslCertsDeleteSecurityOption2;
}(SpeakeasyBase));
export { SqlSslCertsDeleteSecurityOption2 };
var SqlSslCertsDeleteSecurity = /** @class */ (function (_super) {
    __extends(SqlSslCertsDeleteSecurity, _super);
    function SqlSslCertsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsDeleteSecurityOption1)
    ], SqlSslCertsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsDeleteSecurityOption2)
    ], SqlSslCertsDeleteSecurity.prototype, "option2", void 0);
    return SqlSslCertsDeleteSecurity;
}(SpeakeasyBase));
export { SqlSslCertsDeleteSecurity };
var SqlSslCertsDeleteRequest = /** @class */ (function (_super) {
    __extends(SqlSslCertsDeleteRequest, _super);
    function SqlSslCertsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsDeletePathParams)
    ], SqlSslCertsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsDeleteQueryParams)
    ], SqlSslCertsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsDeleteSecurity)
    ], SqlSslCertsDeleteRequest.prototype, "security", void 0);
    return SqlSslCertsDeleteRequest;
}(SpeakeasyBase));
export { SqlSslCertsDeleteRequest };
var SqlSslCertsDeleteResponse = /** @class */ (function (_super) {
    __extends(SqlSslCertsDeleteResponse, _super);
    function SqlSslCertsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlSslCertsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlSslCertsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlSslCertsDeleteResponse.prototype, "statusCode", void 0);
    return SqlSslCertsDeleteResponse;
}(SpeakeasyBase));
export { SqlSslCertsDeleteResponse };
