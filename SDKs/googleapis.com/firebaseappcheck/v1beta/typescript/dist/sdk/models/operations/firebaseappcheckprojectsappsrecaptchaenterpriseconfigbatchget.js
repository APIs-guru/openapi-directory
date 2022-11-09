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
var FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams, _super);
    function FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams };
var FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams, _super);
    function FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams };
var FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 };
var FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 };
var FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity, _super);
    function FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity };
var FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest, _super);
    function FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest };
var FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse, _super);
    function FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse.prototype, "googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse };
