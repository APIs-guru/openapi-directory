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
var LoggingSinksCreatePathParams = /** @class */ (function (_super) {
    __extends(LoggingSinksCreatePathParams, _super);
    function LoggingSinksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingSinksCreatePathParams.prototype, "parent", void 0);
    return LoggingSinksCreatePathParams;
}(SpeakeasyBase));
export { LoggingSinksCreatePathParams };
var LoggingSinksCreateQueryParams = /** @class */ (function (_super) {
    __extends(LoggingSinksCreateQueryParams, _super);
    function LoggingSinksCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingSinksCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uniqueWriterIdentity" }),
        __metadata("design:type", Boolean)
    ], LoggingSinksCreateQueryParams.prototype, "uniqueWriterIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingSinksCreateQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingSinksCreateQueryParams;
}(SpeakeasyBase));
export { LoggingSinksCreateQueryParams };
var LoggingSinksCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingSinksCreateSecurityOption1, _super);
    function LoggingSinksCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksCreateSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingSinksCreateSecurityOption1;
}(SpeakeasyBase));
export { LoggingSinksCreateSecurityOption1 };
var LoggingSinksCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingSinksCreateSecurityOption2, _super);
    function LoggingSinksCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksCreateSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingSinksCreateSecurityOption2;
}(SpeakeasyBase));
export { LoggingSinksCreateSecurityOption2 };
var LoggingSinksCreateSecurity = /** @class */ (function (_super) {
    __extends(LoggingSinksCreateSecurity, _super);
    function LoggingSinksCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksCreateSecurityOption1)
    ], LoggingSinksCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksCreateSecurityOption2)
    ], LoggingSinksCreateSecurity.prototype, "option2", void 0);
    return LoggingSinksCreateSecurity;
}(SpeakeasyBase));
export { LoggingSinksCreateSecurity };
var LoggingSinksCreateRequest = /** @class */ (function (_super) {
    __extends(LoggingSinksCreateRequest, _super);
    function LoggingSinksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingSinksCreatePathParams)
    ], LoggingSinksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingSinksCreateQueryParams)
    ], LoggingSinksCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogSinkInput)
    ], LoggingSinksCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingSinksCreateSecurity)
    ], LoggingSinksCreateRequest.prototype, "security", void 0);
    return LoggingSinksCreateRequest;
}(SpeakeasyBase));
export { LoggingSinksCreateRequest };
var LoggingSinksCreateResponse = /** @class */ (function (_super) {
    __extends(LoggingSinksCreateResponse, _super);
    function LoggingSinksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingSinksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogSink)
    ], LoggingSinksCreateResponse.prototype, "logSink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingSinksCreateResponse.prototype, "statusCode", void 0);
    return LoggingSinksCreateResponse;
}(SpeakeasyBase));
export { LoggingSinksCreateResponse };
