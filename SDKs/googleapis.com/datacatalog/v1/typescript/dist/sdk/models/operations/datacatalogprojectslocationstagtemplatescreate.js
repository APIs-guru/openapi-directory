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
var DatacatalogProjectsLocationsTagTemplatesCreatePathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesCreatePathParams, _super);
    function DatacatalogProjectsLocationsTagTemplatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreatePathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsTagTemplatesCreatePathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesCreatePathParams };
var DatacatalogProjectsLocationsTagTemplatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesCreateQueryParams, _super);
    function DatacatalogProjectsLocationsTagTemplatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagTemplateId" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "tagTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsTagTemplatesCreateQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesCreateQueryParams };
var DatacatalogProjectsLocationsTagTemplatesCreateSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesCreateSecurity, _super);
    function DatacatalogProjectsLocationsTagTemplatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsTagTemplatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsTagTemplatesCreateSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsTagTemplatesCreateSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesCreateSecurity };
var DatacatalogProjectsLocationsTagTemplatesCreateRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesCreateRequest, _super);
    function DatacatalogProjectsLocationsTagTemplatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTagTemplatesCreatePathParams)
    ], DatacatalogProjectsLocationsTagTemplatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTagTemplatesCreateQueryParams)
    ], DatacatalogProjectsLocationsTagTemplatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1TagTemplateInput)
    ], DatacatalogProjectsLocationsTagTemplatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTagTemplatesCreateSecurity)
    ], DatacatalogProjectsLocationsTagTemplatesCreateRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsTagTemplatesCreateRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesCreateRequest };
var DatacatalogProjectsLocationsTagTemplatesCreateResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesCreateResponse, _super);
    function DatacatalogProjectsLocationsTagTemplatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1TagTemplate)
    ], DatacatalogProjectsLocationsTagTemplatesCreateResponse.prototype, "googleCloudDatacatalogV1TagTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTagTemplatesCreateResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsTagTemplatesCreateResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesCreateResponse };
