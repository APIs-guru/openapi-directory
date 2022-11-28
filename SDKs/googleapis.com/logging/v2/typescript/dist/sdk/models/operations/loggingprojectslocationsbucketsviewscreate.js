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
var LoggingProjectsLocationsBucketsViewsCreatePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsCreatePathParams, _super);
    function LoggingProjectsLocationsBucketsViewsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreatePathParams.prototype, "parent", void 0);
    return LoggingProjectsLocationsBucketsViewsCreatePathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsCreatePathParams };
var LoggingProjectsLocationsBucketsViewsCreateQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsCreateQueryParams, _super);
    function LoggingProjectsLocationsBucketsViewsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viewId" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateQueryParams.prototype, "viewId", void 0);
    return LoggingProjectsLocationsBucketsViewsCreateQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsCreateQueryParams };
var LoggingProjectsLocationsBucketsViewsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsCreateSecurityOption1, _super);
    function LoggingProjectsLocationsBucketsViewsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsCreateSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsCreateSecurityOption1 };
var LoggingProjectsLocationsBucketsViewsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsCreateSecurityOption2, _super);
    function LoggingProjectsLocationsBucketsViewsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsCreateSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsCreateSecurityOption2 };
var LoggingProjectsLocationsBucketsViewsCreateSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsCreateSecurity, _super);
    function LoggingProjectsLocationsBucketsViewsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsCreateSecurityOption1)
    ], LoggingProjectsLocationsBucketsViewsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsCreateSecurityOption2)
    ], LoggingProjectsLocationsBucketsViewsCreateSecurity.prototype, "option2", void 0);
    return LoggingProjectsLocationsBucketsViewsCreateSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsCreateSecurity };
var LoggingProjectsLocationsBucketsViewsCreateRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsCreateRequest, _super);
    function LoggingProjectsLocationsBucketsViewsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsCreatePathParams)
    ], LoggingProjectsLocationsBucketsViewsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsCreateQueryParams)
    ], LoggingProjectsLocationsBucketsViewsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogViewInput)
    ], LoggingProjectsLocationsBucketsViewsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsCreateSecurity)
    ], LoggingProjectsLocationsBucketsViewsCreateRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsBucketsViewsCreateRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsCreateRequest };
var LoggingProjectsLocationsBucketsViewsCreateResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsCreateResponse, _super);
    function LoggingProjectsLocationsBucketsViewsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogView)
    ], LoggingProjectsLocationsBucketsViewsCreateResponse.prototype, "logView", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsViewsCreateResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsBucketsViewsCreateResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsCreateResponse };
