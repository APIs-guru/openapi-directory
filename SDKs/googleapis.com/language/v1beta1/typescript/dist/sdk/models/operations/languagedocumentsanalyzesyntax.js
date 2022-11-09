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
var LanguageDocumentsAnalyzeSyntaxQueryParams = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeSyntaxQueryParams, _super);
    function LanguageDocumentsAnalyzeSyntaxQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageDocumentsAnalyzeSyntaxQueryParams;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeSyntaxQueryParams };
var LanguageDocumentsAnalyzeSyntaxSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeSyntaxSecurityOption1, _super);
    function LanguageDocumentsAnalyzeSyntaxSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDocumentsAnalyzeSyntaxSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDocumentsAnalyzeSyntaxSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageDocumentsAnalyzeSyntaxSecurityOption1;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeSyntaxSecurityOption1 };
var LanguageDocumentsAnalyzeSyntaxSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeSyntaxSecurityOption2, _super);
    function LanguageDocumentsAnalyzeSyntaxSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDocumentsAnalyzeSyntaxSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDocumentsAnalyzeSyntaxSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageDocumentsAnalyzeSyntaxSecurityOption2;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeSyntaxSecurityOption2 };
var LanguageDocumentsAnalyzeSyntaxSecurity = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeSyntaxSecurity, _super);
    function LanguageDocumentsAnalyzeSyntaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDocumentsAnalyzeSyntaxSecurityOption1)
    ], LanguageDocumentsAnalyzeSyntaxSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDocumentsAnalyzeSyntaxSecurityOption2)
    ], LanguageDocumentsAnalyzeSyntaxSecurity.prototype, "option2", void 0);
    return LanguageDocumentsAnalyzeSyntaxSecurity;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeSyntaxSecurity };
var LanguageDocumentsAnalyzeSyntaxRequest = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeSyntaxRequest, _super);
    function LanguageDocumentsAnalyzeSyntaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageDocumentsAnalyzeSyntaxQueryParams)
    ], LanguageDocumentsAnalyzeSyntaxRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnalyzeSyntaxRequest)
    ], LanguageDocumentsAnalyzeSyntaxRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageDocumentsAnalyzeSyntaxSecurity)
    ], LanguageDocumentsAnalyzeSyntaxRequest.prototype, "security", void 0);
    return LanguageDocumentsAnalyzeSyntaxRequest;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeSyntaxRequest };
var LanguageDocumentsAnalyzeSyntaxResponse = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeSyntaxResponse, _super);
    function LanguageDocumentsAnalyzeSyntaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AnalyzeSyntaxResponse)
    ], LanguageDocumentsAnalyzeSyntaxResponse.prototype, "analyzeSyntaxResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeSyntaxResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LanguageDocumentsAnalyzeSyntaxResponse.prototype, "statusCode", void 0);
    return LanguageDocumentsAnalyzeSyntaxResponse;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeSyntaxResponse };
