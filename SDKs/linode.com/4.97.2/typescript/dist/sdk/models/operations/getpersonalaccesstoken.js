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
var GetPersonalAccessTokenPathParams = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokenPathParams, _super);
    function GetPersonalAccessTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenId" }),
        __metadata("design:type", Number)
    ], GetPersonalAccessTokenPathParams.prototype, "tokenId", void 0);
    return GetPersonalAccessTokenPathParams;
}(SpeakeasyBase));
export { GetPersonalAccessTokenPathParams };
var GetPersonalAccessTokenSecurity = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokenSecurity, _super);
    function GetPersonalAccessTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetPersonalAccessTokenSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetPersonalAccessTokenSecurity.prototype, "oauth", void 0);
    return GetPersonalAccessTokenSecurity;
}(SpeakeasyBase));
export { GetPersonalAccessTokenSecurity };
var GetPersonalAccessTokenDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokenDefaultApplicationJson, _super);
    function GetPersonalAccessTokenDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetPersonalAccessTokenDefaultApplicationJson.prototype, "errors", void 0);
    return GetPersonalAccessTokenDefaultApplicationJson;
}(SpeakeasyBase));
export { GetPersonalAccessTokenDefaultApplicationJson };
var GetPersonalAccessTokenRequest = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokenRequest, _super);
    function GetPersonalAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalAccessTokenPathParams)
    ], GetPersonalAccessTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalAccessTokenSecurity)
    ], GetPersonalAccessTokenRequest.prototype, "security", void 0);
    return GetPersonalAccessTokenRequest;
}(SpeakeasyBase));
export { GetPersonalAccessTokenRequest };
var GetPersonalAccessTokenResponse = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokenResponse, _super);
    function GetPersonalAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPersonalAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PersonalAccessToken)
    ], GetPersonalAccessTokenResponse.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPersonalAccessTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalAccessTokenDefaultApplicationJson)
    ], GetPersonalAccessTokenResponse.prototype, "getPersonalAccessTokenDefaultApplicationJsonObject", void 0);
    return GetPersonalAccessTokenResponse;
}(SpeakeasyBase));
export { GetPersonalAccessTokenResponse };
