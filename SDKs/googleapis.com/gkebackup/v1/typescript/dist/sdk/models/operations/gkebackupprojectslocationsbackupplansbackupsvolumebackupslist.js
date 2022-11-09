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
var GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams };
var GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams };
var GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity };
var GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest };
var GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListVolumeBackupsResponse)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse.prototype, "listVolumeBackupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse };
