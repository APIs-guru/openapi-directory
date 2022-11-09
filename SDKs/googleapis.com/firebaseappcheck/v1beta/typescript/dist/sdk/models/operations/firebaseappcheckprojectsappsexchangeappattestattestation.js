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
var FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams };
var FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams };
var FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1 };
var FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2 };
var FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity };
var FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest };
var FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse, _super);
    function FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse.prototype, "googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse };
