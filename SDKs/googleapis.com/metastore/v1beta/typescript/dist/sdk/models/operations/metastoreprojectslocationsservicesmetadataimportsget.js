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
var MetastoreProjectsLocationsServicesMetadataImportsGetPathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsGetPathParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetPathParams.prototype, "name", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsGetPathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsGetPathParams };
var MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams };
var MetastoreProjectsLocationsServicesMetadataImportsGetSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsGetSecurity, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsGetSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsGetSecurity };
var MetastoreProjectsLocationsServicesMetadataImportsGetRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsGetRequest, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsGetPathParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsGetQueryParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsGetSecurity)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsGetRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsGetRequest };
var MetastoreProjectsLocationsServicesMetadataImportsGetResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsGetResponse, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MetadataImport)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetResponse.prototype, "metadataImport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesMetadataImportsGetResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsGetResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsGetResponse };
