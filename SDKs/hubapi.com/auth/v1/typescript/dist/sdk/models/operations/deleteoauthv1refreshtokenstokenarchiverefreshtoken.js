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
var DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams = /** @class */ (function (_super) {
    __extends(DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams, _super);
    function DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams.prototype, "token", void 0);
    return DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams;
}(SpeakeasyBase));
export { DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams };
var DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest = /** @class */ (function (_super) {
    __extends(DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest, _super);
    function DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams)
    ], DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest.prototype, "pathParams", void 0);
    return DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest;
}(SpeakeasyBase));
export { DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest };
var DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse = /** @class */ (function (_super) {
    __extends(DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse, _super);
    function DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse.prototype, "statusCode", void 0);
    return DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse;
}(SpeakeasyBase));
export { DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse };
