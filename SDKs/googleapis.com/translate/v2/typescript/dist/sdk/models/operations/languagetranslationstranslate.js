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
var LanguageTranslationsTranslateQueryParams = /** @class */ (function (_super) {
    __extends(LanguageTranslationsTranslateQueryParams, _super);
    function LanguageTranslationsTranslateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bearer_token" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "bearerToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pp" }),
        __metadata("design:type", Boolean)
    ], LanguageTranslationsTranslateQueryParams.prototype, "pp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageTranslationsTranslateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageTranslationsTranslateQueryParams;
}(SpeakeasyBase));
export { LanguageTranslationsTranslateQueryParams };
var LanguageTranslationsTranslateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageTranslationsTranslateSecurityOption1, _super);
    function LanguageTranslationsTranslateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageTranslationsTranslateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageTranslationsTranslateSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageTranslationsTranslateSecurityOption1;
}(SpeakeasyBase));
export { LanguageTranslationsTranslateSecurityOption1 };
var LanguageTranslationsTranslateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageTranslationsTranslateSecurityOption2, _super);
    function LanguageTranslationsTranslateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageTranslationsTranslateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageTranslationsTranslateSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageTranslationsTranslateSecurityOption2;
}(SpeakeasyBase));
export { LanguageTranslationsTranslateSecurityOption2 };
var LanguageTranslationsTranslateSecurity = /** @class */ (function (_super) {
    __extends(LanguageTranslationsTranslateSecurity, _super);
    function LanguageTranslationsTranslateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageTranslationsTranslateSecurityOption1)
    ], LanguageTranslationsTranslateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageTranslationsTranslateSecurityOption2)
    ], LanguageTranslationsTranslateSecurity.prototype, "option2", void 0);
    return LanguageTranslationsTranslateSecurity;
}(SpeakeasyBase));
export { LanguageTranslationsTranslateSecurity };
var LanguageTranslationsTranslateRequest = /** @class */ (function (_super) {
    __extends(LanguageTranslationsTranslateRequest, _super);
    function LanguageTranslationsTranslateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageTranslationsTranslateQueryParams)
    ], LanguageTranslationsTranslateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TranslateTextRequest)
    ], LanguageTranslationsTranslateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageTranslationsTranslateSecurity)
    ], LanguageTranslationsTranslateRequest.prototype, "security", void 0);
    return LanguageTranslationsTranslateRequest;
}(SpeakeasyBase));
export { LanguageTranslationsTranslateRequest };
var LanguageTranslationsTranslateResponse = /** @class */ (function (_super) {
    __extends(LanguageTranslationsTranslateResponse, _super);
    function LanguageTranslationsTranslateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LanguageTranslationsTranslateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LanguageTranslationsTranslateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TranslationsListResponse)
    ], LanguageTranslationsTranslateResponse.prototype, "translationsListResponse", void 0);
    return LanguageTranslationsTranslateResponse;
}(SpeakeasyBase));
export { LanguageTranslationsTranslateResponse };
