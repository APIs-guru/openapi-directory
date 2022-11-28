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
var DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams.prototype, "name", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams };
var DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity };
var DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest };
var DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse, _super);
    function DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse.prototype, "googleCloudDatacatalogV1StarEntryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse };
