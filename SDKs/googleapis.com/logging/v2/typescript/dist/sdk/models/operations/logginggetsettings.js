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
var LoggingGetSettingsPathParams = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsPathParams, _super);
    function LoggingGetSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsPathParams.prototype, "name", void 0);
    return LoggingGetSettingsPathParams;
}(SpeakeasyBase));
export { LoggingGetSettingsPathParams };
var LoggingGetSettingsQueryParams = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsQueryParams, _super);
    function LoggingGetSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingGetSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingGetSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingGetSettingsQueryParams;
}(SpeakeasyBase));
export { LoggingGetSettingsQueryParams };
var LoggingGetSettingsSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsSecurityOption1, _super);
    function LoggingGetSettingsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetSettingsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetSettingsSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingGetSettingsSecurityOption1;
}(SpeakeasyBase));
export { LoggingGetSettingsSecurityOption1 };
var LoggingGetSettingsSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsSecurityOption2, _super);
    function LoggingGetSettingsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetSettingsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetSettingsSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingGetSettingsSecurityOption2;
}(SpeakeasyBase));
export { LoggingGetSettingsSecurityOption2 };
var LoggingGetSettingsSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsSecurityOption3, _super);
    function LoggingGetSettingsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetSettingsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetSettingsSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingGetSettingsSecurityOption3;
}(SpeakeasyBase));
export { LoggingGetSettingsSecurityOption3 };
var LoggingGetSettingsSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsSecurityOption4, _super);
    function LoggingGetSettingsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingGetSettingsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingGetSettingsSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingGetSettingsSecurityOption4;
}(SpeakeasyBase));
export { LoggingGetSettingsSecurityOption4 };
var LoggingGetSettingsSecurity = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsSecurity, _super);
    function LoggingGetSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetSettingsSecurityOption1)
    ], LoggingGetSettingsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetSettingsSecurityOption2)
    ], LoggingGetSettingsSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetSettingsSecurityOption3)
    ], LoggingGetSettingsSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingGetSettingsSecurityOption4)
    ], LoggingGetSettingsSecurity.prototype, "option4", void 0);
    return LoggingGetSettingsSecurity;
}(SpeakeasyBase));
export { LoggingGetSettingsSecurity };
var LoggingGetSettingsRequest = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsRequest, _super);
    function LoggingGetSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingGetSettingsPathParams)
    ], LoggingGetSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingGetSettingsQueryParams)
    ], LoggingGetSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingGetSettingsSecurity)
    ], LoggingGetSettingsRequest.prototype, "security", void 0);
    return LoggingGetSettingsRequest;
}(SpeakeasyBase));
export { LoggingGetSettingsRequest };
var LoggingGetSettingsResponse = /** @class */ (function (_super) {
    __extends(LoggingGetSettingsResponse, _super);
    function LoggingGetSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingGetSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Settings)
    ], LoggingGetSettingsResponse.prototype, "settings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingGetSettingsResponse.prototype, "statusCode", void 0);
    return LoggingGetSettingsResponse;
}(SpeakeasyBase));
export { LoggingGetSettingsResponse };
