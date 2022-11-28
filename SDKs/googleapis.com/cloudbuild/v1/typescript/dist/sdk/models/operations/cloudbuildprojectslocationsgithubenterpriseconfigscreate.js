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
var CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams, _super);
    function CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams.prototype, "parent", void 0);
    return CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams };
var CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams, _super);
    function CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gheConfigId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "gheConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams };
var CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity, _super);
    function CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity };
var CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest, _super);
    function CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GitHubEnterpriseConfigInput)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest };
var CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse, _super);
    function CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse };
