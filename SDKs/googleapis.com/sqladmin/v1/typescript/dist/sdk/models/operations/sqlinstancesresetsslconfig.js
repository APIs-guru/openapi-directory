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
var SqlInstancesResetSslConfigPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesResetSslConfigPathParams, _super);
    function SqlInstancesResetSslConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigPathParams.prototype, "project", void 0);
    return SqlInstancesResetSslConfigPathParams;
}(SpeakeasyBase));
export { SqlInstancesResetSslConfigPathParams };
var SqlInstancesResetSslConfigQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesResetSslConfigQueryParams, _super);
    function SqlInstancesResetSslConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesResetSslConfigQueryParams;
}(SpeakeasyBase));
export { SqlInstancesResetSslConfigQueryParams };
var SqlInstancesResetSslConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesResetSslConfigSecurityOption1, _super);
    function SqlInstancesResetSslConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesResetSslConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesResetSslConfigSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesResetSslConfigSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesResetSslConfigSecurityOption1 };
var SqlInstancesResetSslConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesResetSslConfigSecurityOption2, _super);
    function SqlInstancesResetSslConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesResetSslConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesResetSslConfigSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesResetSslConfigSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesResetSslConfigSecurityOption2 };
var SqlInstancesResetSslConfigSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesResetSslConfigSecurity, _super);
    function SqlInstancesResetSslConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesResetSslConfigSecurityOption1)
    ], SqlInstancesResetSslConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesResetSslConfigSecurityOption2)
    ], SqlInstancesResetSslConfigSecurity.prototype, "option2", void 0);
    return SqlInstancesResetSslConfigSecurity;
}(SpeakeasyBase));
export { SqlInstancesResetSslConfigSecurity };
var SqlInstancesResetSslConfigRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesResetSslConfigRequest, _super);
    function SqlInstancesResetSslConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesResetSslConfigPathParams)
    ], SqlInstancesResetSslConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesResetSslConfigQueryParams)
    ], SqlInstancesResetSslConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesResetSslConfigSecurity)
    ], SqlInstancesResetSslConfigRequest.prototype, "security", void 0);
    return SqlInstancesResetSslConfigRequest;
}(SpeakeasyBase));
export { SqlInstancesResetSslConfigRequest };
var SqlInstancesResetSslConfigResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesResetSslConfigResponse, _super);
    function SqlInstancesResetSslConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesResetSslConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesResetSslConfigResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesResetSslConfigResponse.prototype, "statusCode", void 0);
    return SqlInstancesResetSslConfigResponse;
}(SpeakeasyBase));
export { SqlInstancesResetSslConfigResponse };
