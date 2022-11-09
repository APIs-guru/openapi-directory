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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams };
var FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams };
var FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity };
var FirebaseappcheckProjectsAppsExchangeDebugTokenRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDebugTokenRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeDebugTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeDebugTokenRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDebugTokenRequest };
var FirebaseappcheckProjectsAppsExchangeDebugTokenResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeDebugTokenResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeDebugTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaAppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenResponse.prototype, "googleFirebaseAppcheckV1betaAppCheckToken", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeDebugTokenResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeDebugTokenResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeDebugTokenResponse };
