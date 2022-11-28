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
var TranslateProjectsLocationsDetectLanguagePathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsDetectLanguagePathParams, _super);
    function TranslateProjectsLocationsDetectLanguagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguagePathParams.prototype, "parent", void 0);
    return TranslateProjectsLocationsDetectLanguagePathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsDetectLanguagePathParams };
var TranslateProjectsLocationsDetectLanguageQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsDetectLanguageQueryParams, _super);
    function TranslateProjectsLocationsDetectLanguageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsDetectLanguageQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsDetectLanguageQueryParams };
var TranslateProjectsLocationsDetectLanguageSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsDetectLanguageSecurityOption1, _super);
    function TranslateProjectsLocationsDetectLanguageSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsDetectLanguageSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsDetectLanguageSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsDetectLanguageSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsDetectLanguageSecurityOption1 };
var TranslateProjectsLocationsDetectLanguageSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsDetectLanguageSecurityOption2, _super);
    function TranslateProjectsLocationsDetectLanguageSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsDetectLanguageSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsDetectLanguageSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsDetectLanguageSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsDetectLanguageSecurityOption2 };
var TranslateProjectsLocationsDetectLanguageSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsDetectLanguageSecurity, _super);
    function TranslateProjectsLocationsDetectLanguageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsDetectLanguageSecurityOption1)
    ], TranslateProjectsLocationsDetectLanguageSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsDetectLanguageSecurityOption2)
    ], TranslateProjectsLocationsDetectLanguageSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsDetectLanguageSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsDetectLanguageSecurity };
var TranslateProjectsLocationsDetectLanguageRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsDetectLanguageRequest, _super);
    function TranslateProjectsLocationsDetectLanguageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsDetectLanguagePathParams)
    ], TranslateProjectsLocationsDetectLanguageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsDetectLanguageQueryParams)
    ], TranslateProjectsLocationsDetectLanguageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DetectLanguageRequest)
    ], TranslateProjectsLocationsDetectLanguageRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsDetectLanguageSecurity)
    ], TranslateProjectsLocationsDetectLanguageRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsDetectLanguageRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsDetectLanguageRequest };
var TranslateProjectsLocationsDetectLanguageResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsDetectLanguageResponse, _super);
    function TranslateProjectsLocationsDetectLanguageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsDetectLanguageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DetectLanguageResponse)
    ], TranslateProjectsLocationsDetectLanguageResponse.prototype, "detectLanguageResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsDetectLanguageResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsDetectLanguageResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsDetectLanguageResponse };
