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
var LoggingProjectsLocationsBucketsViewsDeletePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsDeletePathParams, _super);
    function LoggingProjectsLocationsBucketsViewsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeletePathParams.prototype, "name", void 0);
    return LoggingProjectsLocationsBucketsViewsDeletePathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsDeletePathParams };
var LoggingProjectsLocationsBucketsViewsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsDeleteQueryParams, _super);
    function LoggingProjectsLocationsBucketsViewsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsBucketsViewsDeleteQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsDeleteQueryParams };
var LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1, _super);
    function LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1 };
var LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2, _super);
    function LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2 };
var LoggingProjectsLocationsBucketsViewsDeleteSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsDeleteSecurity, _super);
    function LoggingProjectsLocationsBucketsViewsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1)
    ], LoggingProjectsLocationsBucketsViewsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2)
    ], LoggingProjectsLocationsBucketsViewsDeleteSecurity.prototype, "option2", void 0);
    return LoggingProjectsLocationsBucketsViewsDeleteSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsDeleteSecurity };
var LoggingProjectsLocationsBucketsViewsDeleteRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsDeleteRequest, _super);
    function LoggingProjectsLocationsBucketsViewsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsDeletePathParams)
    ], LoggingProjectsLocationsBucketsViewsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsDeleteQueryParams)
    ], LoggingProjectsLocationsBucketsViewsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsDeleteSecurity)
    ], LoggingProjectsLocationsBucketsViewsDeleteRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsBucketsViewsDeleteRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsDeleteRequest };
var LoggingProjectsLocationsBucketsViewsDeleteResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsDeleteResponse, _super);
    function LoggingProjectsLocationsBucketsViewsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], LoggingProjectsLocationsBucketsViewsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsViewsDeleteResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsBucketsViewsDeleteResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsDeleteResponse };
