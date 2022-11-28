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
var IdentitytoolkitRelyingpartyDownloadAccountQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDownloadAccountQueryParams, _super);
    function IdentitytoolkitRelyingpartyDownloadAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDownloadAccountQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDownloadAccountQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDownloadAccountQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDownloadAccountQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyDownloadAccountQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDownloadAccountQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDownloadAccountQueryParams.prototype, "userIp", void 0);
    return IdentitytoolkitRelyingpartyDownloadAccountQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDownloadAccountQueryParams };
var IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1, _super);
    function IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1 };
var IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2, _super);
    function IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2 };
var IdentitytoolkitRelyingpartyDownloadAccountSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDownloadAccountSecurity, _super);
    function IdentitytoolkitRelyingpartyDownloadAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1)
    ], IdentitytoolkitRelyingpartyDownloadAccountSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2)
    ], IdentitytoolkitRelyingpartyDownloadAccountSecurity.prototype, "option2", void 0);
    return IdentitytoolkitRelyingpartyDownloadAccountSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDownloadAccountSecurity };
var IdentitytoolkitRelyingpartyDownloadAccountRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDownloadAccountRequest, _super);
    function IdentitytoolkitRelyingpartyDownloadAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyDownloadAccountQueryParams)
    ], IdentitytoolkitRelyingpartyDownloadAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IdentitytoolkitRelyingpartyDownloadAccountRequest)
    ], IdentitytoolkitRelyingpartyDownloadAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitRelyingpartyDownloadAccountSecurity)
    ], IdentitytoolkitRelyingpartyDownloadAccountRequest.prototype, "security", void 0);
    return IdentitytoolkitRelyingpartyDownloadAccountRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDownloadAccountRequest };
var IdentitytoolkitRelyingpartyDownloadAccountResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyDownloadAccountResponse, _super);
    function IdentitytoolkitRelyingpartyDownloadAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyDownloadAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DownloadAccountResponse)
    ], IdentitytoolkitRelyingpartyDownloadAccountResponse.prototype, "downloadAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyDownloadAccountResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitRelyingpartyDownloadAccountResponse;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyDownloadAccountResponse };
