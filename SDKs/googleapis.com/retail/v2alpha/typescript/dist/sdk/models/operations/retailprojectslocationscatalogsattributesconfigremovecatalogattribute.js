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
var RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributesConfig" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams.prototype, "attributesConfig", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams };
var RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams };
var RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity };
var RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest };
var RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse, _super);
    function RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaAttributesConfig)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse.prototype, "googleCloudRetailV2alphaAttributesConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse };
