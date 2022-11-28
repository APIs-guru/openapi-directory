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
var VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams.prototype, "parent", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams };
export var VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum;
(function (VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum) {
    VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum["UtilizationReportViewUnspecified"] = "UTILIZATION_REPORT_VIEW_UNSPECIFIED";
    VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum["Basic"] = "BASIC";
    VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum["Full"] = "FULL";
})(VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum || (VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum = {}));
var VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams.prototype, "view", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams };
var VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity };
var VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest };
var VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUtilizationReportsResponse)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse.prototype, "listUtilizationReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse };
