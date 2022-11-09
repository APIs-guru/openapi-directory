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
var LanguageDetectionsListQueryParams = /** @class */ (function (_super) {
    __extends(LanguageDetectionsListQueryParams, _super);
    function LanguageDetectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bearer_token" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "bearerToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pp" }),
        __metadata("design:type", Boolean)
    ], LanguageDetectionsListQueryParams.prototype, "pp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageDetectionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", Array)
    ], LanguageDetectionsListQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageDetectionsListQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageDetectionsListQueryParams;
}(SpeakeasyBase));
export { LanguageDetectionsListQueryParams };
var LanguageDetectionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageDetectionsListSecurityOption1, _super);
    function LanguageDetectionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDetectionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDetectionsListSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageDetectionsListSecurityOption1;
}(SpeakeasyBase));
export { LanguageDetectionsListSecurityOption1 };
var LanguageDetectionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageDetectionsListSecurityOption2, _super);
    function LanguageDetectionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageDetectionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageDetectionsListSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageDetectionsListSecurityOption2;
}(SpeakeasyBase));
export { LanguageDetectionsListSecurityOption2 };
var LanguageDetectionsListSecurity = /** @class */ (function (_super) {
    __extends(LanguageDetectionsListSecurity, _super);
    function LanguageDetectionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDetectionsListSecurityOption1)
    ], LanguageDetectionsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageDetectionsListSecurityOption2)
    ], LanguageDetectionsListSecurity.prototype, "option2", void 0);
    return LanguageDetectionsListSecurity;
}(SpeakeasyBase));
export { LanguageDetectionsListSecurity };
var LanguageDetectionsListRequest = /** @class */ (function (_super) {
    __extends(LanguageDetectionsListRequest, _super);
    function LanguageDetectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageDetectionsListQueryParams)
    ], LanguageDetectionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageDetectionsListSecurity)
    ], LanguageDetectionsListRequest.prototype, "security", void 0);
    return LanguageDetectionsListRequest;
}(SpeakeasyBase));
export { LanguageDetectionsListRequest };
var LanguageDetectionsListResponse = /** @class */ (function (_super) {
    __extends(LanguageDetectionsListResponse, _super);
    function LanguageDetectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LanguageDetectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DetectionsListResponse)
    ], LanguageDetectionsListResponse.prototype, "detectionsListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LanguageDetectionsListResponse.prototype, "statusCode", void 0);
    return LanguageDetectionsListResponse;
}(SpeakeasyBase));
export { LanguageDetectionsListResponse };
