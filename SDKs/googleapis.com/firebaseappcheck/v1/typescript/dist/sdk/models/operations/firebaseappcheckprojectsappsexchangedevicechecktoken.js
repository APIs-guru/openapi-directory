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
var FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams };
var FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams };
var FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity };
var FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest };
var FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1AppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse.prototype, "googleFirebaseAppcheckV1AppCheckToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse };
