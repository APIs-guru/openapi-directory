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
var MetastoreProjectsLocationsServicesMetadataImportsListPathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsListPathParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListPathParams.prototype, "parent", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsListPathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsListPathParams };
var MetastoreProjectsLocationsServicesMetadataImportsListQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsListQueryParams, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsListQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsListQueryParams };
var MetastoreProjectsLocationsServicesMetadataImportsListSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsListSecurity, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesMetadataImportsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesMetadataImportsListSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsListSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsListSecurity };
var MetastoreProjectsLocationsServicesMetadataImportsListRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsListRequest, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsListPathParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsListQueryParams)
    ], MetastoreProjectsLocationsServicesMetadataImportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesMetadataImportsListSecurity)
    ], MetastoreProjectsLocationsServicesMetadataImportsListRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsListRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsListRequest };
var MetastoreProjectsLocationsServicesMetadataImportsListResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesMetadataImportsListResponse, _super);
    function MetastoreProjectsLocationsServicesMetadataImportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesMetadataImportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMetadataImportsResponse)
    ], MetastoreProjectsLocationsServicesMetadataImportsListResponse.prototype, "listMetadataImportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesMetadataImportsListResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesMetadataImportsListResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesMetadataImportsListResponse };
