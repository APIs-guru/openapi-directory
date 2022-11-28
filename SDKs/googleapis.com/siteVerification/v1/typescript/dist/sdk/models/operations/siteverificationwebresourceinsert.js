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
var SiteVerificationWebResourceInsertQueryParams = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceInsertQueryParams, _super);
    function SiteVerificationWebResourceInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verificationMethod" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertQueryParams.prototype, "verificationMethod", void 0);
    return SiteVerificationWebResourceInsertQueryParams;
}(SpeakeasyBase));
export { SiteVerificationWebResourceInsertQueryParams };
var SiteVerificationWebResourceInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceInsertSecurityOption1, _super);
    function SiteVerificationWebResourceInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SiteVerificationWebResourceInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SiteVerificationWebResourceInsertSecurityOption1.prototype, "oauth2c", void 0);
    return SiteVerificationWebResourceInsertSecurityOption1;
}(SpeakeasyBase));
export { SiteVerificationWebResourceInsertSecurityOption1 };
var SiteVerificationWebResourceInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceInsertSecurityOption2, _super);
    function SiteVerificationWebResourceInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SiteVerificationWebResourceInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SiteVerificationWebResourceInsertSecurityOption2.prototype, "oauth2c", void 0);
    return SiteVerificationWebResourceInsertSecurityOption2;
}(SpeakeasyBase));
export { SiteVerificationWebResourceInsertSecurityOption2 };
var SiteVerificationWebResourceInsertSecurity = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceInsertSecurity, _super);
    function SiteVerificationWebResourceInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SiteVerificationWebResourceInsertSecurityOption1)
    ], SiteVerificationWebResourceInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SiteVerificationWebResourceInsertSecurityOption2)
    ], SiteVerificationWebResourceInsertSecurity.prototype, "option2", void 0);
    return SiteVerificationWebResourceInsertSecurity;
}(SpeakeasyBase));
export { SiteVerificationWebResourceInsertSecurity };
var SiteVerificationWebResourceInsertRequest = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceInsertRequest, _super);
    function SiteVerificationWebResourceInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SiteVerificationWebResourceInsertQueryParams)
    ], SiteVerificationWebResourceInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SiteVerificationWebResourceResource)
    ], SiteVerificationWebResourceInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SiteVerificationWebResourceInsertSecurity)
    ], SiteVerificationWebResourceInsertRequest.prototype, "security", void 0);
    return SiteVerificationWebResourceInsertRequest;
}(SpeakeasyBase));
export { SiteVerificationWebResourceInsertRequest };
var SiteVerificationWebResourceInsertResponse = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceInsertResponse, _super);
    function SiteVerificationWebResourceInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SiteVerificationWebResourceResource)
    ], SiteVerificationWebResourceInsertResponse.prototype, "siteVerificationWebResourceResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SiteVerificationWebResourceInsertResponse.prototype, "statusCode", void 0);
    return SiteVerificationWebResourceInsertResponse;
}(SpeakeasyBase));
export { SiteVerificationWebResourceInsertResponse };
