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
var YoutubeI18nLanguagesListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListQueryParams, _super);
    function YoutubeI18nLanguagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeI18nLanguagesListQueryParams;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListQueryParams };
var YoutubeI18nLanguagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListSecurityOption1, _super);
    function YoutubeI18nLanguagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nLanguagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nLanguagesListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeI18nLanguagesListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListSecurityOption1 };
var YoutubeI18nLanguagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListSecurityOption2, _super);
    function YoutubeI18nLanguagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nLanguagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nLanguagesListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeI18nLanguagesListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListSecurityOption2 };
var YoutubeI18nLanguagesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListSecurityOption3, _super);
    function YoutubeI18nLanguagesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nLanguagesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nLanguagesListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeI18nLanguagesListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListSecurityOption3 };
var YoutubeI18nLanguagesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListSecurityOption4, _super);
    function YoutubeI18nLanguagesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nLanguagesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nLanguagesListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeI18nLanguagesListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListSecurityOption4 };
var YoutubeI18nLanguagesListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListSecurity, _super);
    function YoutubeI18nLanguagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nLanguagesListSecurityOption1)
    ], YoutubeI18nLanguagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nLanguagesListSecurityOption2)
    ], YoutubeI18nLanguagesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nLanguagesListSecurityOption3)
    ], YoutubeI18nLanguagesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nLanguagesListSecurityOption4)
    ], YoutubeI18nLanguagesListSecurity.prototype, "option4", void 0);
    return YoutubeI18nLanguagesListSecurity;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListSecurity };
var YoutubeI18nLanguagesListRequest = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListRequest, _super);
    function YoutubeI18nLanguagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeI18nLanguagesListQueryParams)
    ], YoutubeI18nLanguagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeI18nLanguagesListSecurity)
    ], YoutubeI18nLanguagesListRequest.prototype, "security", void 0);
    return YoutubeI18nLanguagesListRequest;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListRequest };
var YoutubeI18nLanguagesListResponse = /** @class */ (function (_super) {
    __extends(YoutubeI18nLanguagesListResponse, _super);
    function YoutubeI18nLanguagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeI18nLanguagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.I18nLanguageListResponse)
    ], YoutubeI18nLanguagesListResponse.prototype, "i18nLanguageListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeI18nLanguagesListResponse.prototype, "statusCode", void 0);
    return YoutubeI18nLanguagesListResponse;
}(SpeakeasyBase));
export { YoutubeI18nLanguagesListResponse };
