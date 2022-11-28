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
var IdentitytoolkitRelyingpartyUploadAccountQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyUploadAccountQueryParams, _super);
    function IdentitytoolkitRelyingpartyUploadAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyUploadAccountQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyUploadAccountQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyUploadAccountQueryParams };
var IdentitytoolkitRelyingpartyUploadAccountSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyUploadAccountSecurityOption1, _super);
    function IdentitytoolkitRelyingpartyUploadAccountSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyUploadAccountSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyUploadAccountSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyUploadAccountSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyUploadAccountSecurityOption1 };
var IdentitytoolkitRelyingpartyUploadAccountSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyUploadAccountSecurityOption2, _super);
    function IdentitytoolkitRelyingpartyUploadAccountSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyUploadAccountSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyUploadAccountSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyUploadAccountSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyUploadAccountSecurityOption2 };
var IdentitytoolkitRelyingpartyUploadAccountSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyUploadAccountSecurity, _super);
    function IdentitytoolkitRelyingpartyUploadAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitRelyingpartyUploadAccountSecurityOption1)
    ], IdentitytoolkitRelyingpartyUploadAccountSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitRelyingpartyUploadAccountSecurityOption2)
    ], IdentitytoolkitRelyingpartyUploadAccountSecurity.prototype, "option2", void 0);
    return IdentitytoolkitRelyingpartyUploadAccountSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyUploadAccountSecurity };
var IdentitytoolkitRelyingpartyUploadAccountRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyUploadAccountRequest, _super);
    function IdentitytoolkitRelyingpartyUploadAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyUploadAccountQueryParams)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyUploadAccountRequest)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyUploadAccountSecurity)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyUploadAccountRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyUploadAccountRequest };
var IdentitytoolkitRelyingpartyUploadAccountResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyUploadAccountResponse, _super);
    function IdentitytoolkitRelyingpartyUploadAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyUploadAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UploadAccountResponse)
    ], IdentitytoolkitRelyingpartyUploadAccountResponse.prototype, "uploadAccountResponse", void 0);
    return IdentitytoolkitRelyingpartyUploadAccountResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyUploadAccountResponse };
