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
var LoggingProjectsLocationsBucketsUndeletePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsUndeletePathParams, _super);
    function LoggingProjectsLocationsBucketsUndeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeletePathParams.prototype, "name", void 0);
    return LoggingProjectsLocationsBucketsUndeletePathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsUndeletePathParams };
var LoggingProjectsLocationsBucketsUndeleteQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsUndeleteQueryParams, _super);
    function LoggingProjectsLocationsBucketsUndeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsBucketsUndeleteQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsUndeleteQueryParams };
var LoggingProjectsLocationsBucketsUndeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsUndeleteSecurityOption1, _super);
    function LoggingProjectsLocationsBucketsUndeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsUndeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsUndeleteSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsUndeleteSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsUndeleteSecurityOption1 };
var LoggingProjectsLocationsBucketsUndeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsUndeleteSecurityOption2, _super);
    function LoggingProjectsLocationsBucketsUndeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsUndeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsUndeleteSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsUndeleteSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsUndeleteSecurityOption2 };
var LoggingProjectsLocationsBucketsUndeleteSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsUndeleteSecurity, _super);
    function LoggingProjectsLocationsBucketsUndeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsUndeleteSecurityOption1)
    ], LoggingProjectsLocationsBucketsUndeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsUndeleteSecurityOption2)
    ], LoggingProjectsLocationsBucketsUndeleteSecurity.prototype, "option2", void 0);
    return LoggingProjectsLocationsBucketsUndeleteSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsUndeleteSecurity };
var LoggingProjectsLocationsBucketsUndeleteRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsUndeleteRequest, _super);
    function LoggingProjectsLocationsBucketsUndeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsUndeletePathParams)
    ], LoggingProjectsLocationsBucketsUndeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsUndeleteQueryParams)
    ], LoggingProjectsLocationsBucketsUndeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], LoggingProjectsLocationsBucketsUndeleteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsUndeleteSecurity)
    ], LoggingProjectsLocationsBucketsUndeleteRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsBucketsUndeleteRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsUndeleteRequest };
var LoggingProjectsLocationsBucketsUndeleteResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsUndeleteResponse, _super);
    function LoggingProjectsLocationsBucketsUndeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsUndeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], LoggingProjectsLocationsBucketsUndeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsUndeleteResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsBucketsUndeleteResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsUndeleteResponse };
