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
var IdentitytoolkitRelyingpartyResetPasswordQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyResetPasswordQueryParams, _super);
    function IdentitytoolkitRelyingpartyResetPasswordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyResetPasswordQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyResetPasswordQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyResetPasswordQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyResetPasswordQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyResetPasswordQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyResetPasswordQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyResetPasswordQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyResetPasswordQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyResetPasswordQueryParams };
var IdentitytoolkitRelyingpartyResetPasswordSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyResetPasswordSecurity, _super);
    function IdentitytoolkitRelyingpartyResetPasswordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyResetPasswordSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyResetPasswordSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyResetPasswordSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyResetPasswordSecurity };
var IdentitytoolkitRelyingpartyResetPasswordRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyResetPasswordRequest, _super);
    function IdentitytoolkitRelyingpartyResetPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyResetPasswordQueryParams)
    ], IdentitytoolkitRelyingpartyResetPasswordRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyResetPasswordRequest)
    ], IdentitytoolkitRelyingpartyResetPasswordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyResetPasswordSecurity)
    ], IdentitytoolkitRelyingpartyResetPasswordRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyResetPasswordRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyResetPasswordRequest };
var IdentitytoolkitRelyingpartyResetPasswordResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyResetPasswordResponse, _super);
    function IdentitytoolkitRelyingpartyResetPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyResetPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResetPasswordResponse)
    ], IdentitytoolkitRelyingpartyResetPasswordResponse.prototype, "resetPasswordResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyResetPasswordResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitRelyingpartyResetPasswordResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyResetPasswordResponse };
