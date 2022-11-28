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
var DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams, _super);
    function DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams };
var DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams, _super);
    function DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagTemplateFieldId" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "tagTemplateFieldId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams };
var DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity, _super);
    function DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity };
var DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest, _super);
    function DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1TagTemplateFieldInput)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest };
var DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse, _super);
    function DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1TagTemplateField)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse.prototype, "googleCloudDatacatalogV1TagTemplateField", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse };
