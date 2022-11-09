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
var CloudbuildProjectsLocationsWorkerPoolsDeletePathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsDeletePathParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeletePathParams.prototype, "name", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsDeletePathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsDeletePathParams };
var CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=etag" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams };
var CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity, _super);
    function CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity };
var CloudbuildProjectsLocationsWorkerPoolsDeleteRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsDeleteRequest, _super);
    function CloudbuildProjectsLocationsWorkerPoolsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsDeletePathParams)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsDeleteRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsDeleteRequest };
var CloudbuildProjectsLocationsWorkerPoolsDeleteResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsDeleteResponse, _super);
    function CloudbuildProjectsLocationsWorkerPoolsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsWorkerPoolsDeleteResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsDeleteResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsDeleteResponse };
