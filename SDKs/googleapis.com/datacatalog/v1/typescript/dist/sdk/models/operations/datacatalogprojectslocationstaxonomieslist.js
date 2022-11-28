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
var DatacatalogProjectsLocationsTaxonomiesListPathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesListPathParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListPathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsTaxonomiesListPathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesListPathParams };
var DatacatalogProjectsLocationsTaxonomiesListQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesListQueryParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsTaxonomiesListQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesListQueryParams };
var DatacatalogProjectsLocationsTaxonomiesListSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesListSecurity, _super);
    function DatacatalogProjectsLocationsTaxonomiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsTaxonomiesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsTaxonomiesListSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsTaxonomiesListSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesListSecurity };
var DatacatalogProjectsLocationsTaxonomiesListRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesListRequest, _super);
    function DatacatalogProjectsLocationsTaxonomiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesListPathParams)
    ], DatacatalogProjectsLocationsTaxonomiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesListQueryParams)
    ], DatacatalogProjectsLocationsTaxonomiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesListSecurity)
    ], DatacatalogProjectsLocationsTaxonomiesListRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsTaxonomiesListRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesListRequest };
var DatacatalogProjectsLocationsTaxonomiesListResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesListResponse, _super);
    function DatacatalogProjectsLocationsTaxonomiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1ListTaxonomiesResponse)
    ], DatacatalogProjectsLocationsTaxonomiesListResponse.prototype, "googleCloudDatacatalogV1ListTaxonomiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTaxonomiesListResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsTaxonomiesListResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesListResponse };
