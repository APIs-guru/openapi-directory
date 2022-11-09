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
var DatafusionProjectsLocationsInstancesNamespacesListPathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesListPathParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListPathParams.prototype, "parent", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesListPathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesListPathParams };
export var DatafusionProjectsLocationsInstancesNamespacesListViewEnum;
(function (DatafusionProjectsLocationsInstancesNamespacesListViewEnum) {
    DatafusionProjectsLocationsInstancesNamespacesListViewEnum["NamespaceViewUnspecified"] = "NAMESPACE_VIEW_UNSPECIFIED";
    DatafusionProjectsLocationsInstancesNamespacesListViewEnum["NamespaceViewBasic"] = "NAMESPACE_VIEW_BASIC";
    DatafusionProjectsLocationsInstancesNamespacesListViewEnum["NamespaceViewFull"] = "NAMESPACE_VIEW_FULL";
})(DatafusionProjectsLocationsInstancesNamespacesListViewEnum || (DatafusionProjectsLocationsInstancesNamespacesListViewEnum = {}));
var DatafusionProjectsLocationsInstancesNamespacesListQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesListQueryParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListQueryParams.prototype, "view", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesListQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesListQueryParams };
var DatafusionProjectsLocationsInstancesNamespacesListSecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesListSecurity, _super);
    function DatafusionProjectsLocationsInstancesNamespacesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesNamespacesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesNamespacesListSecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesListSecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesListSecurity };
var DatafusionProjectsLocationsInstancesNamespacesListRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesListRequest, _super);
    function DatafusionProjectsLocationsInstancesNamespacesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesListPathParams)
    ], DatafusionProjectsLocationsInstancesNamespacesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesListQueryParams)
    ], DatafusionProjectsLocationsInstancesNamespacesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesListSecurity)
    ], DatafusionProjectsLocationsInstancesNamespacesListRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesListRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesListRequest };
var DatafusionProjectsLocationsInstancesNamespacesListResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesListResponse, _super);
    function DatafusionProjectsLocationsInstancesNamespacesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListNamespacesResponse)
    ], DatafusionProjectsLocationsInstancesNamespacesListResponse.prototype, "listNamespacesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesNamespacesListResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesListResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesListResponse };
