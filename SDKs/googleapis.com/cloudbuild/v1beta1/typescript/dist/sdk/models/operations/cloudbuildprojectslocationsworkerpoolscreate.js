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
var CloudbuildProjectsLocationsWorkerPoolsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsCreatePathParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreatePathParams.prototype, "parent", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsCreatePathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsCreatePathParams };
var CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=workerPoolId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams.prototype, "workerPoolId", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams };
var CloudbuildProjectsLocationsWorkerPoolsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsCreateSecurity, _super);
    function CloudbuildProjectsLocationsWorkerPoolsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsCreateSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsCreateSecurity };
var CloudbuildProjectsLocationsWorkerPoolsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsCreateRequest, _super);
    function CloudbuildProjectsLocationsWorkerPoolsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsCreatePathParams)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkerPool)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsCreateSecurity)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsCreateRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsCreateRequest };
var CloudbuildProjectsLocationsWorkerPoolsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsCreateResponse, _super);
    function CloudbuildProjectsLocationsWorkerPoolsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsWorkerPoolsCreateResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsCreateResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsCreateResponse };
