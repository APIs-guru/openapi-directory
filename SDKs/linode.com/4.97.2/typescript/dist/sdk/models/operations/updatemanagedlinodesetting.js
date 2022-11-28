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
var UpdateManagedLinodeSettingPathParams = /** @class */ (function (_super) {
    __extends(UpdateManagedLinodeSettingPathParams, _super);
    function UpdateManagedLinodeSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], UpdateManagedLinodeSettingPathParams.prototype, "linodeId", void 0);
    return UpdateManagedLinodeSettingPathParams;
}(SpeakeasyBase));
export { UpdateManagedLinodeSettingPathParams };
var UpdateManagedLinodeSettingSecurity = /** @class */ (function (_super) {
    __extends(UpdateManagedLinodeSettingSecurity, _super);
    function UpdateManagedLinodeSettingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateManagedLinodeSettingSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateManagedLinodeSettingSecurity.prototype, "oauth", void 0);
    return UpdateManagedLinodeSettingSecurity;
}(SpeakeasyBase));
export { UpdateManagedLinodeSettingSecurity };
var UpdateManagedLinodeSettingDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateManagedLinodeSettingDefaultApplicationJson, _super);
    function UpdateManagedLinodeSettingDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateManagedLinodeSettingDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateManagedLinodeSettingDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateManagedLinodeSettingDefaultApplicationJson };
var UpdateManagedLinodeSettingRequest = /** @class */ (function (_super) {
    __extends(UpdateManagedLinodeSettingRequest, _super);
    function UpdateManagedLinodeSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedLinodeSettingPathParams)
    ], UpdateManagedLinodeSettingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagedLinodeSettingsInput)
    ], UpdateManagedLinodeSettingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedLinodeSettingSecurity)
    ], UpdateManagedLinodeSettingRequest.prototype, "security", void 0);
    return UpdateManagedLinodeSettingRequest;
}(SpeakeasyBase));
export { UpdateManagedLinodeSettingRequest };
var UpdateManagedLinodeSettingResponse = /** @class */ (function (_super) {
    __extends(UpdateManagedLinodeSettingResponse, _super);
    function UpdateManagedLinodeSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateManagedLinodeSettingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedLinodeSettings)
    ], UpdateManagedLinodeSettingResponse.prototype, "managedLinodeSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateManagedLinodeSettingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedLinodeSettingDefaultApplicationJson)
    ], UpdateManagedLinodeSettingResponse.prototype, "updateManagedLinodeSettingDefaultApplicationJsonObject", void 0);
    return UpdateManagedLinodeSettingResponse;
}(SpeakeasyBase));
export { UpdateManagedLinodeSettingResponse };
