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
var GmailUsersSettingsGetLanguagePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguagePathParams, _super);
    function GmailUsersSettingsGetLanguagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguagePathParams.prototype, "userId", void 0);
    return GmailUsersSettingsGetLanguagePathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguagePathParams };
var GmailUsersSettingsGetLanguageQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageQueryParams, _super);
    function GmailUsersSettingsGetLanguageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsGetLanguageQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageQueryParams };
var GmailUsersSettingsGetLanguageSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageSecurityOption1, _super);
    function GmailUsersSettingsGetLanguageSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetLanguageSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetLanguageSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetLanguageSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageSecurityOption1 };
var GmailUsersSettingsGetLanguageSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageSecurityOption2, _super);
    function GmailUsersSettingsGetLanguageSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetLanguageSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetLanguageSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetLanguageSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageSecurityOption2 };
var GmailUsersSettingsGetLanguageSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageSecurityOption3, _super);
    function GmailUsersSettingsGetLanguageSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetLanguageSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetLanguageSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetLanguageSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageSecurityOption3 };
var GmailUsersSettingsGetLanguageSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageSecurityOption4, _super);
    function GmailUsersSettingsGetLanguageSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetLanguageSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetLanguageSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetLanguageSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageSecurityOption4 };
var GmailUsersSettingsGetLanguageSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageSecurity, _super);
    function GmailUsersSettingsGetLanguageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetLanguageSecurityOption1)
    ], GmailUsersSettingsGetLanguageSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetLanguageSecurityOption2)
    ], GmailUsersSettingsGetLanguageSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetLanguageSecurityOption3)
    ], GmailUsersSettingsGetLanguageSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetLanguageSecurityOption4)
    ], GmailUsersSettingsGetLanguageSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsGetLanguageSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageSecurity };
var GmailUsersSettingsGetLanguageRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageRequest, _super);
    function GmailUsersSettingsGetLanguageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetLanguagePathParams)
    ], GmailUsersSettingsGetLanguageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetLanguageQueryParams)
    ], GmailUsersSettingsGetLanguageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetLanguageSecurity)
    ], GmailUsersSettingsGetLanguageRequest.prototype, "security", void 0);
    return GmailUsersSettingsGetLanguageRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageRequest };
var GmailUsersSettingsGetLanguageResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetLanguageResponse, _super);
    function GmailUsersSettingsGetLanguageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetLanguageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LanguageSettings)
    ], GmailUsersSettingsGetLanguageResponse.prototype, "languageSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsGetLanguageResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsGetLanguageResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsGetLanguageResponse };
