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
export var LanguageTranslationsListFormatEnum;
(function (LanguageTranslationsListFormatEnum) {
    LanguageTranslationsListFormatEnum["Html"] = "html";
    LanguageTranslationsListFormatEnum["Text"] = "text";
})(LanguageTranslationsListFormatEnum || (LanguageTranslationsListFormatEnum = {}));
var LanguageTranslationsListQueryParams = /** @class */ (function (_super) {
    __extends(LanguageTranslationsListQueryParams, _super);
    function LanguageTranslationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bearer_token" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "bearerToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cid" }),
        __metadata("design:type", Array)
    ], LanguageTranslationsListQueryParams.prototype, "cid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "model", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pp" }),
        __metadata("design:type", Boolean)
    ], LanguageTranslationsListQueryParams.prototype, "pp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageTranslationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", Array)
    ], LanguageTranslationsListQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=target" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "target", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageTranslationsListQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageTranslationsListQueryParams;
}(SpeakeasyBase));
export { LanguageTranslationsListQueryParams };
var LanguageTranslationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageTranslationsListSecurityOption1, _super);
    function LanguageTranslationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageTranslationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageTranslationsListSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageTranslationsListSecurityOption1;
}(SpeakeasyBase));
export { LanguageTranslationsListSecurityOption1 };
var LanguageTranslationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageTranslationsListSecurityOption2, _super);
    function LanguageTranslationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageTranslationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageTranslationsListSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageTranslationsListSecurityOption2;
}(SpeakeasyBase));
export { LanguageTranslationsListSecurityOption2 };
var LanguageTranslationsListSecurity = /** @class */ (function (_super) {
    __extends(LanguageTranslationsListSecurity, _super);
    function LanguageTranslationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageTranslationsListSecurityOption1)
    ], LanguageTranslationsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageTranslationsListSecurityOption2)
    ], LanguageTranslationsListSecurity.prototype, "option2", void 0);
    return LanguageTranslationsListSecurity;
}(SpeakeasyBase));
export { LanguageTranslationsListSecurity };
var LanguageTranslationsListRequest = /** @class */ (function (_super) {
    __extends(LanguageTranslationsListRequest, _super);
    function LanguageTranslationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageTranslationsListQueryParams)
    ], LanguageTranslationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LanguageTranslationsListSecurity)
    ], LanguageTranslationsListRequest.prototype, "security", void 0);
    return LanguageTranslationsListRequest;
}(SpeakeasyBase));
export { LanguageTranslationsListRequest };
var LanguageTranslationsListResponse = /** @class */ (function (_super) {
    __extends(LanguageTranslationsListResponse, _super);
    function LanguageTranslationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LanguageTranslationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LanguageTranslationsListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TranslationsListResponse)
    ], LanguageTranslationsListResponse.prototype, "translationsListResponse", void 0);
    return LanguageTranslationsListResponse;
}(SpeakeasyBase));
export { LanguageTranslationsListResponse };
