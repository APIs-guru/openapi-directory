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
var GkebackupProjectsLocationsBackupPlansListPathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansListPathParams, _super);
    function GkebackupProjectsLocationsBackupPlansListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListPathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsBackupPlansListPathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansListPathParams };
var GkebackupProjectsLocationsBackupPlansListQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansListQueryParams, _super);
    function GkebackupProjectsLocationsBackupPlansListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsBackupPlansListQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansListQueryParams };
var GkebackupProjectsLocationsBackupPlansListSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansListSecurity, _super);
    function GkebackupProjectsLocationsBackupPlansListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsBackupPlansListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsBackupPlansListSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsBackupPlansListSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansListSecurity };
var GkebackupProjectsLocationsBackupPlansListRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansListRequest, _super);
    function GkebackupProjectsLocationsBackupPlansListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansListPathParams)
    ], GkebackupProjectsLocationsBackupPlansListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansListQueryParams)
    ], GkebackupProjectsLocationsBackupPlansListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansListSecurity)
    ], GkebackupProjectsLocationsBackupPlansListRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsBackupPlansListRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansListRequest };
var GkebackupProjectsLocationsBackupPlansListResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansListResponse, _super);
    function GkebackupProjectsLocationsBackupPlansListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBackupPlansResponse)
    ], GkebackupProjectsLocationsBackupPlansListResponse.prototype, "listBackupPlansResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsBackupPlansListResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsBackupPlansListResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansListResponse };
