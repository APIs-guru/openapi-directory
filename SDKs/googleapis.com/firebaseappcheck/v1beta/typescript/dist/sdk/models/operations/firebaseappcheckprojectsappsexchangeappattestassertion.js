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
var FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams };
var FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams };
var FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity };
var FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest };
var FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaAppCheckToken)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse.prototype, "googleFirebaseAppcheckV1betaAppCheckToken", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse };
