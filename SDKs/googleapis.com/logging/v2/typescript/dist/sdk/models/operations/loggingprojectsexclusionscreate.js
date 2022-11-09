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
var LoggingProjectsExclusionsCreatePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsCreatePathParams, _super);
    function LoggingProjectsExclusionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreatePathParams.prototype, "parent", void 0);
    return LoggingProjectsExclusionsCreatePathParams;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsCreatePathParams };
var LoggingProjectsExclusionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsCreateQueryParams, _super);
    function LoggingProjectsExclusionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsExclusionsCreateQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsCreateQueryParams };
var LoggingProjectsExclusionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsCreateSecurityOption1, _super);
    function LoggingProjectsExclusionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsExclusionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsExclusionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsExclusionsCreateSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsCreateSecurityOption1 };
var LoggingProjectsExclusionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsCreateSecurityOption2, _super);
    function LoggingProjectsExclusionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsExclusionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsExclusionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsExclusionsCreateSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsCreateSecurityOption2 };
var LoggingProjectsExclusionsCreateSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsCreateSecurity, _super);
    function LoggingProjectsExclusionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsExclusionsCreateSecurityOption1)
    ], LoggingProjectsExclusionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsExclusionsCreateSecurityOption2)
    ], LoggingProjectsExclusionsCreateSecurity.prototype, "option2", void 0);
    return LoggingProjectsExclusionsCreateSecurity;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsCreateSecurity };
var LoggingProjectsExclusionsCreateRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsCreateRequest, _super);
    function LoggingProjectsExclusionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsExclusionsCreatePathParams)
    ], LoggingProjectsExclusionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsExclusionsCreateQueryParams)
    ], LoggingProjectsExclusionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogExclusion)
    ], LoggingProjectsExclusionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsExclusionsCreateSecurity)
    ], LoggingProjectsExclusionsCreateRequest.prototype, "security", void 0);
    return LoggingProjectsExclusionsCreateRequest;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsCreateRequest };
var LoggingProjectsExclusionsCreateResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsCreateResponse, _super);
    function LoggingProjectsExclusionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LogExclusion)
    ], LoggingProjectsExclusionsCreateResponse.prototype, "logExclusion", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsExclusionsCreateResponse.prototype, "statusCode", void 0);
    return LoggingProjectsExclusionsCreateResponse;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsCreateResponse };
