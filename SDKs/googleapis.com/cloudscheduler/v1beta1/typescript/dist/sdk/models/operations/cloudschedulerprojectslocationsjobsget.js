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
var CloudschedulerProjectsLocationsJobsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsGetPathParams, _super);
    function CloudschedulerProjectsLocationsJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetPathParams.prototype, "name", void 0);
    return CloudschedulerProjectsLocationsJobsGetPathParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsGetPathParams };
var CloudschedulerProjectsLocationsJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsGetQueryParams, _super);
    function CloudschedulerProjectsLocationsJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudschedulerProjectsLocationsJobsGetQueryParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsGetQueryParams };
var CloudschedulerProjectsLocationsJobsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsGetSecurity, _super);
    function CloudschedulerProjectsLocationsJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudschedulerProjectsLocationsJobsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudschedulerProjectsLocationsJobsGetSecurity.prototype, "oauth2c", void 0);
    return CloudschedulerProjectsLocationsJobsGetSecurity;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsGetSecurity };
var CloudschedulerProjectsLocationsJobsGetRequest = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsGetRequest, _super);
    function CloudschedulerProjectsLocationsJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsGetPathParams)
    ], CloudschedulerProjectsLocationsJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsGetQueryParams)
    ], CloudschedulerProjectsLocationsJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsGetSecurity)
    ], CloudschedulerProjectsLocationsJobsGetRequest.prototype, "security", void 0);
    return CloudschedulerProjectsLocationsJobsGetRequest;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsGetRequest };
var CloudschedulerProjectsLocationsJobsGetResponse = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsGetResponse, _super);
    function CloudschedulerProjectsLocationsJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Job)
    ], CloudschedulerProjectsLocationsJobsGetResponse.prototype, "job", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudschedulerProjectsLocationsJobsGetResponse.prototype, "statusCode", void 0);
    return CloudschedulerProjectsLocationsJobsGetResponse;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsGetResponse };
