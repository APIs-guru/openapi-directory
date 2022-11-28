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
var FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams };
var FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams };
var FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity };
var FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest };
var FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaAppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse.prototype, "googleFirebaseAppcheckV1betaAppCheckToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse };
