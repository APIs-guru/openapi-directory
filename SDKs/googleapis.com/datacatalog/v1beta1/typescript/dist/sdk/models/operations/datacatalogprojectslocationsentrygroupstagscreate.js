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
var DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams };
var DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams, _super);
    function DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams };
var DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity, _super);
    function DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity };
var DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest, _super);
    function DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1beta1TagInput)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest };
var DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse, _super);
    function DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1beta1Tag)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse.prototype, "googleCloudDatacatalogV1beta1Tag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse };
