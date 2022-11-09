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
var FirebaseappcheckProjectsAppsDebugTokensCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensCreatePathParams, _super);
    function FirebaseappcheckProjectsAppsDebugTokensCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreatePathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensCreatePathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensCreatePathParams };
var FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams, _super);
    function FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams };
var FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1 };
var FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2 };
var FirebaseappcheckProjectsAppsDebugTokensCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensCreateSecurity, _super);
    function FirebaseappcheckProjectsAppsDebugTokensCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensCreateSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensCreateSecurity };
var FirebaseappcheckProjectsAppsDebugTokensCreateRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensCreateRequest, _super);
    function FirebaseappcheckProjectsAppsDebugTokensCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensCreatePathParams)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1DebugToken)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensCreateSecurity)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensCreateRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensCreateRequest };
var FirebaseappcheckProjectsAppsDebugTokensCreateResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensCreateResponse, _super);
    function FirebaseappcheckProjectsAppsDebugTokensCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1DebugToken)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateResponse.prototype, "googleFirebaseAppcheckV1DebugToken", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsDebugTokensCreateResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensCreateResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensCreateResponse };
