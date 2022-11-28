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
var FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams, _super);
    function FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams };
var FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams, _super);
    function FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams };
var FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1 };
var FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2 };
var FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity, _super);
    function FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity };
var FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest, _super);
    function FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest };
var FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse, _super);
    function FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse.prototype, "googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse };
