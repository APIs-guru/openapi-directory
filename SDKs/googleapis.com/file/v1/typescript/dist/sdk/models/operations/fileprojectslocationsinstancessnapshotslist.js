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
var FileProjectsLocationsInstancesSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSnapshotsListPathParams, _super);
    function FileProjectsLocationsInstancesSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListPathParams.prototype, "parent", void 0);
    return FileProjectsLocationsInstancesSnapshotsListPathParams;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSnapshotsListPathParams };
var FileProjectsLocationsInstancesSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSnapshotsListQueryParams, _super);
    function FileProjectsLocationsInstancesSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return FileProjectsLocationsInstancesSnapshotsListQueryParams;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSnapshotsListQueryParams };
var FileProjectsLocationsInstancesSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSnapshotsListSecurity, _super);
    function FileProjectsLocationsInstancesSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FileProjectsLocationsInstancesSnapshotsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FileProjectsLocationsInstancesSnapshotsListSecurity.prototype, "oauth2c", void 0);
    return FileProjectsLocationsInstancesSnapshotsListSecurity;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSnapshotsListSecurity };
var FileProjectsLocationsInstancesSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSnapshotsListRequest, _super);
    function FileProjectsLocationsInstancesSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsInstancesSnapshotsListPathParams)
    ], FileProjectsLocationsInstancesSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsInstancesSnapshotsListQueryParams)
    ], FileProjectsLocationsInstancesSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsInstancesSnapshotsListSecurity)
    ], FileProjectsLocationsInstancesSnapshotsListRequest.prototype, "security", void 0);
    return FileProjectsLocationsInstancesSnapshotsListRequest;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSnapshotsListRequest };
var FileProjectsLocationsInstancesSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSnapshotsListResponse, _super);
    function FileProjectsLocationsInstancesSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSnapshotsResponse)
    ], FileProjectsLocationsInstancesSnapshotsListResponse.prototype, "listSnapshotsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FileProjectsLocationsInstancesSnapshotsListResponse.prototype, "statusCode", void 0);
    return FileProjectsLocationsInstancesSnapshotsListResponse;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSnapshotsListResponse };
