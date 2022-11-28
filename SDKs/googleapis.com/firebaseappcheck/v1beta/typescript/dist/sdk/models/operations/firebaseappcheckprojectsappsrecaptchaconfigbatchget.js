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
var FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams, _super);
    function FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams };
var FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams, _super);
    function FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams };
var FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1 };
var FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2 };
var FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity, _super);
    function FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity };
var FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest, _super);
    function FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest };
var FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse, _super);
    function FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse.prototype, "googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse };
