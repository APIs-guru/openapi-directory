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
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams.prototype, "name", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftPathParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftQueryParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaLiftSuspensionRequest)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaLiftSuspensionResponse)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse.prototype, "googleCloudIntegrationsV1alphaLiftSuspensionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse };
