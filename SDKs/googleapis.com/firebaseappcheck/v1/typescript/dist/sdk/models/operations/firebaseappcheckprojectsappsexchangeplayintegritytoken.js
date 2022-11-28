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
var FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams };
var FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams };
var FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity };
var FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest, _super);
    function FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest };
var FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse, _super);
    function FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1AppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse.prototype, "googleFirebaseAppcheckV1AppCheckToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse };
