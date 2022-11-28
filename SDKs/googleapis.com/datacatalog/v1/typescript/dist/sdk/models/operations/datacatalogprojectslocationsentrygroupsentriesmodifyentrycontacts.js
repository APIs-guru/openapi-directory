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
var DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams.prototype, "name", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity };
var DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1ModifyEntryContactsRequest)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest };
var DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1Contacts)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse.prototype, "googleCloudDatacatalogV1Contacts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse };
