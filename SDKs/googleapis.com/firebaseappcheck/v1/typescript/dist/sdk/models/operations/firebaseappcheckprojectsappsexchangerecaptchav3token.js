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
var FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams };
var FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams };
var FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity };
var FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest };
var FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1AppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse.prototype, "googleFirebaseAppcheckV1AppCheckToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse };
