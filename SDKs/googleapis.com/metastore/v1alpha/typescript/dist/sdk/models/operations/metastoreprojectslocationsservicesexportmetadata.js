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
var MetastoreProjectsLocationsServicesExportMetadataPathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesExportMetadataPathParams, _super);
    function MetastoreProjectsLocationsServicesExportMetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=service" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataPathParams.prototype, "service", void 0);
    return MetastoreProjectsLocationsServicesExportMetadataPathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesExportMetadataPathParams };
var MetastoreProjectsLocationsServicesExportMetadataQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesExportMetadataQueryParams, _super);
    function MetastoreProjectsLocationsServicesExportMetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesExportMetadataQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesExportMetadataQueryParams };
var MetastoreProjectsLocationsServicesExportMetadataSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesExportMetadataSecurity, _super);
    function MetastoreProjectsLocationsServicesExportMetadataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesExportMetadataSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesExportMetadataSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesExportMetadataSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesExportMetadataSecurity };
var MetastoreProjectsLocationsServicesExportMetadataRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesExportMetadataRequest, _super);
    function MetastoreProjectsLocationsServicesExportMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesExportMetadataPathParams)
    ], MetastoreProjectsLocationsServicesExportMetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesExportMetadataQueryParams)
    ], MetastoreProjectsLocationsServicesExportMetadataRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExportMetadataRequest)
    ], MetastoreProjectsLocationsServicesExportMetadataRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesExportMetadataSecurity)
    ], MetastoreProjectsLocationsServicesExportMetadataRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesExportMetadataRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesExportMetadataRequest };
var MetastoreProjectsLocationsServicesExportMetadataResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesExportMetadataResponse, _super);
    function MetastoreProjectsLocationsServicesExportMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesExportMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], MetastoreProjectsLocationsServicesExportMetadataResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesExportMetadataResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesExportMetadataResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesExportMetadataResponse };
