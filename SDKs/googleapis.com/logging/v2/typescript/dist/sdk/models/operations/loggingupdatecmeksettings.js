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
var LoggingUpdateCmekSettingsPathParams = /** @class */ (function (_super) {
    __extends(LoggingUpdateCmekSettingsPathParams, _super);
    function LoggingUpdateCmekSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsPathParams.prototype, "name", void 0);
    return LoggingUpdateCmekSettingsPathParams;
}(SpeakeasyBase));
export { LoggingUpdateCmekSettingsPathParams };
var LoggingUpdateCmekSettingsQueryParams = /** @class */ (function (_super) {
    __extends(LoggingUpdateCmekSettingsQueryParams, _super);
    function LoggingUpdateCmekSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingUpdateCmekSettingsQueryParams;
}(SpeakeasyBase));
export { LoggingUpdateCmekSettingsQueryParams };
var LoggingUpdateCmekSettingsSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingUpdateCmekSettingsSecurityOption1, _super);
    function LoggingUpdateCmekSettingsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingUpdateCmekSettingsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingUpdateCmekSettingsSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingUpdateCmekSettingsSecurityOption1;
}(SpeakeasyBase));
export { LoggingUpdateCmekSettingsSecurityOption1 };
var LoggingUpdateCmekSettingsSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingUpdateCmekSettingsSecurityOption2, _super);
    function LoggingUpdateCmekSettingsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingUpdateCmekSettingsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingUpdateCmekSettingsSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingUpdateCmekSettingsSecurityOption2;
}(SpeakeasyBase));
export { LoggingUpdateCmekSettingsSecurityOption2 };
var LoggingUpdateCmekSettingsSecurity = /** @class */ (function (_super) {
    __extends(LoggingUpdateCmekSettingsSecurity, _super);
    function LoggingUpdateCmekSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingUpdateCmekSettingsSecurityOption1)
    ], LoggingUpdateCmekSettingsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingUpdateCmekSettingsSecurityOption2)
    ], LoggingUpdateCmekSettingsSecurity.prototype, "option2", void 0);
    return LoggingUpdateCmekSettingsSecurity;
}(SpeakeasyBase));
export { LoggingUpdateCmekSettingsSecurity };
var LoggingUpdateCmekSettingsRequest = /** @class */ (function (_super) {
    __extends(LoggingUpdateCmekSettingsRequest, _super);
    function LoggingUpdateCmekSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingUpdateCmekSettingsPathParams)
    ], LoggingUpdateCmekSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingUpdateCmekSettingsQueryParams)
    ], LoggingUpdateCmekSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CmekSettings)
    ], LoggingUpdateCmekSettingsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingUpdateCmekSettingsSecurity)
    ], LoggingUpdateCmekSettingsRequest.prototype, "security", void 0);
    return LoggingUpdateCmekSettingsRequest;
}(SpeakeasyBase));
export { LoggingUpdateCmekSettingsRequest };
var LoggingUpdateCmekSettingsResponse = /** @class */ (function (_super) {
    __extends(LoggingUpdateCmekSettingsResponse, _super);
    function LoggingUpdateCmekSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CmekSettings)
    ], LoggingUpdateCmekSettingsResponse.prototype, "cmekSettings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingUpdateCmekSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingUpdateCmekSettingsResponse.prototype, "statusCode", void 0);
    return LoggingUpdateCmekSettingsResponse;
}(SpeakeasyBase));
export { LoggingUpdateCmekSettingsResponse };
