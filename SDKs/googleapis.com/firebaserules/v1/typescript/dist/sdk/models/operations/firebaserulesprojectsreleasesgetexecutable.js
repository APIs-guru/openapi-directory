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
var FirebaserulesProjectsReleasesGetExecutablePathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutablePathParams, _super);
    function FirebaserulesProjectsReleasesGetExecutablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutablePathParams.prototype, "name", void 0);
    return FirebaserulesProjectsReleasesGetExecutablePathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutablePathParams };
export var FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum;
(function (FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum) {
    FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum["ReleaseExecutableVersionUnspecified"] = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED";
    FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum["FirebaseRulesExecutableV1"] = "FIREBASE_RULES_EXECUTABLE_V1";
    FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum["FirebaseRulesExecutableV2"] = "FIREBASE_RULES_EXECUTABLE_V2";
})(FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum || (FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum = {}));
var FirebaserulesProjectsReleasesGetExecutableQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutableQueryParams, _super);
    function FirebaserulesProjectsReleasesGetExecutableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=executableVersion" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "executableVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsReleasesGetExecutableQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutableQueryParams };
var FirebaserulesProjectsReleasesGetExecutableSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutableSecurityOption1, _super);
    function FirebaserulesProjectsReleasesGetExecutableSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsReleasesGetExecutableSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsReleasesGetExecutableSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsReleasesGetExecutableSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutableSecurityOption1 };
var FirebaserulesProjectsReleasesGetExecutableSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutableSecurityOption2, _super);
    function FirebaserulesProjectsReleasesGetExecutableSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsReleasesGetExecutableSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsReleasesGetExecutableSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsReleasesGetExecutableSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutableSecurityOption2 };
var FirebaserulesProjectsReleasesGetExecutableSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutableSecurityOption3, _super);
    function FirebaserulesProjectsReleasesGetExecutableSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsReleasesGetExecutableSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsReleasesGetExecutableSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsReleasesGetExecutableSecurityOption3;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutableSecurityOption3 };
var FirebaserulesProjectsReleasesGetExecutableSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutableSecurity, _super);
    function FirebaserulesProjectsReleasesGetExecutableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsReleasesGetExecutableSecurityOption1)
    ], FirebaserulesProjectsReleasesGetExecutableSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsReleasesGetExecutableSecurityOption2)
    ], FirebaserulesProjectsReleasesGetExecutableSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsReleasesGetExecutableSecurityOption3)
    ], FirebaserulesProjectsReleasesGetExecutableSecurity.prototype, "option3", void 0);
    return FirebaserulesProjectsReleasesGetExecutableSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutableSecurity };
var FirebaserulesProjectsReleasesGetExecutableRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutableRequest, _super);
    function FirebaserulesProjectsReleasesGetExecutableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesGetExecutablePathParams)
    ], FirebaserulesProjectsReleasesGetExecutableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesGetExecutableQueryParams)
    ], FirebaserulesProjectsReleasesGetExecutableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsReleasesGetExecutableSecurity)
    ], FirebaserulesProjectsReleasesGetExecutableRequest.prototype, "security", void 0);
    return FirebaserulesProjectsReleasesGetExecutableRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutableRequest };
var FirebaserulesProjectsReleasesGetExecutableResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsReleasesGetExecutableResponse, _super);
    function FirebaserulesProjectsReleasesGetExecutableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsReleasesGetExecutableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetReleaseExecutableResponse)
    ], FirebaserulesProjectsReleasesGetExecutableResponse.prototype, "getReleaseExecutableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsReleasesGetExecutableResponse.prototype, "statusCode", void 0);
    return FirebaserulesProjectsReleasesGetExecutableResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsReleasesGetExecutableResponse };
