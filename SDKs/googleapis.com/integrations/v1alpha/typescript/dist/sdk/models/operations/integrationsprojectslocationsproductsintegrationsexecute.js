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
var IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams.prototype, "name", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity };
var IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest };
var IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse.prototype, "googleCloudIntegrationsV1alphaExecuteIntegrationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse };
