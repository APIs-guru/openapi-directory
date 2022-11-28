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
var FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams };
var FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams };
var FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity };
var FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest };
var FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaAppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse.prototype, "googleFirebaseAppcheckV1betaAppCheckToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse };
