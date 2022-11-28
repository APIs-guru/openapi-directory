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
var UpdateAccountSettingsSecurity = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsSecurity, _super);
    function UpdateAccountSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateAccountSettingsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateAccountSettingsSecurity.prototype, "oauth", void 0);
    return UpdateAccountSettingsSecurity;
}(SpeakeasyBase));
export { UpdateAccountSettingsSecurity };
var UpdateAccountSettingsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsDefaultApplicationJson, _super);
    function UpdateAccountSettingsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateAccountSettingsDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateAccountSettingsDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateAccountSettingsDefaultApplicationJson };
var UpdateAccountSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsRequest, _super);
    function UpdateAccountSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountSettingsInput)
    ], UpdateAccountSettingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAccountSettingsSecurity)
    ], UpdateAccountSettingsRequest.prototype, "security", void 0);
    return UpdateAccountSettingsRequest;
}(SpeakeasyBase));
export { UpdateAccountSettingsRequest };
var UpdateAccountSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsResponse, _super);
    function UpdateAccountSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountSettings)
    ], UpdateAccountSettingsResponse.prototype, "accountSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAccountSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAccountSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAccountSettingsDefaultApplicationJson)
    ], UpdateAccountSettingsResponse.prototype, "updateAccountSettingsDefaultApplicationJsonObject", void 0);
    return UpdateAccountSettingsResponse;
}(SpeakeasyBase));
export { UpdateAccountSettingsResponse };
