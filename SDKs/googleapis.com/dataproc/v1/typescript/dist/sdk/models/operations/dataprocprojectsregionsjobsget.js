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
var DataprocProjectsRegionsJobsGetPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsGetPathParams, _super);
    function DataprocProjectsRegionsJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetPathParams.prototype, "region", void 0);
    return DataprocProjectsRegionsJobsGetPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsGetPathParams };
var DataprocProjectsRegionsJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsGetQueryParams, _super);
    function DataprocProjectsRegionsJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsJobsGetQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsGetQueryParams };
var DataprocProjectsRegionsJobsGetSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsGetSecurity, _super);
    function DataprocProjectsRegionsJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsJobsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsJobsGetSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsJobsGetSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsGetSecurity };
var DataprocProjectsRegionsJobsGetRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsGetRequest, _super);
    function DataprocProjectsRegionsJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsJobsGetPathParams)
    ], DataprocProjectsRegionsJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsJobsGetQueryParams)
    ], DataprocProjectsRegionsJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsJobsGetSecurity)
    ], DataprocProjectsRegionsJobsGetRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsJobsGetRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsGetRequest };
var DataprocProjectsRegionsJobsGetResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsGetResponse, _super);
    function DataprocProjectsRegionsJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataprocProjectsRegionsJobsGetResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsJobsGetResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsJobsGetResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsGetResponse };
