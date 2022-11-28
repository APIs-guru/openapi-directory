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
var LoggingProjectsLocationsBucketsViewsPatchPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsPatchPathParams, _super);
    function LoggingProjectsLocationsBucketsViewsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchPathParams.prototype, "name", void 0);
    return LoggingProjectsLocationsBucketsViewsPatchPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsPatchPathParams };
var LoggingProjectsLocationsBucketsViewsPatchQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsPatchQueryParams, _super);
    function LoggingProjectsLocationsBucketsViewsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsBucketsViewsPatchQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsPatchQueryParams };
var LoggingProjectsLocationsBucketsViewsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsPatchSecurityOption1, _super);
    function LoggingProjectsLocationsBucketsViewsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsPatchSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsPatchSecurityOption1 };
var LoggingProjectsLocationsBucketsViewsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsPatchSecurityOption2, _super);
    function LoggingProjectsLocationsBucketsViewsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsPatchSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsPatchSecurityOption2 };
var LoggingProjectsLocationsBucketsViewsPatchSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsPatchSecurity, _super);
    function LoggingProjectsLocationsBucketsViewsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsPatchSecurityOption1)
    ], LoggingProjectsLocationsBucketsViewsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsPatchSecurityOption2)
    ], LoggingProjectsLocationsBucketsViewsPatchSecurity.prototype, "option2", void 0);
    return LoggingProjectsLocationsBucketsViewsPatchSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsPatchSecurity };
var LoggingProjectsLocationsBucketsViewsPatchRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsPatchRequest, _super);
    function LoggingProjectsLocationsBucketsViewsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsPatchPathParams)
    ], LoggingProjectsLocationsBucketsViewsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsPatchQueryParams)
    ], LoggingProjectsLocationsBucketsViewsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogViewInput)
    ], LoggingProjectsLocationsBucketsViewsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsPatchSecurity)
    ], LoggingProjectsLocationsBucketsViewsPatchRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsBucketsViewsPatchRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsPatchRequest };
var LoggingProjectsLocationsBucketsViewsPatchResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsPatchResponse, _super);
    function LoggingProjectsLocationsBucketsViewsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogView)
    ], LoggingProjectsLocationsBucketsViewsPatchResponse.prototype, "logView", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsViewsPatchResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsBucketsViewsPatchResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsPatchResponse };
