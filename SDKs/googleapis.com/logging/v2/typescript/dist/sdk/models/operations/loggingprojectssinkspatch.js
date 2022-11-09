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
var LoggingProjectsSinksPatchPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsSinksPatchPathParams, _super);
    function LoggingProjectsSinksPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sinkName" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchPathParams.prototype, "sinkName", void 0);
    return LoggingProjectsSinksPatchPathParams;
}(SpeakeasyBase));
export { LoggingProjectsSinksPatchPathParams };
var LoggingProjectsSinksPatchQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsSinksPatchQueryParams, _super);
    function LoggingProjectsSinksPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uniqueWriterIdentity" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "uniqueWriterIdentity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsSinksPatchQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsSinksPatchQueryParams };
var LoggingProjectsSinksPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsSinksPatchSecurityOption1, _super);
    function LoggingProjectsSinksPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsSinksPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsSinksPatchSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsSinksPatchSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsSinksPatchSecurityOption1 };
var LoggingProjectsSinksPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsSinksPatchSecurityOption2, _super);
    function LoggingProjectsSinksPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsSinksPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsSinksPatchSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsSinksPatchSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsSinksPatchSecurityOption2 };
var LoggingProjectsSinksPatchSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsSinksPatchSecurity, _super);
    function LoggingProjectsSinksPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsSinksPatchSecurityOption1)
    ], LoggingProjectsSinksPatchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsSinksPatchSecurityOption2)
    ], LoggingProjectsSinksPatchSecurity.prototype, "option2", void 0);
    return LoggingProjectsSinksPatchSecurity;
}(SpeakeasyBase));
export { LoggingProjectsSinksPatchSecurity };
var LoggingProjectsSinksPatchRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsSinksPatchRequest, _super);
    function LoggingProjectsSinksPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsSinksPatchPathParams)
    ], LoggingProjectsSinksPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsSinksPatchQueryParams)
    ], LoggingProjectsSinksPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogSink)
    ], LoggingProjectsSinksPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsSinksPatchSecurity)
    ], LoggingProjectsSinksPatchRequest.prototype, "security", void 0);
    return LoggingProjectsSinksPatchRequest;
}(SpeakeasyBase));
export { LoggingProjectsSinksPatchRequest };
var LoggingProjectsSinksPatchResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsSinksPatchResponse, _super);
    function LoggingProjectsSinksPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsSinksPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LogSink)
    ], LoggingProjectsSinksPatchResponse.prototype, "logSink", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsSinksPatchResponse.prototype, "statusCode", void 0);
    return LoggingProjectsSinksPatchResponse;
}(SpeakeasyBase));
export { LoggingProjectsSinksPatchResponse };
