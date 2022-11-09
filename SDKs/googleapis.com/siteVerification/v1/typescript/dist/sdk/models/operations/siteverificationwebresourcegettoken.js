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
var SiteVerificationWebResourceGetTokenQueryParams = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetTokenQueryParams, _super);
    function SiteVerificationWebResourceGetTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetTokenQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SiteVerificationWebResourceGetTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetTokenQueryParams.prototype, "userIp", void 0);
    return SiteVerificationWebResourceGetTokenQueryParams;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetTokenQueryParams };
var SiteVerificationWebResourceGetTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetTokenSecurityOption1, _super);
    function SiteVerificationWebResourceGetTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SiteVerificationWebResourceGetTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SiteVerificationWebResourceGetTokenSecurityOption1.prototype, "oauth2c", void 0);
    return SiteVerificationWebResourceGetTokenSecurityOption1;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetTokenSecurityOption1 };
var SiteVerificationWebResourceGetTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetTokenSecurityOption2, _super);
    function SiteVerificationWebResourceGetTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SiteVerificationWebResourceGetTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SiteVerificationWebResourceGetTokenSecurityOption2.prototype, "oauth2c", void 0);
    return SiteVerificationWebResourceGetTokenSecurityOption2;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetTokenSecurityOption2 };
var SiteVerificationWebResourceGetTokenSecurity = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetTokenSecurity, _super);
    function SiteVerificationWebResourceGetTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SiteVerificationWebResourceGetTokenSecurityOption1)
    ], SiteVerificationWebResourceGetTokenSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SiteVerificationWebResourceGetTokenSecurityOption2)
    ], SiteVerificationWebResourceGetTokenSecurity.prototype, "option2", void 0);
    return SiteVerificationWebResourceGetTokenSecurity;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetTokenSecurity };
var SiteVerificationWebResourceGetTokenRequest = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetTokenRequest, _super);
    function SiteVerificationWebResourceGetTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SiteVerificationWebResourceGetTokenQueryParams)
    ], SiteVerificationWebResourceGetTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SiteVerificationWebResourceGettokenRequest)
    ], SiteVerificationWebResourceGetTokenRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SiteVerificationWebResourceGetTokenSecurity)
    ], SiteVerificationWebResourceGetTokenRequest.prototype, "security", void 0);
    return SiteVerificationWebResourceGetTokenRequest;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetTokenRequest };
var SiteVerificationWebResourceGetTokenResponse = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetTokenResponse, _super);
    function SiteVerificationWebResourceGetTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SiteVerificationWebResourceGettokenResponse)
    ], SiteVerificationWebResourceGetTokenResponse.prototype, "siteVerificationWebResourceGettokenResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SiteVerificationWebResourceGetTokenResponse.prototype, "statusCode", void 0);
    return SiteVerificationWebResourceGetTokenResponse;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetTokenResponse };
