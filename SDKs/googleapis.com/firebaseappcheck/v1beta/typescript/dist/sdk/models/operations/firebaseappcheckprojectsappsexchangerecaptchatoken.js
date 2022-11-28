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
var FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams };
var FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams };
var FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity };
var FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest };
var FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaAppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse.prototype, "googleFirebaseAppcheckV1betaAppCheckToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse };
