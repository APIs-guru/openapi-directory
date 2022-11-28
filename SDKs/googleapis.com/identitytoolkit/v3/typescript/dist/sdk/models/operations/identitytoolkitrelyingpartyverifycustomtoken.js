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
var IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams, _super);
    function IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams };
var IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity, _super);
    function IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity };
var IdentitytoolkitRelyingpartyVerifyCustomTokenRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyCustomTokenRequest, _super);
    function IdentitytoolkitRelyingpartyVerifyCustomTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyCustomTokenRequest };
var IdentitytoolkitRelyingpartyVerifyCustomTokenResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyCustomTokenResponse, _super);
    function IdentitytoolkitRelyingpartyVerifyCustomTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyCustomTokenResponse)
    ], IdentitytoolkitRelyingpartyVerifyCustomTokenResponse.prototype, "verifyCustomTokenResponse", void 0);
    return IdentitytoolkitRelyingpartyVerifyCustomTokenResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyCustomTokenResponse };
