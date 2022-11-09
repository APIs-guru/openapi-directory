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
var LanguageDocumentsAnalyzeEntitySentimentQueryParams = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitySentimentQueryParams, _super);
    function LanguageDocumentsAnalyzeEntitySentimentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageDocumentsAnalyzeEntitySentimentQueryParams;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitySentimentQueryParams };
var LanguageDocumentsAnalyzeEntitySentimentSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitySentimentSecurityOption1, _super);
    function LanguageDocumentsAnalyzeEntitySentimentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDocumentsAnalyzeEntitySentimentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDocumentsAnalyzeEntitySentimentSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageDocumentsAnalyzeEntitySentimentSecurityOption1;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitySentimentSecurityOption1 };
var LanguageDocumentsAnalyzeEntitySentimentSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitySentimentSecurityOption2, _super);
    function LanguageDocumentsAnalyzeEntitySentimentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDocumentsAnalyzeEntitySentimentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDocumentsAnalyzeEntitySentimentSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageDocumentsAnalyzeEntitySentimentSecurityOption2;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitySentimentSecurityOption2 };
var LanguageDocumentsAnalyzeEntitySentimentSecurity = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitySentimentSecurity, _super);
    function LanguageDocumentsAnalyzeEntitySentimentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitySentimentSecurityOption1)
    ], LanguageDocumentsAnalyzeEntitySentimentSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitySentimentSecurityOption2)
    ], LanguageDocumentsAnalyzeEntitySentimentSecurity.prototype, "option2", void 0);
    return LanguageDocumentsAnalyzeEntitySentimentSecurity;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitySentimentSecurity };
var LanguageDocumentsAnalyzeEntitySentimentRequest = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitySentimentRequest, _super);
    function LanguageDocumentsAnalyzeEntitySentimentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitySentimentQueryParams)
    ], LanguageDocumentsAnalyzeEntitySentimentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnalyzeEntitySentimentRequest)
    ], LanguageDocumentsAnalyzeEntitySentimentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitySentimentSecurity)
    ], LanguageDocumentsAnalyzeEntitySentimentRequest.prototype, "security", void 0);
    return LanguageDocumentsAnalyzeEntitySentimentRequest;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitySentimentRequest };
var LanguageDocumentsAnalyzeEntitySentimentResponse = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitySentimentResponse, _super);
    function LanguageDocumentsAnalyzeEntitySentimentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AnalyzeEntitySentimentResponse)
    ], LanguageDocumentsAnalyzeEntitySentimentResponse.prototype, "analyzeEntitySentimentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitySentimentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LanguageDocumentsAnalyzeEntitySentimentResponse.prototype, "statusCode", void 0);
    return LanguageDocumentsAnalyzeEntitySentimentResponse;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitySentimentResponse };
