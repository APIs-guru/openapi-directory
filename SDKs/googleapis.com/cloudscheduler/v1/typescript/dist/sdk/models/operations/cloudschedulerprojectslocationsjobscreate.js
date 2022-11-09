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
var CloudschedulerProjectsLocationsJobsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsCreatePathParams, _super);
    function CloudschedulerProjectsLocationsJobsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreatePathParams.prototype, "parent", void 0);
    return CloudschedulerProjectsLocationsJobsCreatePathParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsCreatePathParams };
var CloudschedulerProjectsLocationsJobsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsCreateQueryParams, _super);
    function CloudschedulerProjectsLocationsJobsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudschedulerProjectsLocationsJobsCreateQueryParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsCreateQueryParams };
var CloudschedulerProjectsLocationsJobsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsCreateSecurity, _super);
    function CloudschedulerProjectsLocationsJobsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudschedulerProjectsLocationsJobsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudschedulerProjectsLocationsJobsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudschedulerProjectsLocationsJobsCreateSecurity;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsCreateSecurity };
var CloudschedulerProjectsLocationsJobsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsCreateRequest, _super);
    function CloudschedulerProjectsLocationsJobsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsCreatePathParams)
    ], CloudschedulerProjectsLocationsJobsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsCreateQueryParams)
    ], CloudschedulerProjectsLocationsJobsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Job)
    ], CloudschedulerProjectsLocationsJobsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsCreateSecurity)
    ], CloudschedulerProjectsLocationsJobsCreateRequest.prototype, "security", void 0);
    return CloudschedulerProjectsLocationsJobsCreateRequest;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsCreateRequest };
var CloudschedulerProjectsLocationsJobsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsCreateResponse, _super);
    function CloudschedulerProjectsLocationsJobsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Job)
    ], CloudschedulerProjectsLocationsJobsCreateResponse.prototype, "job", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudschedulerProjectsLocationsJobsCreateResponse.prototype, "statusCode", void 0);
    return CloudschedulerProjectsLocationsJobsCreateResponse;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsCreateResponse };
