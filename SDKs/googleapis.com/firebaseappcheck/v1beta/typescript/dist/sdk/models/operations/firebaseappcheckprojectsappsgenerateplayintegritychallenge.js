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
var FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams, _super);
    function FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams };
var FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams, _super);
    function FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams };
var FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1 };
var FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2 };
var FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity, _super);
    function FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity };
var FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest, _super);
    function FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest };
var FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse, _super);
    function FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse.prototype, "googleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse };
