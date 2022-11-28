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
var IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams, _super);
    function IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams };
var IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity, _super);
    function IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity };
var IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest, _super);
    function IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Relyingparty)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest };
var IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse, _super);
    function IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetOobConfirmationCodeResponse)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse.prototype, "getOobConfirmationCodeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse };
