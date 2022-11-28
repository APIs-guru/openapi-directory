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
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams.prototype, "name", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolvePathParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveQueryParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse.prototype, "googleCloudIntegrationsV1alphaResolveSuspensionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse };
