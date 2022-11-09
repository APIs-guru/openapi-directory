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
var GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams };
var GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=backupId" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "backupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams };
var GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity };
var GkebackupProjectsLocationsBackupPlansBackupsCreateRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsCreateRequest, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Backup)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsCreateRequest };
var GkebackupProjectsLocationsBackupPlansBackupsCreateResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansBackupsCreateResponse, _super);
    function GkebackupProjectsLocationsBackupPlansBackupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsBackupPlansBackupsCreateResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsBackupPlansBackupsCreateResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansBackupsCreateResponse };
