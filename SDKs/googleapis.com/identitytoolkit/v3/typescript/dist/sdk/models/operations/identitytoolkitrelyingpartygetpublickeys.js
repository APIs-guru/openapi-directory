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
var IdentitytoolkitRelyingpartyGetPublicKeysQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetPublicKeysQueryParams, _super);
    function IdentitytoolkitRelyingpartyGetPublicKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetPublicKeysQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetPublicKeysQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetPublicKeysQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetPublicKeysQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyGetPublicKeysQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetPublicKeysQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetPublicKeysQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyGetPublicKeysQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetPublicKeysQueryParams };
var IdentitytoolkitRelyingpartyGetPublicKeysSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetPublicKeysSecurity, _super);
    function IdentitytoolkitRelyingpartyGetPublicKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyGetPublicKeysSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyGetPublicKeysSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyGetPublicKeysSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetPublicKeysSecurity };
var IdentitytoolkitRelyingpartyGetPublicKeysRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetPublicKeysRequest, _super);
    function IdentitytoolkitRelyingpartyGetPublicKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyGetPublicKeysQueryParams)
    ], IdentitytoolkitRelyingpartyGetPublicKeysRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyGetPublicKeysSecurity)
    ], IdentitytoolkitRelyingpartyGetPublicKeysRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyGetPublicKeysRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetPublicKeysRequest };
var IdentitytoolkitRelyingpartyGetPublicKeysResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetPublicKeysResponse, _super);
    function IdentitytoolkitRelyingpartyGetPublicKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetPublicKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IdentitytoolkitRelyingpartyGetPublicKeysResponse.prototype, "identitytoolkitRelyingpartyGetPublicKeysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyGetPublicKeysResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitRelyingpartyGetPublicKeysResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetPublicKeysResponse };
