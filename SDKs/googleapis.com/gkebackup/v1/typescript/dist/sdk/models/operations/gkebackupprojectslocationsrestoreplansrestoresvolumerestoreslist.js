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
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListVolumeRestoresResponse)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse.prototype, "listVolumeRestoresResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse };
