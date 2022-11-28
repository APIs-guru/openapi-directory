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
var IdentitytoolkitRelyingpartyDeleteAccountQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDeleteAccountQueryParams, _super);
    function IdentitytoolkitRelyingpartyDeleteAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDeleteAccountQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDeleteAccountQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDeleteAccountQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDeleteAccountQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyDeleteAccountQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDeleteAccountQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDeleteAccountQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyDeleteAccountQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDeleteAccountQueryParams };
var IdentitytoolkitRelyingpartyDeleteAccountSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDeleteAccountSecurity, _super);
    function IdentitytoolkitRelyingpartyDeleteAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyDeleteAccountSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyDeleteAccountSecurity.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyDeleteAccountSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDeleteAccountSecurity };
var IdentitytoolkitRelyingpartyDeleteAccountRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDeleteAccountRequest, _super);
    function IdentitytoolkitRelyingpartyDeleteAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyDeleteAccountQueryParams)
    ], IdentitytoolkitRelyingpartyDeleteAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyDeleteAccountRequest)
    ], IdentitytoolkitRelyingpartyDeleteAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyDeleteAccountSecurity)
    ], IdentitytoolkitRelyingpartyDeleteAccountRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyDeleteAccountRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDeleteAccountRequest };
var IdentitytoolkitRelyingpartyDeleteAccountResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDeleteAccountResponse, _super);
    function IdentitytoolkitRelyingpartyDeleteAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDeleteAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteAccountResponse)
    ], IdentitytoolkitRelyingpartyDeleteAccountResponse.prototype, "deleteAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyDeleteAccountResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitRelyingpartyDeleteAccountResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDeleteAccountResponse };
