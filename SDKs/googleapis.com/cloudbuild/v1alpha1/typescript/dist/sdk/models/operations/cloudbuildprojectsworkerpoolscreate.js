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
var CloudbuildProjectsWorkerPoolsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsCreatePathParams, _super);
    function CloudbuildProjectsWorkerPoolsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreatePathParams.prototype, "parent", void 0);
    return CloudbuildProjectsWorkerPoolsCreatePathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsCreatePathParams };
var CloudbuildProjectsWorkerPoolsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsCreateQueryParams, _super);
    function CloudbuildProjectsWorkerPoolsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsWorkerPoolsCreateQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsCreateQueryParams };
var CloudbuildProjectsWorkerPoolsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsCreateSecurity, _super);
    function CloudbuildProjectsWorkerPoolsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsWorkerPoolsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsWorkerPoolsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsWorkerPoolsCreateSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsCreateSecurity };
var CloudbuildProjectsWorkerPoolsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsCreateRequest, _super);
    function CloudbuildProjectsWorkerPoolsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsCreatePathParams)
    ], CloudbuildProjectsWorkerPoolsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsCreateQueryParams)
    ], CloudbuildProjectsWorkerPoolsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkerPool)
    ], CloudbuildProjectsWorkerPoolsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsWorkerPoolsCreateSecurity)
    ], CloudbuildProjectsWorkerPoolsCreateRequest.prototype, "security", void 0);
    return CloudbuildProjectsWorkerPoolsCreateRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsCreateRequest };
var CloudbuildProjectsWorkerPoolsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsWorkerPoolsCreateResponse, _super);
    function CloudbuildProjectsWorkerPoolsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsWorkerPoolsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsWorkerPoolsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WorkerPool)
    ], CloudbuildProjectsWorkerPoolsCreateResponse.prototype, "workerPool", void 0);
    return CloudbuildProjectsWorkerPoolsCreateResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsWorkerPoolsCreateResponse };
