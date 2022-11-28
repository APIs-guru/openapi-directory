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
var DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity };
var DatacatalogProjectsLocationsEntryGroupsEntriesListRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesListRequest, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesListRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesListRequest };
var DatacatalogProjectsLocationsEntryGroupsEntriesListResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesListResponse, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1beta1ListEntriesResponse)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListResponse.prototype, "googleCloudDatacatalogV1beta1ListEntriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesListResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesListResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesListResponse };
