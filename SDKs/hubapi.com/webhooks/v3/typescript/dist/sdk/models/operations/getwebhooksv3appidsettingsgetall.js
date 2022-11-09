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
var GetWebhooksV3AppIdSettingsGetAllPathParams = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSettingsGetAllPathParams, _super);
    function GetWebhooksV3AppIdSettingsGetAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetWebhooksV3AppIdSettingsGetAllPathParams.prototype, "appId", void 0);
    return GetWebhooksV3AppIdSettingsGetAllPathParams;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSettingsGetAllPathParams };
var GetWebhooksV3AppIdSettingsGetAllSecurity = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSettingsGetAllSecurity, _super);
    function GetWebhooksV3AppIdSettingsGetAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetWebhooksV3AppIdSettingsGetAllSecurity.prototype, "developerHapikey", void 0);
    return GetWebhooksV3AppIdSettingsGetAllSecurity;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSettingsGetAllSecurity };
var GetWebhooksV3AppIdSettingsGetAllRequest = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSettingsGetAllRequest, _super);
    function GetWebhooksV3AppIdSettingsGetAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWebhooksV3AppIdSettingsGetAllPathParams)
    ], GetWebhooksV3AppIdSettingsGetAllRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWebhooksV3AppIdSettingsGetAllSecurity)
    ], GetWebhooksV3AppIdSettingsGetAllRequest.prototype, "security", void 0);
    return GetWebhooksV3AppIdSettingsGetAllRequest;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSettingsGetAllRequest };
var GetWebhooksV3AppIdSettingsGetAllResponse = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSettingsGetAllResponse, _super);
    function GetWebhooksV3AppIdSettingsGetAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetWebhooksV3AppIdSettingsGetAllResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWebhooksV3AppIdSettingsGetAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingsResponse)
    ], GetWebhooksV3AppIdSettingsGetAllResponse.prototype, "settingsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWebhooksV3AppIdSettingsGetAllResponse.prototype, "statusCode", void 0);
    return GetWebhooksV3AppIdSettingsGetAllResponse;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSettingsGetAllResponse };
