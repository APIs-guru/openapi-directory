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
var LanguageDocumentsAnalyzeEntitiesQueryParams = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitiesQueryParams, _super);
    function LanguageDocumentsAnalyzeEntitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageDocumentsAnalyzeEntitiesQueryParams;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitiesQueryParams };
var LanguageDocumentsAnalyzeEntitiesSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitiesSecurityOption1, _super);
    function LanguageDocumentsAnalyzeEntitiesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDocumentsAnalyzeEntitiesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDocumentsAnalyzeEntitiesSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageDocumentsAnalyzeEntitiesSecurityOption1;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitiesSecurityOption1 };
var LanguageDocumentsAnalyzeEntitiesSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitiesSecurityOption2, _super);
    function LanguageDocumentsAnalyzeEntitiesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDocumentsAnalyzeEntitiesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDocumentsAnalyzeEntitiesSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageDocumentsAnalyzeEntitiesSecurityOption2;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitiesSecurityOption2 };
var LanguageDocumentsAnalyzeEntitiesSecurity = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitiesSecurity, _super);
    function LanguageDocumentsAnalyzeEntitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitiesSecurityOption1)
    ], LanguageDocumentsAnalyzeEntitiesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitiesSecurityOption2)
    ], LanguageDocumentsAnalyzeEntitiesSecurity.prototype, "option2", void 0);
    return LanguageDocumentsAnalyzeEntitiesSecurity;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitiesSecurity };
var LanguageDocumentsAnalyzeEntitiesRequest = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitiesRequest, _super);
    function LanguageDocumentsAnalyzeEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitiesQueryParams)
    ], LanguageDocumentsAnalyzeEntitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnalyzeEntitiesRequest)
    ], LanguageDocumentsAnalyzeEntitiesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LanguageDocumentsAnalyzeEntitiesSecurity)
    ], LanguageDocumentsAnalyzeEntitiesRequest.prototype, "security", void 0);
    return LanguageDocumentsAnalyzeEntitiesRequest;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitiesRequest };
var LanguageDocumentsAnalyzeEntitiesResponse = /** @class */ (function (_super) {
    __extends(LanguageDocumentsAnalyzeEntitiesResponse, _super);
    function LanguageDocumentsAnalyzeEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AnalyzeEntitiesResponse)
    ], LanguageDocumentsAnalyzeEntitiesResponse.prototype, "analyzeEntitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LanguageDocumentsAnalyzeEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LanguageDocumentsAnalyzeEntitiesResponse.prototype, "statusCode", void 0);
    return LanguageDocumentsAnalyzeEntitiesResponse;
}(SpeakeasyBase));
export { LanguageDocumentsAnalyzeEntitiesResponse };
