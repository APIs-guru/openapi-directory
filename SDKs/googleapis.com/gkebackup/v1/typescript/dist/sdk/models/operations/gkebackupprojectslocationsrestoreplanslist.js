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
var GkebackupProjectsLocationsRestorePlansListPathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansListPathParams, _super);
    function GkebackupProjectsLocationsRestorePlansListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListPathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsRestorePlansListPathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansListPathParams };
var GkebackupProjectsLocationsRestorePlansListQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansListQueryParams, _super);
    function GkebackupProjectsLocationsRestorePlansListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsRestorePlansListQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansListQueryParams };
var GkebackupProjectsLocationsRestorePlansListSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansListSecurity, _super);
    function GkebackupProjectsLocationsRestorePlansListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsRestorePlansListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsRestorePlansListSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsRestorePlansListSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansListSecurity };
var GkebackupProjectsLocationsRestorePlansListRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansListRequest, _super);
    function GkebackupProjectsLocationsRestorePlansListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansListPathParams)
    ], GkebackupProjectsLocationsRestorePlansListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansListQueryParams)
    ], GkebackupProjectsLocationsRestorePlansListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansListSecurity)
    ], GkebackupProjectsLocationsRestorePlansListRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsRestorePlansListRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansListRequest };
var GkebackupProjectsLocationsRestorePlansListResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansListResponse, _super);
    function GkebackupProjectsLocationsRestorePlansListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRestorePlansResponse)
    ], GkebackupProjectsLocationsRestorePlansListResponse.prototype, "listRestorePlansResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansListResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsRestorePlansListResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansListResponse };
