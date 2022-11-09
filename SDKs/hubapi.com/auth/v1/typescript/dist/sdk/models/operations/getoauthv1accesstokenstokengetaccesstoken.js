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
var GetOauthV1AccessTokensTokenGetAccessTokenPathParams = /** @class */ (function (_super) {
    __extends(GetOauthV1AccessTokensTokenGetAccessTokenPathParams, _super);
    function GetOauthV1AccessTokensTokenGetAccessTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], GetOauthV1AccessTokensTokenGetAccessTokenPathParams.prototype, "token", void 0);
    return GetOauthV1AccessTokensTokenGetAccessTokenPathParams;
}(SpeakeasyBase));
export { GetOauthV1AccessTokensTokenGetAccessTokenPathParams };
var GetOauthV1AccessTokensTokenGetAccessTokenRequest = /** @class */ (function (_super) {
    __extends(GetOauthV1AccessTokensTokenGetAccessTokenRequest, _super);
    function GetOauthV1AccessTokensTokenGetAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOauthV1AccessTokensTokenGetAccessTokenPathParams)
    ], GetOauthV1AccessTokensTokenGetAccessTokenRequest.prototype, "pathParams", void 0);
    return GetOauthV1AccessTokensTokenGetAccessTokenRequest;
}(SpeakeasyBase));
export { GetOauthV1AccessTokensTokenGetAccessTokenRequest };
var GetOauthV1AccessTokensTokenGetAccessTokenResponse = /** @class */ (function (_super) {
    __extends(GetOauthV1AccessTokensTokenGetAccessTokenResponse, _super);
    function GetOauthV1AccessTokensTokenGetAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccessTokenInfoResponse)
    ], GetOauthV1AccessTokensTokenGetAccessTokenResponse.prototype, "accessTokenInfoResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetOauthV1AccessTokensTokenGetAccessTokenResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOauthV1AccessTokensTokenGetAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOauthV1AccessTokensTokenGetAccessTokenResponse.prototype, "statusCode", void 0);
    return GetOauthV1AccessTokensTokenGetAccessTokenResponse;
}(SpeakeasyBase));
export { GetOauthV1AccessTokensTokenGetAccessTokenResponse };
