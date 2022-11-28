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
var DatacatalogProjectsLocationsTaxonomiesCreatePathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesCreatePathParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreatePathParams.prototype, "parent", void 0);
    return DatacatalogProjectsLocationsTaxonomiesCreatePathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesCreatePathParams };
var DatacatalogProjectsLocationsTaxonomiesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesCreateQueryParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsTaxonomiesCreateQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesCreateQueryParams };
var DatacatalogProjectsLocationsTaxonomiesCreateSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesCreateSecurity, _super);
    function DatacatalogProjectsLocationsTaxonomiesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsTaxonomiesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsTaxonomiesCreateSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsTaxonomiesCreateSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesCreateSecurity };
var DatacatalogProjectsLocationsTaxonomiesCreateRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesCreateRequest, _super);
    function DatacatalogProjectsLocationsTaxonomiesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesCreatePathParams)
    ], DatacatalogProjectsLocationsTaxonomiesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesCreateQueryParams)
    ], DatacatalogProjectsLocationsTaxonomiesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1beta1TaxonomyInput)
    ], DatacatalogProjectsLocationsTaxonomiesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesCreateSecurity)
    ], DatacatalogProjectsLocationsTaxonomiesCreateRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsTaxonomiesCreateRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesCreateRequest };
var DatacatalogProjectsLocationsTaxonomiesCreateResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesCreateResponse, _super);
    function DatacatalogProjectsLocationsTaxonomiesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatacatalogV1beta1Taxonomy)
    ], DatacatalogProjectsLocationsTaxonomiesCreateResponse.prototype, "googleCloudDatacatalogV1beta1Taxonomy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTaxonomiesCreateResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsTaxonomiesCreateResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesCreateResponse };
