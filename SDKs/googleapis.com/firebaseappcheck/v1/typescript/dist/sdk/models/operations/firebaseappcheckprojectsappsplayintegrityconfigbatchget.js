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
var FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams, _super);
    function FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams };
var FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams, _super);
    function FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams };
var FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1 };
var FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2 };
var FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity, _super);
    function FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity };
var FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest, _super);
    function FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest };
var FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse, _super);
    function FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse.prototype, "googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse };
