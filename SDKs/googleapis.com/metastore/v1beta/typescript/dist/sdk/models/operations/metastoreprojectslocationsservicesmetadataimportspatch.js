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
var MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams.prototype, "name", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams };
var MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams };
var MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity };
var MetastoreProjectsLocationsServicesMetadataImportsPatchRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsPatchRequest, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsPatchQueryParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MetadataImport)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsPatchRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsPatchRequest };
var MetastoreProjectsLocationsServicesMetadataImportsPatchResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsPatchResponse, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesMetadataImportsPatchResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsPatchResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsPatchResponse };
