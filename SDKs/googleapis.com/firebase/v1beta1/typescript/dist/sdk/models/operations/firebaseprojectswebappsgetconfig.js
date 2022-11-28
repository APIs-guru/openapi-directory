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
var FirebaseProjectsWebAppsGetConfigPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigPathParams, _super);
    function FirebaseProjectsWebAppsGetConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigPathParams.prototype, "name", void 0);
    return FirebaseProjectsWebAppsGetConfigPathParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigPathParams };
var FirebaseProjectsWebAppsGetConfigQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigQueryParams, _super);
    function FirebaseProjectsWebAppsGetConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsWebAppsGetConfigQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigQueryParams };
var FirebaseProjectsWebAppsGetConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigSecurityOption1, _super);
    function FirebaseProjectsWebAppsGetConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsGetConfigSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigSecurityOption1 };
var FirebaseProjectsWebAppsGetConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigSecurityOption2, _super);
    function FirebaseProjectsWebAppsGetConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsGetConfigSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigSecurityOption2 };
var FirebaseProjectsWebAppsGetConfigSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigSecurityOption3, _super);
    function FirebaseProjectsWebAppsGetConfigSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsGetConfigSecurityOption3;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigSecurityOption3 };
var FirebaseProjectsWebAppsGetConfigSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigSecurityOption4, _super);
    function FirebaseProjectsWebAppsGetConfigSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsWebAppsGetConfigSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseProjectsWebAppsGetConfigSecurityOption4;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigSecurityOption4 };
var FirebaseProjectsWebAppsGetConfigSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigSecurity, _super);
    function FirebaseProjectsWebAppsGetConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsGetConfigSecurityOption1)
    ], FirebaseProjectsWebAppsGetConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsGetConfigSecurityOption2)
    ], FirebaseProjectsWebAppsGetConfigSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsGetConfigSecurityOption3)
    ], FirebaseProjectsWebAppsGetConfigSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsWebAppsGetConfigSecurityOption4)
    ], FirebaseProjectsWebAppsGetConfigSecurity.prototype, "option4", void 0);
    return FirebaseProjectsWebAppsGetConfigSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigSecurity };
var FirebaseProjectsWebAppsGetConfigRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigRequest, _super);
    function FirebaseProjectsWebAppsGetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsWebAppsGetConfigPathParams)
    ], FirebaseProjectsWebAppsGetConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsWebAppsGetConfigQueryParams)
    ], FirebaseProjectsWebAppsGetConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsWebAppsGetConfigSecurity)
    ], FirebaseProjectsWebAppsGetConfigRequest.prototype, "security", void 0);
    return FirebaseProjectsWebAppsGetConfigRequest;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigRequest };
var FirebaseProjectsWebAppsGetConfigResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsWebAppsGetConfigResponse, _super);
    function FirebaseProjectsWebAppsGetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsWebAppsGetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsWebAppsGetConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebAppConfig)
    ], FirebaseProjectsWebAppsGetConfigResponse.prototype, "webAppConfig", void 0);
    return FirebaseProjectsWebAppsGetConfigResponse;
}(SpeakeasyBase));
export { FirebaseProjectsWebAppsGetConfigResponse };
