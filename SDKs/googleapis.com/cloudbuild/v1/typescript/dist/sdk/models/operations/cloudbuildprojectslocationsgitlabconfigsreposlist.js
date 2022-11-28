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
var CloudbuildProjectsLocationsGitLabConfigsReposListPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGitLabConfigsReposListPathParams, _super);
    function CloudbuildProjectsLocationsGitLabConfigsReposListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListPathParams.prototype, "parent", void 0);
    return CloudbuildProjectsLocationsGitLabConfigsReposListPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGitLabConfigsReposListPathParams };
var CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams, _super);
    function CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams };
var CloudbuildProjectsLocationsGitLabConfigsReposListSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGitLabConfigsReposListSecurity, _super);
    function CloudbuildProjectsLocationsGitLabConfigsReposListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsGitLabConfigsReposListSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGitLabConfigsReposListSecurity };
var CloudbuildProjectsLocationsGitLabConfigsReposListRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGitLabConfigsReposListRequest, _super);
    function CloudbuildProjectsLocationsGitLabConfigsReposListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsGitLabConfigsReposListPathParams)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsGitLabConfigsReposListSecurity)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsGitLabConfigsReposListRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGitLabConfigsReposListRequest };
var CloudbuildProjectsLocationsGitLabConfigsReposListResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsGitLabConfigsReposListResponse, _super);
    function CloudbuildProjectsLocationsGitLabConfigsReposListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGitLabRepositoriesResponse)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListResponse.prototype, "listGitLabRepositoriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsGitLabConfigsReposListResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsGitLabConfigsReposListResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsGitLabConfigsReposListResponse };
