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
var GetAccountSettingsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountSettingsSecurity, _super);
    function GetAccountSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetAccountSettingsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetAccountSettingsSecurity.prototype, "oauth", void 0);
    return GetAccountSettingsSecurity;
}(SpeakeasyBase));
export { GetAccountSettingsSecurity };
var GetAccountSettingsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetAccountSettingsDefaultApplicationJson, _super);
    function GetAccountSettingsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetAccountSettingsDefaultApplicationJson.prototype, "errors", void 0);
    return GetAccountSettingsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetAccountSettingsDefaultApplicationJson };
var GetAccountSettingsRequest = /** @class */ (function (_super) {
    __extends(GetAccountSettingsRequest, _super);
    function GetAccountSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountSettingsSecurity)
    ], GetAccountSettingsRequest.prototype, "security", void 0);
    return GetAccountSettingsRequest;
}(SpeakeasyBase));
export { GetAccountSettingsRequest };
var GetAccountSettingsResponse = /** @class */ (function (_super) {
    __extends(GetAccountSettingsResponse, _super);
    function GetAccountSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountSettings)
    ], GetAccountSettingsResponse.prototype, "accountSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountSettingsDefaultApplicationJson)
    ], GetAccountSettingsResponse.prototype, "getAccountSettingsDefaultApplicationJsonObject", void 0);
    return GetAccountSettingsResponse;
}(SpeakeasyBase));
export { GetAccountSettingsResponse };
