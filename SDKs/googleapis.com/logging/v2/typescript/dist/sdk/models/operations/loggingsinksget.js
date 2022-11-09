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
var LoggingSinksGetPathParams = /** @class */ (function (_super) {
    __extends(LoggingSinksGetPathParams, _super);
    function LoggingSinksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sinkName" }),
        __metadata("design:type", String)
    ], LoggingSinksGetPathParams.prototype, "sinkName", void 0);
    return LoggingSinksGetPathParams;
}(SpeakeasyBase));
export { LoggingSinksGetPathParams };
var LoggingSinksGetQueryParams = /** @class */ (function (_super) {
    __extends(LoggingSinksGetQueryParams, _super);
    function LoggingSinksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingSinksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingSinksGetQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingSinksGetQueryParams;
}(SpeakeasyBase));
export { LoggingSinksGetQueryParams };
var LoggingSinksGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingSinksGetSecurityOption1, _super);
    function LoggingSinksGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksGetSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingSinksGetSecurityOption1;
}(SpeakeasyBase));
export { LoggingSinksGetSecurityOption1 };
var LoggingSinksGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingSinksGetSecurityOption2, _super);
    function LoggingSinksGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksGetSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingSinksGetSecurityOption2;
}(SpeakeasyBase));
export { LoggingSinksGetSecurityOption2 };
var LoggingSinksGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingSinksGetSecurityOption3, _super);
    function LoggingSinksGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksGetSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingSinksGetSecurityOption3;
}(SpeakeasyBase));
export { LoggingSinksGetSecurityOption3 };
var LoggingSinksGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingSinksGetSecurityOption4, _super);
    function LoggingSinksGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksGetSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingSinksGetSecurityOption4;
}(SpeakeasyBase));
export { LoggingSinksGetSecurityOption4 };
var LoggingSinksGetSecurity = /** @class */ (function (_super) {
    __extends(LoggingSinksGetSecurity, _super);
    function LoggingSinksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksGetSecurityOption1)
    ], LoggingSinksGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksGetSecurityOption2)
    ], LoggingSinksGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksGetSecurityOption3)
    ], LoggingSinksGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksGetSecurityOption4)
    ], LoggingSinksGetSecurity.prototype, "option4", void 0);
    return LoggingSinksGetSecurity;
}(SpeakeasyBase));
export { LoggingSinksGetSecurity };
var LoggingSinksGetRequest = /** @class */ (function (_super) {
    __extends(LoggingSinksGetRequest, _super);
    function LoggingSinksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksGetPathParams)
    ], LoggingSinksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksGetQueryParams)
    ], LoggingSinksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksGetSecurity)
    ], LoggingSinksGetRequest.prototype, "security", void 0);
    return LoggingSinksGetRequest;
}(SpeakeasyBase));
export { LoggingSinksGetRequest };
var LoggingSinksGetResponse = /** @class */ (function (_super) {
    __extends(LoggingSinksGetResponse, _super);
    function LoggingSinksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingSinksGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LogSink)
    ], LoggingSinksGetResponse.prototype, "logSink", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingSinksGetResponse.prototype, "statusCode", void 0);
    return LoggingSinksGetResponse;
}(SpeakeasyBase));
export { LoggingSinksGetResponse };
