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
var CloudbuildProjectsLocationsWorkerPoolsListPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsListPathParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListPathParams.prototype, "parent", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsListPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsListPathParams };
var CloudbuildProjectsLocationsWorkerPoolsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsListQueryParams, _super);
    function CloudbuildProjectsLocationsWorkerPoolsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsListQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsListQueryParams };
var CloudbuildProjectsLocationsWorkerPoolsListSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsListSecurity, _super);
    function CloudbuildProjectsLocationsWorkerPoolsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsWorkerPoolsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsWorkerPoolsListSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsListSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsListSecurity };
var CloudbuildProjectsLocationsWorkerPoolsListRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsListRequest, _super);
    function CloudbuildProjectsLocationsWorkerPoolsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsListPathParams)
    ], CloudbuildProjectsLocationsWorkerPoolsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsListQueryParams)
    ], CloudbuildProjectsLocationsWorkerPoolsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsWorkerPoolsListSecurity)
    ], CloudbuildProjectsLocationsWorkerPoolsListRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsListRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsListRequest };
var CloudbuildProjectsLocationsWorkerPoolsListResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsWorkerPoolsListResponse, _super);
    function CloudbuildProjectsLocationsWorkerPoolsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsWorkerPoolsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListWorkerPoolsResponse)
    ], CloudbuildProjectsLocationsWorkerPoolsListResponse.prototype, "listWorkerPoolsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsWorkerPoolsListResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsWorkerPoolsListResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsWorkerPoolsListResponse };
