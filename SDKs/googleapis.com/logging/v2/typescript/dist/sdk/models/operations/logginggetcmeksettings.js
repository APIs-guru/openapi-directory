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
var LoggingGetCmekSettingsPathParams = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsPathParams, _super);
    function LoggingGetCmekSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsPathParams.prototype, "name", void 0);
    return LoggingGetCmekSettingsPathParams;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsPathParams };
var LoggingGetCmekSettingsQueryParams = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsQueryParams, _super);
    function LoggingGetCmekSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingGetCmekSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingGetCmekSettingsQueryParams;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsQueryParams };
var LoggingGetCmekSettingsSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsSecurityOption1, _super);
    function LoggingGetCmekSettingsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetCmekSettingsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetCmekSettingsSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingGetCmekSettingsSecurityOption1;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsSecurityOption1 };
var LoggingGetCmekSettingsSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsSecurityOption2, _super);
    function LoggingGetCmekSettingsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetCmekSettingsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetCmekSettingsSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingGetCmekSettingsSecurityOption2;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsSecurityOption2 };
var LoggingGetCmekSettingsSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsSecurityOption3, _super);
    function LoggingGetCmekSettingsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetCmekSettingsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetCmekSettingsSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingGetCmekSettingsSecurityOption3;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsSecurityOption3 };
var LoggingGetCmekSettingsSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsSecurityOption4, _super);
    function LoggingGetCmekSettingsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetCmekSettingsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetCmekSettingsSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingGetCmekSettingsSecurityOption4;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsSecurityOption4 };
var LoggingGetCmekSettingsSecurity = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsSecurity, _super);
    function LoggingGetCmekSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetCmekSettingsSecurityOption1)
    ], LoggingGetCmekSettingsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetCmekSettingsSecurityOption2)
    ], LoggingGetCmekSettingsSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetCmekSettingsSecurityOption3)
    ], LoggingGetCmekSettingsSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetCmekSettingsSecurityOption4)
    ], LoggingGetCmekSettingsSecurity.prototype, "option4", void 0);
    return LoggingGetCmekSettingsSecurity;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsSecurity };
var LoggingGetCmekSettingsRequest = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsRequest, _super);
    function LoggingGetCmekSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingGetCmekSettingsPathParams)
    ], LoggingGetCmekSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingGetCmekSettingsQueryParams)
    ], LoggingGetCmekSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingGetCmekSettingsSecurity)
    ], LoggingGetCmekSettingsRequest.prototype, "security", void 0);
    return LoggingGetCmekSettingsRequest;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsRequest };
var LoggingGetCmekSettingsResponse = /** @class */ (function (_super) {
    __extends(LoggingGetCmekSettingsResponse, _super);
    function LoggingGetCmekSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CmekSettings)
    ], LoggingGetCmekSettingsResponse.prototype, "cmekSettings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingGetCmekSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingGetCmekSettingsResponse.prototype, "statusCode", void 0);
    return LoggingGetCmekSettingsResponse;
}(SpeakeasyBase));
export { LoggingGetCmekSettingsResponse };
