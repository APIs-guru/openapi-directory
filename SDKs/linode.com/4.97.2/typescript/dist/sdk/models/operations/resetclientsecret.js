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
var ResetClientSecretPathParams = /** @class */ (function (_super) {
    __extends(ResetClientSecretPathParams, _super);
    function ResetClientSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], ResetClientSecretPathParams.prototype, "clientId", void 0);
    return ResetClientSecretPathParams;
}(SpeakeasyBase));
export { ResetClientSecretPathParams };
var ResetClientSecretSecurity = /** @class */ (function (_super) {
    __extends(ResetClientSecretSecurity, _super);
    function ResetClientSecretSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ResetClientSecretSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ResetClientSecretSecurity.prototype, "oauth", void 0);
    return ResetClientSecretSecurity;
}(SpeakeasyBase));
export { ResetClientSecretSecurity };
var ResetClientSecretDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ResetClientSecretDefaultApplicationJson, _super);
    function ResetClientSecretDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ResetClientSecretDefaultApplicationJson.prototype, "errors", void 0);
    return ResetClientSecretDefaultApplicationJson;
}(SpeakeasyBase));
export { ResetClientSecretDefaultApplicationJson };
var ResetClientSecretRequest = /** @class */ (function (_super) {
    __extends(ResetClientSecretRequest, _super);
    function ResetClientSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetClientSecretPathParams)
    ], ResetClientSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetClientSecretSecurity)
    ], ResetClientSecretRequest.prototype, "security", void 0);
    return ResetClientSecretRequest;
}(SpeakeasyBase));
export { ResetClientSecretRequest };
var ResetClientSecretResponse = /** @class */ (function (_super) {
    __extends(ResetClientSecretResponse, _super);
    function ResetClientSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResetClientSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OAuthClient)
    ], ResetClientSecretResponse.prototype, "oAuthClient", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResetClientSecretResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetClientSecretDefaultApplicationJson)
    ], ResetClientSecretResponse.prototype, "resetClientSecretDefaultApplicationJsonObject", void 0);
    return ResetClientSecretResponse;
}(SpeakeasyBase));
export { ResetClientSecretResponse };
