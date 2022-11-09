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
var CloudbuildProjectsWorkerPoolsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsPatchPathParams, _super);
    function CloudbuildProjectsWorkerPoolsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchPathParams.prototype, "name", void 0);
    return CloudbuildProjectsWorkerPoolsPatchPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsPatchPathParams };
var CloudbuildProjectsWorkerPoolsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsPatchQueryParams, _super);
    function CloudbuildProjectsWorkerPoolsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsWorkerPoolsPatchQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsPatchQueryParams };
var CloudbuildProjectsWorkerPoolsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsPatchSecurity, _super);
    function CloudbuildProjectsWorkerPoolsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsWorkerPoolsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsWorkerPoolsPatchSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsWorkerPoolsPatchSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsPatchSecurity };
var CloudbuildProjectsWorkerPoolsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsPatchRequest, _super);
    function CloudbuildProjectsWorkerPoolsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsPatchPathParams)
    ], CloudbuildProjectsWorkerPoolsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsPatchQueryParams)
    ], CloudbuildProjectsWorkerPoolsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkerPool)
    ], CloudbuildProjectsWorkerPoolsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsPatchSecurity)
    ], CloudbuildProjectsWorkerPoolsPatchRequest.prototype, "security", void 0);
    return CloudbuildProjectsWorkerPoolsPatchRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsPatchRequest };
var CloudbuildProjectsWorkerPoolsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsPatchResponse, _super);
    function CloudbuildProjectsWorkerPoolsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsWorkerPoolsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.WorkerPool)
    ], CloudbuildProjectsWorkerPoolsPatchResponse.prototype, "workerPool", void 0);
    return CloudbuildProjectsWorkerPoolsPatchResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsPatchResponse };
