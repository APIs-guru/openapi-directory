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
var IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams };
var IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newIntegration" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "newIntegration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams };
var IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity, _super);
    function IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity };
var IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest, _super);
    function IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreatePathParams)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateQueryParams)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest };
var IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse, _super);
    function IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse.prototype, "googleCloudIntegrationsV1alphaIntegrationTemplateVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse };
