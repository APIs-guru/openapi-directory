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
var GetAccountLoginPathParams = /** @class */ (function (_super) {
    __extends(GetAccountLoginPathParams, _super);
    function GetAccountLoginPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=loginId" }),
        __metadata("design:type", Number)
    ], GetAccountLoginPathParams.prototype, "loginId", void 0);
    return GetAccountLoginPathParams;
}(SpeakeasyBase));
export { GetAccountLoginPathParams };
var GetAccountLoginSecurity = /** @class */ (function (_super) {
    __extends(GetAccountLoginSecurity, _super);
    function GetAccountLoginSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetAccountLoginSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetAccountLoginSecurity.prototype, "oauth", void 0);
    return GetAccountLoginSecurity;
}(SpeakeasyBase));
export { GetAccountLoginSecurity };
var GetAccountLoginDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetAccountLoginDefaultApplicationJson, _super);
    function GetAccountLoginDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetAccountLoginDefaultApplicationJson.prototype, "errors", void 0);
    return GetAccountLoginDefaultApplicationJson;
}(SpeakeasyBase));
export { GetAccountLoginDefaultApplicationJson };
var GetAccountLoginRequest = /** @class */ (function (_super) {
    __extends(GetAccountLoginRequest, _super);
    function GetAccountLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountLoginPathParams)
    ], GetAccountLoginRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountLoginSecurity)
    ], GetAccountLoginRequest.prototype, "security", void 0);
    return GetAccountLoginRequest;
}(SpeakeasyBase));
export { GetAccountLoginRequest };
var GetAccountLoginResponse = /** @class */ (function (_super) {
    __extends(GetAccountLoginResponse, _super);
    function GetAccountLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountLoginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Login)
    ], GetAccountLoginResponse.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountLoginResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountLoginDefaultApplicationJson)
    ], GetAccountLoginResponse.prototype, "getAccountLoginDefaultApplicationJsonObject", void 0);
    return GetAccountLoginResponse;
}(SpeakeasyBase));
export { GetAccountLoginResponse };
