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
var IapGetIapSettingsPathParams = /** @class */ (function (_super) {
    __extends(IapGetIapSettingsPathParams, _super);
    function IapGetIapSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsPathParams.prototype, "name", void 0);
    return IapGetIapSettingsPathParams;
}(SpeakeasyBase));
export { IapGetIapSettingsPathParams };
var IapGetIapSettingsQueryParams = /** @class */ (function (_super) {
    __extends(IapGetIapSettingsQueryParams, _super);
    function IapGetIapSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IapGetIapSettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IapGetIapSettingsQueryParams.prototype, "uploadProtocol", void 0);
    return IapGetIapSettingsQueryParams;
}(SpeakeasyBase));
export { IapGetIapSettingsQueryParams };
var IapGetIapSettingsSecurity = /** @class */ (function (_super) {
    __extends(IapGetIapSettingsSecurity, _super);
    function IapGetIapSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IapGetIapSettingsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IapGetIapSettingsSecurity.prototype, "oauth2c", void 0);
    return IapGetIapSettingsSecurity;
}(SpeakeasyBase));
export { IapGetIapSettingsSecurity };
var IapGetIapSettingsRequest = /** @class */ (function (_super) {
    __extends(IapGetIapSettingsRequest, _super);
    function IapGetIapSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IapGetIapSettingsPathParams)
    ], IapGetIapSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IapGetIapSettingsQueryParams)
    ], IapGetIapSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IapGetIapSettingsSecurity)
    ], IapGetIapSettingsRequest.prototype, "security", void 0);
    return IapGetIapSettingsRequest;
}(SpeakeasyBase));
export { IapGetIapSettingsRequest };
var IapGetIapSettingsResponse = /** @class */ (function (_super) {
    __extends(IapGetIapSettingsResponse, _super);
    function IapGetIapSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IapGetIapSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.IapSettings)
    ], IapGetIapSettingsResponse.prototype, "iapSettings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IapGetIapSettingsResponse.prototype, "statusCode", void 0);
    return IapGetIapSettingsResponse;
}(SpeakeasyBase));
export { IapGetIapSettingsResponse };
