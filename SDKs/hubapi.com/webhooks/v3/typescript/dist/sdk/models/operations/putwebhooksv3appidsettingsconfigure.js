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
var PutWebhooksV3AppIdSettingsConfigurePathParams = /** @class */ (function (_super) {
    __extends(PutWebhooksV3AppIdSettingsConfigurePathParams, _super);
    function PutWebhooksV3AppIdSettingsConfigurePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PutWebhooksV3AppIdSettingsConfigurePathParams.prototype, "appId", void 0);
    return PutWebhooksV3AppIdSettingsConfigurePathParams;
}(SpeakeasyBase));
export { PutWebhooksV3AppIdSettingsConfigurePathParams };
var PutWebhooksV3AppIdSettingsConfigureSecurity = /** @class */ (function (_super) {
    __extends(PutWebhooksV3AppIdSettingsConfigureSecurity, _super);
    function PutWebhooksV3AppIdSettingsConfigureSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PutWebhooksV3AppIdSettingsConfigureSecurity.prototype, "developerHapikey", void 0);
    return PutWebhooksV3AppIdSettingsConfigureSecurity;
}(SpeakeasyBase));
export { PutWebhooksV3AppIdSettingsConfigureSecurity };
var PutWebhooksV3AppIdSettingsConfigureRequest = /** @class */ (function (_super) {
    __extends(PutWebhooksV3AppIdSettingsConfigureRequest, _super);
    function PutWebhooksV3AppIdSettingsConfigureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutWebhooksV3AppIdSettingsConfigurePathParams)
    ], PutWebhooksV3AppIdSettingsConfigureRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SettingsChangeRequest)
    ], PutWebhooksV3AppIdSettingsConfigureRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutWebhooksV3AppIdSettingsConfigureSecurity)
    ], PutWebhooksV3AppIdSettingsConfigureRequest.prototype, "security", void 0);
    return PutWebhooksV3AppIdSettingsConfigureRequest;
}(SpeakeasyBase));
export { PutWebhooksV3AppIdSettingsConfigureRequest };
var PutWebhooksV3AppIdSettingsConfigureResponse = /** @class */ (function (_super) {
    __extends(PutWebhooksV3AppIdSettingsConfigureResponse, _super);
    function PutWebhooksV3AppIdSettingsConfigureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PutWebhooksV3AppIdSettingsConfigureResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutWebhooksV3AppIdSettingsConfigureResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingsResponse)
    ], PutWebhooksV3AppIdSettingsConfigureResponse.prototype, "settingsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutWebhooksV3AppIdSettingsConfigureResponse.prototype, "statusCode", void 0);
    return PutWebhooksV3AppIdSettingsConfigureResponse;
}(SpeakeasyBase));
export { PutWebhooksV3AppIdSettingsConfigureResponse };
