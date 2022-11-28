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
var DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryId" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "entryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity };
var DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1EntryInput)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest };
var DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1Entry)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse.prototype, "googleCloudDatacatalogV1Entry", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse };
