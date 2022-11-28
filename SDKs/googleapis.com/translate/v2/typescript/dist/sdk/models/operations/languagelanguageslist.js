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
var LanguageLanguagesListQueryParams = /** @class */ (function (_super) {
    __extends(LanguageLanguagesListQueryParams, _super);
    function LanguageLanguagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bearer_token" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "bearerToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pp" }),
        __metadata("design:type", Boolean)
    ], LanguageLanguagesListQueryParams.prototype, "pp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LanguageLanguagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LanguageLanguagesListQueryParams.prototype, "uploadProtocol", void 0);
    return LanguageLanguagesListQueryParams;
}(SpeakeasyBase));
export { LanguageLanguagesListQueryParams };
var LanguageLanguagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LanguageLanguagesListSecurityOption1, _super);
    function LanguageLanguagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageLanguagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageLanguagesListSecurityOption1.prototype, "oauth2c", void 0);
    return LanguageLanguagesListSecurityOption1;
}(SpeakeasyBase));
export { LanguageLanguagesListSecurityOption1 };
var LanguageLanguagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LanguageLanguagesListSecurityOption2, _super);
    function LanguageLanguagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LanguageLanguagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LanguageLanguagesListSecurityOption2.prototype, "oauth2c", void 0);
    return LanguageLanguagesListSecurityOption2;
}(SpeakeasyBase));
export { LanguageLanguagesListSecurityOption2 };
var LanguageLanguagesListSecurity = /** @class */ (function (_super) {
    __extends(LanguageLanguagesListSecurity, _super);
    function LanguageLanguagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageLanguagesListSecurityOption1)
    ], LanguageLanguagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LanguageLanguagesListSecurityOption2)
    ], LanguageLanguagesListSecurity.prototype, "option2", void 0);
    return LanguageLanguagesListSecurity;
}(SpeakeasyBase));
export { LanguageLanguagesListSecurity };
var LanguageLanguagesListRequest = /** @class */ (function (_super) {
    __extends(LanguageLanguagesListRequest, _super);
    function LanguageLanguagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LanguageLanguagesListQueryParams)
    ], LanguageLanguagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LanguageLanguagesListSecurity)
    ], LanguageLanguagesListRequest.prototype, "security", void 0);
    return LanguageLanguagesListRequest;
}(SpeakeasyBase));
export { LanguageLanguagesListRequest };
var LanguageLanguagesListResponse = /** @class */ (function (_super) {
    __extends(LanguageLanguagesListResponse, _super);
    function LanguageLanguagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LanguageLanguagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LanguagesListResponse)
    ], LanguageLanguagesListResponse.prototype, "languagesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LanguageLanguagesListResponse.prototype, "statusCode", void 0);
    return LanguageLanguagesListResponse;
}(SpeakeasyBase));
export { LanguageLanguagesListResponse };
