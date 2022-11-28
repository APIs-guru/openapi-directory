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
var CloudbuildProjectsLocationsWorkerPoolsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsGetPathParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetPathParams.prototype, "name", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsGetPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsGetPathParams };
var CloudbuildProjectsLocationsWorkerPoolsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsGetQueryParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsGetQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsGetQueryParams };
var CloudbuildProjectsLocationsWorkerPoolsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsGetSecurity, _super);
    function CloudbuildProjectsLocationsWorkerPoolsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsWorkerPoolsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsWorkerPoolsGetSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsGetSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsGetSecurity };
var CloudbuildProjectsLocationsWorkerPoolsGetRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsGetRequest, _super);
    function CloudbuildProjectsLocationsWorkerPoolsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsGetPathParams)
    ], CloudbuildProjectsLocationsWorkerPoolsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsGetQueryParams)
    ], CloudbuildProjectsLocationsWorkerPoolsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsGetSecurity)
    ], CloudbuildProjectsLocationsWorkerPoolsGetRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsGetRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsGetRequest };
var CloudbuildProjectsLocationsWorkerPoolsGetResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsGetResponse, _super);
    function CloudbuildProjectsLocationsWorkerPoolsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsWorkerPoolsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WorkerPool)
    ], CloudbuildProjectsLocationsWorkerPoolsGetResponse.prototype, "workerPool", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsGetResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsGetResponse };
