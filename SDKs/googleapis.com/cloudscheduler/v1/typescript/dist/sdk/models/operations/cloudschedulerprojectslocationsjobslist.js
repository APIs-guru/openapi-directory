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
var CloudschedulerProjectsLocationsJobsListPathParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsListPathParams, _super);
    function CloudschedulerProjectsLocationsJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListPathParams.prototype, "parent", void 0);
    return CloudschedulerProjectsLocationsJobsListPathParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsListPathParams };
var CloudschedulerProjectsLocationsJobsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsListQueryParams, _super);
    function CloudschedulerProjectsLocationsJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudschedulerProjectsLocationsJobsListQueryParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsListQueryParams };
var CloudschedulerProjectsLocationsJobsListSecurity = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsListSecurity, _super);
    function CloudschedulerProjectsLocationsJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudschedulerProjectsLocationsJobsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudschedulerProjectsLocationsJobsListSecurity.prototype, "oauth2c", void 0);
    return CloudschedulerProjectsLocationsJobsListSecurity;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsListSecurity };
var CloudschedulerProjectsLocationsJobsListRequest = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsListRequest, _super);
    function CloudschedulerProjectsLocationsJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsListPathParams)
    ], CloudschedulerProjectsLocationsJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsListQueryParams)
    ], CloudschedulerProjectsLocationsJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsListSecurity)
    ], CloudschedulerProjectsLocationsJobsListRequest.prototype, "security", void 0);
    return CloudschedulerProjectsLocationsJobsListRequest;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsListRequest };
var CloudschedulerProjectsLocationsJobsListResponse = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsListResponse, _super);
    function CloudschedulerProjectsLocationsJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListJobsResponse)
    ], CloudschedulerProjectsLocationsJobsListResponse.prototype, "listJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudschedulerProjectsLocationsJobsListResponse.prototype, "statusCode", void 0);
    return CloudschedulerProjectsLocationsJobsListResponse;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsListResponse };
