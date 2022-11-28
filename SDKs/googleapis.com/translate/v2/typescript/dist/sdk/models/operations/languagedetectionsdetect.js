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
var LanguageDetectionsDetectQueryParams = /** @class */ (function (_super) {
    __extends(LanguageDetectionsDetectQueryParams, _super);
    function LanguageDetectionsDetectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bearer_token" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "bearerToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pp" }),
        __metadata("design:type", Boolean)
    ], LanguageDetectionsDetectQueryParams.prototype, "pp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageDetectionsDetectQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageDetectionsDetectQueryParams;
}(SpeakeasyBase));
export { LanguageDetectionsDetectQueryParams };
var LanguageDetectionsDetectSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageDetectionsDetectSecurityOption1, _super);
    function LanguageDetectionsDetectSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDetectionsDetectSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDetectionsDetectSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageDetectionsDetectSecurityOption1;
}(SpeakeasyBase));
export { LanguageDetectionsDetectSecurityOption1 };
var LanguageDetectionsDetectSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageDetectionsDetectSecurityOption2, _super);
    function LanguageDetectionsDetectSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDetectionsDetectSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDetectionsDetectSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageDetectionsDetectSecurityOption2;
}(SpeakeasyBase));
export { LanguageDetectionsDetectSecurityOption2 };
var LanguageDetectionsDetectSecurity = /** @class */ (function (_super) {
    __extends(LanguageDetectionsDetectSecurity, _super);
    function LanguageDetectionsDetectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDetectionsDetectSecurityOption1)
    ], LanguageDetectionsDetectSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDetectionsDetectSecurityOption2)
    ], LanguageDetectionsDetectSecurity.prototype, "option2", void 0);
    return LanguageDetectionsDetectSecurity;
}(SpeakeasyBase));
export { LanguageDetectionsDetectSecurity };
var LanguageDetectionsDetectRequest = /** @class */ (function (_super) {
    __extends(LanguageDetectionsDetectRequest, _super);
    function LanguageDetectionsDetectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LanguageDetectionsDetectQueryParams)
    ], LanguageDetectionsDetectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DetectLanguageRequest)
    ], LanguageDetectionsDetectRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LanguageDetectionsDetectSecurity)
    ], LanguageDetectionsDetectRequest.prototype, "security", void 0);
    return LanguageDetectionsDetectRequest;
}(SpeakeasyBase));
export { LanguageDetectionsDetectRequest };
var LanguageDetectionsDetectResponse = /** @class */ (function (_super) {
    __extends(LanguageDetectionsDetectResponse, _super);
    function LanguageDetectionsDetectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LanguageDetectionsDetectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DetectionsListResponse)
    ], LanguageDetectionsDetectResponse.prototype, "detectionsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LanguageDetectionsDetectResponse.prototype, "statusCode", void 0);
    return LanguageDetectionsDetectResponse;
}(SpeakeasyBase));
export { LanguageDetectionsDetectResponse };
