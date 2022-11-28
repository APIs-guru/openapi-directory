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
var TranslateProjectsLocationsGetSupportedLanguagesPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGetSupportedLanguagesPathParams, _super);
    function TranslateProjectsLocationsGetSupportedLanguagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesPathParams.prototype, "parent", void 0);
    return TranslateProjectsLocationsGetSupportedLanguagesPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGetSupportedLanguagesPathParams };
var TranslateProjectsLocationsGetSupportedLanguagesQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGetSupportedLanguagesQueryParams, _super);
    function TranslateProjectsLocationsGetSupportedLanguagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=displayLanguageCode" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "displayLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsGetSupportedLanguagesQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGetSupportedLanguagesQueryParams };
var TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1, _super);
    function TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1 };
var TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2, _super);
    function TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2 };
var TranslateProjectsLocationsGetSupportedLanguagesSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGetSupportedLanguagesSecurity, _super);
    function TranslateProjectsLocationsGetSupportedLanguagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1)
    ], TranslateProjectsLocationsGetSupportedLanguagesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2)
    ], TranslateProjectsLocationsGetSupportedLanguagesSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsGetSupportedLanguagesSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGetSupportedLanguagesSecurity };
var TranslateProjectsLocationsGetSupportedLanguagesRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGetSupportedLanguagesRequest, _super);
    function TranslateProjectsLocationsGetSupportedLanguagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGetSupportedLanguagesPathParams)
    ], TranslateProjectsLocationsGetSupportedLanguagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGetSupportedLanguagesQueryParams)
    ], TranslateProjectsLocationsGetSupportedLanguagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGetSupportedLanguagesSecurity)
    ], TranslateProjectsLocationsGetSupportedLanguagesRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsGetSupportedLanguagesRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGetSupportedLanguagesRequest };
var TranslateProjectsLocationsGetSupportedLanguagesResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGetSupportedLanguagesResponse, _super);
    function TranslateProjectsLocationsGetSupportedLanguagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGetSupportedLanguagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsGetSupportedLanguagesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupportedLanguages)
    ], TranslateProjectsLocationsGetSupportedLanguagesResponse.prototype, "supportedLanguages", void 0);
    return TranslateProjectsLocationsGetSupportedLanguagesResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGetSupportedLanguagesResponse };
