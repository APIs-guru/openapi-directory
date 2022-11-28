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
var RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributesConfig" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams.prototype, "attributesConfig", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams };
var RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams };
var RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity };
var RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest };
var RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2AttributesConfig)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse.prototype, "googleCloudRetailV2AttributesConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse };
