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
var MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams.prototype, "parent", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams };
var MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadataImportId" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "metadataImportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams };
var MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity };
var MetastoreProjectsLocationsServicesMetadataImportsCreateRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsCreateRequest, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsCreatePathParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsCreateQueryParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MetadataImportInput)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsCreateRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsCreateRequest };
var MetastoreProjectsLocationsServicesMetadataImportsCreateResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsCreateResponse, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesMetadataImportsCreateResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsCreateResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsCreateResponse };
