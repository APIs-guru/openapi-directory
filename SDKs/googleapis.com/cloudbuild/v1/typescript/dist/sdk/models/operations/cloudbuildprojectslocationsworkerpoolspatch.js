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
var CloudbuildProjectsLocationsWorkerPoolsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsPatchPathParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchPathParams.prototype, "name", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsPatchPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsPatchPathParams };
var CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams.prototype, "validateOnly", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams };
var CloudbuildProjectsLocationsWorkerPoolsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsPatchSecurity, _super);
    function CloudbuildProjectsLocationsWorkerPoolsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsPatchSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsPatchSecurity };
var CloudbuildProjectsLocationsWorkerPoolsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsPatchRequest, _super);
    function CloudbuildProjectsLocationsWorkerPoolsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsPatchPathParams)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkerPoolInput)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsPatchSecurity)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsPatchRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsPatchRequest };
var CloudbuildProjectsLocationsWorkerPoolsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsPatchResponse, _super);
    function CloudbuildProjectsLocationsWorkerPoolsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsWorkerPoolsPatchResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsPatchResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsPatchResponse };
