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
var SqlSslCertsCreateEphemeralPathParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsCreateEphemeralPathParams, _super);
    function SqlSslCertsCreateEphemeralPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralPathParams.prototype, "project", void 0);
    return SqlSslCertsCreateEphemeralPathParams;
}(SpeakeasyBase));
export { SqlSslCertsCreateEphemeralPathParams };
var SqlSslCertsCreateEphemeralQueryParams = /** @class */ (function (_super) {
    __extends(SqlSslCertsCreateEphemeralQueryParams, _super);
    function SqlSslCertsCreateEphemeralQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralQueryParams.prototype, "uploadProtocol", void 0);
    return SqlSslCertsCreateEphemeralQueryParams;
}(SpeakeasyBase));
export { SqlSslCertsCreateEphemeralQueryParams };
var SqlSslCertsCreateEphemeralSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlSslCertsCreateEphemeralSecurityOption1, _super);
    function SqlSslCertsCreateEphemeralSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsCreateEphemeralSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsCreateEphemeralSecurityOption1.prototype, "oauth2c", void 0);
    return SqlSslCertsCreateEphemeralSecurityOption1;
}(SpeakeasyBase));
export { SqlSslCertsCreateEphemeralSecurityOption1 };
var SqlSslCertsCreateEphemeralSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlSslCertsCreateEphemeralSecurityOption2, _super);
    function SqlSslCertsCreateEphemeralSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlSslCertsCreateEphemeralSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlSslCertsCreateEphemeralSecurityOption2.prototype, "oauth2c", void 0);
    return SqlSslCertsCreateEphemeralSecurityOption2;
}(SpeakeasyBase));
export { SqlSslCertsCreateEphemeralSecurityOption2 };
var SqlSslCertsCreateEphemeralSecurity = /** @class */ (function (_super) {
    __extends(SqlSslCertsCreateEphemeralSecurity, _super);
    function SqlSslCertsCreateEphemeralSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsCreateEphemeralSecurityOption1)
    ], SqlSslCertsCreateEphemeralSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlSslCertsCreateEphemeralSecurityOption2)
    ], SqlSslCertsCreateEphemeralSecurity.prototype, "option2", void 0);
    return SqlSslCertsCreateEphemeralSecurity;
}(SpeakeasyBase));
export { SqlSslCertsCreateEphemeralSecurity };
var SqlSslCertsCreateEphemeralRequest = /** @class */ (function (_super) {
    __extends(SqlSslCertsCreateEphemeralRequest, _super);
    function SqlSslCertsCreateEphemeralRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsCreateEphemeralPathParams)
    ], SqlSslCertsCreateEphemeralRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsCreateEphemeralQueryParams)
    ], SqlSslCertsCreateEphemeralRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SslCertsCreateEphemeralRequest)
    ], SqlSslCertsCreateEphemeralRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlSslCertsCreateEphemeralSecurity)
    ], SqlSslCertsCreateEphemeralRequest.prototype, "security", void 0);
    return SqlSslCertsCreateEphemeralRequest;
}(SpeakeasyBase));
export { SqlSslCertsCreateEphemeralRequest };
var SqlSslCertsCreateEphemeralResponse = /** @class */ (function (_super) {
    __extends(SqlSslCertsCreateEphemeralResponse, _super);
    function SqlSslCertsCreateEphemeralResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlSslCertsCreateEphemeralResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SslCert)
    ], SqlSslCertsCreateEphemeralResponse.prototype, "sslCert", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlSslCertsCreateEphemeralResponse.prototype, "statusCode", void 0);
    return SqlSslCertsCreateEphemeralResponse;
}(SpeakeasyBase));
export { SqlSslCertsCreateEphemeralResponse };
