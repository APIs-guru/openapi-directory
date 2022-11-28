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
var GetProfileLoginPathParams = /** @class */ (function (_super) {
    __extends(GetProfileLoginPathParams, _super);
    function GetProfileLoginPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=loginId" }),
        __metadata("design:type", Number)
    ], GetProfileLoginPathParams.prototype, "loginId", void 0);
    return GetProfileLoginPathParams;
}(SpeakeasyBase));
export { GetProfileLoginPathParams };
var GetProfileLoginSecurity = /** @class */ (function (_super) {
    __extends(GetProfileLoginSecurity, _super);
    function GetProfileLoginSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetProfileLoginSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetProfileLoginSecurity.prototype, "oauth", void 0);
    return GetProfileLoginSecurity;
}(SpeakeasyBase));
export { GetProfileLoginSecurity };
var GetProfileLoginDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetProfileLoginDefaultApplicationJson, _super);
    function GetProfileLoginDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetProfileLoginDefaultApplicationJson.prototype, "errors", void 0);
    return GetProfileLoginDefaultApplicationJson;
}(SpeakeasyBase));
export { GetProfileLoginDefaultApplicationJson };
var GetProfileLoginRequest = /** @class */ (function (_super) {
    __extends(GetProfileLoginRequest, _super);
    function GetProfileLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileLoginPathParams)
    ], GetProfileLoginRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileLoginSecurity)
    ], GetProfileLoginRequest.prototype, "security", void 0);
    return GetProfileLoginRequest;
}(SpeakeasyBase));
export { GetProfileLoginRequest };
var GetProfileLoginResponse = /** @class */ (function (_super) {
    __extends(GetProfileLoginResponse, _super);
    function GetProfileLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProfileLoginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Login)
    ], GetProfileLoginResponse.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProfileLoginResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileLoginDefaultApplicationJson)
    ], GetProfileLoginResponse.prototype, "getProfileLoginDefaultApplicationJsonObject", void 0);
    return GetProfileLoginResponse;
}(SpeakeasyBase));
export { GetProfileLoginResponse };
