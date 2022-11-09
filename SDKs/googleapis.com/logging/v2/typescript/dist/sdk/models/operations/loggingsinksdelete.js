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
var LoggingSinksDeletePathParams = /** @class */ (function (_super) {
    __extends(LoggingSinksDeletePathParams, _super);
    function LoggingSinksDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sinkName" }),
        __metadata("design:type", String)
    ], LoggingSinksDeletePathParams.prototype, "sinkName", void 0);
    return LoggingSinksDeletePathParams;
}(SpeakeasyBase));
export { LoggingSinksDeletePathParams };
var LoggingSinksDeleteQueryParams = /** @class */ (function (_super) {
    __extends(LoggingSinksDeleteQueryParams, _super);
    function LoggingSinksDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingSinksDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingSinksDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingSinksDeleteQueryParams;
}(SpeakeasyBase));
export { LoggingSinksDeleteQueryParams };
var LoggingSinksDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingSinksDeleteSecurityOption1, _super);
    function LoggingSinksDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingSinksDeleteSecurityOption1;
}(SpeakeasyBase));
export { LoggingSinksDeleteSecurityOption1 };
var LoggingSinksDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingSinksDeleteSecurityOption2, _super);
    function LoggingSinksDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingSinksDeleteSecurityOption2;
}(SpeakeasyBase));
export { LoggingSinksDeleteSecurityOption2 };
var LoggingSinksDeleteSecurity = /** @class */ (function (_super) {
    __extends(LoggingSinksDeleteSecurity, _super);
    function LoggingSinksDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksDeleteSecurityOption1)
    ], LoggingSinksDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksDeleteSecurityOption2)
    ], LoggingSinksDeleteSecurity.prototype, "option2", void 0);
    return LoggingSinksDeleteSecurity;
}(SpeakeasyBase));
export { LoggingSinksDeleteSecurity };
var LoggingSinksDeleteRequest = /** @class */ (function (_super) {
    __extends(LoggingSinksDeleteRequest, _super);
    function LoggingSinksDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksDeletePathParams)
    ], LoggingSinksDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksDeleteQueryParams)
    ], LoggingSinksDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksDeleteSecurity)
    ], LoggingSinksDeleteRequest.prototype, "security", void 0);
    return LoggingSinksDeleteRequest;
}(SpeakeasyBase));
export { LoggingSinksDeleteRequest };
var LoggingSinksDeleteResponse = /** @class */ (function (_super) {
    __extends(LoggingSinksDeleteResponse, _super);
    function LoggingSinksDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingSinksDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], LoggingSinksDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingSinksDeleteResponse.prototype, "statusCode", void 0);
    return LoggingSinksDeleteResponse;
}(SpeakeasyBase));
export { LoggingSinksDeleteResponse };
