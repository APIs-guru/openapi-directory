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
var IdentitytoolkitRelyingpartyVerifyPasswordQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyPasswordQueryParams, _super);
    function IdentitytoolkitRelyingpartyVerifyPasswordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyVerifyPasswordQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyVerifyPasswordQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyPasswordQueryParams };
var IdentitytoolkitRelyingpartyVerifyPasswordSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyPasswordSecurity, _super);
    function IdentitytoolkitRelyingpartyVerifyPasswordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyVerifyPasswordSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyVerifyPasswordSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyVerifyPasswordSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyPasswordSecurity };
var IdentitytoolkitRelyingpartyVerifyPasswordRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyPasswordRequest, _super);
    function IdentitytoolkitRelyingpartyVerifyPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyVerifyPasswordQueryParams)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyVerifyPasswordSecurity)
    ], IdentitytoolkitRelyingpartyVerifyPasswordRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyVerifyPasswordRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyPasswordRequest };
var IdentitytoolkitRelyingpartyVerifyPasswordResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyVerifyPasswordResponse, _super);
    function IdentitytoolkitRelyingpartyVerifyPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyVerifyPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyVerifyPasswordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyPasswordResponse)
    ], IdentitytoolkitRelyingpartyVerifyPasswordResponse.prototype, "verifyPasswordResponse", void 0);
    return IdentitytoolkitRelyingpartyVerifyPasswordResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyVerifyPasswordResponse };
