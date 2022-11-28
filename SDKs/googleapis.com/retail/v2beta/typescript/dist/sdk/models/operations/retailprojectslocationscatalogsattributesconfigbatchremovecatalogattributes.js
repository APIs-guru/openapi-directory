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
var RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributesConfig" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams.prototype, "attributesConfig", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams };
var RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams };
var RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity };
var RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest };
var RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse.prototype, "googleCloudRetailV2betaBatchRemoveCatalogAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse };
