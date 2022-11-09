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
var FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams, _super);
    function FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams.prototype, "app", void 0);
    return FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams };
var FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams, _super);
    function FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams };
var FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1 };
var FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2 };
var FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity, _super);
    function FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity };
var FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest, _super);
    function FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest };
var FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse, _super);
    function FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse.prototype, "googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse };
