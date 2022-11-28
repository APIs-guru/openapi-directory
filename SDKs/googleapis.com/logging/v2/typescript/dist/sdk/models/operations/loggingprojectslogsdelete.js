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
var LoggingProjectsLogsDeletePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsDeletePathParams, _super);
    function LoggingProjectsLogsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logName" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeletePathParams.prototype, "logName", void 0);
    return LoggingProjectsLogsDeletePathParams;
}(SpeakeasyBase));
export { LoggingProjectsLogsDeletePathParams };
var LoggingProjectsLogsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsDeleteQueryParams, _super);
    function LoggingProjectsLogsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLogsDeleteQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLogsDeleteQueryParams };
var LoggingProjectsLogsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsDeleteSecurityOption1, _super);
    function LoggingProjectsLogsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLogsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLogsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLogsDeleteSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLogsDeleteSecurityOption1 };
var LoggingProjectsLogsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsDeleteSecurityOption2, _super);
    function LoggingProjectsLogsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLogsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLogsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLogsDeleteSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLogsDeleteSecurityOption2 };
var LoggingProjectsLogsDeleteSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsDeleteSecurity, _super);
    function LoggingProjectsLogsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLogsDeleteSecurityOption1)
    ], LoggingProjectsLogsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLogsDeleteSecurityOption2)
    ], LoggingProjectsLogsDeleteSecurity.prototype, "option2", void 0);
    return LoggingProjectsLogsDeleteSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLogsDeleteSecurity };
var LoggingProjectsLogsDeleteRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsDeleteRequest, _super);
    function LoggingProjectsLogsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLogsDeletePathParams)
    ], LoggingProjectsLogsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLogsDeleteQueryParams)
    ], LoggingProjectsLogsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLogsDeleteSecurity)
    ], LoggingProjectsLogsDeleteRequest.prototype, "security", void 0);
    return LoggingProjectsLogsDeleteRequest;
}(SpeakeasyBase));
export { LoggingProjectsLogsDeleteRequest };
var LoggingProjectsLogsDeleteResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsDeleteResponse, _super);
    function LoggingProjectsLogsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLogsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LoggingProjectsLogsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLogsDeleteResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLogsDeleteResponse;
}(SpeakeasyBase));
export { LoggingProjectsLogsDeleteResponse };
