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
var LoggingEntriesWriteQueryParams = /** @class */ (function (_super) {
    __extends(LoggingEntriesWriteQueryParams, _super);
    function LoggingEntriesWriteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingEntriesWriteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingEntriesWriteQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingEntriesWriteQueryParams;
}(SpeakeasyBase));
export { LoggingEntriesWriteQueryParams };
var LoggingEntriesWriteSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingEntriesWriteSecurityOption1, _super);
    function LoggingEntriesWriteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingEntriesWriteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingEntriesWriteSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingEntriesWriteSecurityOption1;
}(SpeakeasyBase));
export { LoggingEntriesWriteSecurityOption1 };
var LoggingEntriesWriteSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingEntriesWriteSecurityOption2, _super);
    function LoggingEntriesWriteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingEntriesWriteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingEntriesWriteSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingEntriesWriteSecurityOption2;
}(SpeakeasyBase));
export { LoggingEntriesWriteSecurityOption2 };
var LoggingEntriesWriteSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingEntriesWriteSecurityOption3, _super);
    function LoggingEntriesWriteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingEntriesWriteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingEntriesWriteSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingEntriesWriteSecurityOption3;
}(SpeakeasyBase));
export { LoggingEntriesWriteSecurityOption3 };
var LoggingEntriesWriteSecurity = /** @class */ (function (_super) {
    __extends(LoggingEntriesWriteSecurity, _super);
    function LoggingEntriesWriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingEntriesWriteSecurityOption1)
    ], LoggingEntriesWriteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingEntriesWriteSecurityOption2)
    ], LoggingEntriesWriteSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingEntriesWriteSecurityOption3)
    ], LoggingEntriesWriteSecurity.prototype, "option3", void 0);
    return LoggingEntriesWriteSecurity;
}(SpeakeasyBase));
export { LoggingEntriesWriteSecurity };
var LoggingEntriesWriteRequest = /** @class */ (function (_super) {
    __extends(LoggingEntriesWriteRequest, _super);
    function LoggingEntriesWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingEntriesWriteQueryParams)
    ], LoggingEntriesWriteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WriteLogEntriesRequest)
    ], LoggingEntriesWriteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingEntriesWriteSecurity)
    ], LoggingEntriesWriteRequest.prototype, "security", void 0);
    return LoggingEntriesWriteRequest;
}(SpeakeasyBase));
export { LoggingEntriesWriteRequest };
var LoggingEntriesWriteResponse = /** @class */ (function (_super) {
    __extends(LoggingEntriesWriteResponse, _super);
    function LoggingEntriesWriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingEntriesWriteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingEntriesWriteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], LoggingEntriesWriteResponse.prototype, "writeLogEntriesResponse", void 0);
    return LoggingEntriesWriteResponse;
}(SpeakeasyBase));
export { LoggingEntriesWriteResponse };
