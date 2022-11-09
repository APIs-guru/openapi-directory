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
var LoggingUpdateSettingsPathParams = /** @class */ (function (_super) {
    __extends(LoggingUpdateSettingsPathParams, _super);
    function LoggingUpdateSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsPathParams.prototype, "name", void 0);
    return LoggingUpdateSettingsPathParams;
}(SpeakeasyBase));
export { LoggingUpdateSettingsPathParams };
var LoggingUpdateSettingsQueryParams = /** @class */ (function (_super) {
    __extends(LoggingUpdateSettingsQueryParams, _super);
    function LoggingUpdateSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingUpdateSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingUpdateSettingsQueryParams;
}(SpeakeasyBase));
export { LoggingUpdateSettingsQueryParams };
var LoggingUpdateSettingsSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingUpdateSettingsSecurityOption1, _super);
    function LoggingUpdateSettingsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingUpdateSettingsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingUpdateSettingsSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingUpdateSettingsSecurityOption1;
}(SpeakeasyBase));
export { LoggingUpdateSettingsSecurityOption1 };
var LoggingUpdateSettingsSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingUpdateSettingsSecurityOption2, _super);
    function LoggingUpdateSettingsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingUpdateSettingsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingUpdateSettingsSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingUpdateSettingsSecurityOption2;
}(SpeakeasyBase));
export { LoggingUpdateSettingsSecurityOption2 };
var LoggingUpdateSettingsSecurity = /** @class */ (function (_super) {
    __extends(LoggingUpdateSettingsSecurity, _super);
    function LoggingUpdateSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingUpdateSettingsSecurityOption1)
    ], LoggingUpdateSettingsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingUpdateSettingsSecurityOption2)
    ], LoggingUpdateSettingsSecurity.prototype, "option2", void 0);
    return LoggingUpdateSettingsSecurity;
}(SpeakeasyBase));
export { LoggingUpdateSettingsSecurity };
var LoggingUpdateSettingsRequest = /** @class */ (function (_super) {
    __extends(LoggingUpdateSettingsRequest, _super);
    function LoggingUpdateSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingUpdateSettingsPathParams)
    ], LoggingUpdateSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingUpdateSettingsQueryParams)
    ], LoggingUpdateSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Settings)
    ], LoggingUpdateSettingsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingUpdateSettingsSecurity)
    ], LoggingUpdateSettingsRequest.prototype, "security", void 0);
    return LoggingUpdateSettingsRequest;
}(SpeakeasyBase));
export { LoggingUpdateSettingsRequest };
var LoggingUpdateSettingsResponse = /** @class */ (function (_super) {
    __extends(LoggingUpdateSettingsResponse, _super);
    function LoggingUpdateSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingUpdateSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Settings)
    ], LoggingUpdateSettingsResponse.prototype, "settings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingUpdateSettingsResponse.prototype, "statusCode", void 0);
    return LoggingUpdateSettingsResponse;
}(SpeakeasyBase));
export { LoggingUpdateSettingsResponse };
