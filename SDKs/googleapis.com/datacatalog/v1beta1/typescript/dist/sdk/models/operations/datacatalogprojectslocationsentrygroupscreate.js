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
var DatacatalogProjectsLocationsEntryGroupsCreatePathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsCreatePathParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreatePathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsEntryGroupsCreatePathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsCreatePathParams };
var DatacatalogProjectsLocationsEntryGroupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsCreateQueryParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryGroupId" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "entryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsEntryGroupsCreateQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsCreateQueryParams };
var DatacatalogProjectsLocationsEntryGroupsCreateSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsCreateSecurity, _super);
    function DatacatalogProjectsLocationsEntryGroupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsEntryGroupsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsEntryGroupsCreateSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsEntryGroupsCreateSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsCreateSecurity };
var DatacatalogProjectsLocationsEntryGroupsCreateRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsCreateRequest, _super);
    function DatacatalogProjectsLocationsEntryGroupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsCreatePathParams)
    ], DatacatalogProjectsLocationsEntryGroupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsCreateQueryParams)
    ], DatacatalogProjectsLocationsEntryGroupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1beta1EntryGroupInput)
    ], DatacatalogProjectsLocationsEntryGroupsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsCreateSecurity)
    ], DatacatalogProjectsLocationsEntryGroupsCreateRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsEntryGroupsCreateRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsCreateRequest };
var DatacatalogProjectsLocationsEntryGroupsCreateResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsCreateResponse, _super);
    function DatacatalogProjectsLocationsEntryGroupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1beta1EntryGroup)
    ], DatacatalogProjectsLocationsEntryGroupsCreateResponse.prototype, "googleCloudDatacatalogV1beta1EntryGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsEntryGroupsCreateResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsEntryGroupsCreateResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsCreateResponse };
