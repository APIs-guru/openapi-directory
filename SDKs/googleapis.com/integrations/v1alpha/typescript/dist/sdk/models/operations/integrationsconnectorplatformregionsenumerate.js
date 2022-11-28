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
var IntegrationsConnectorPlatformRegionsEnumerateQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsConnectorPlatformRegionsEnumerateQueryParams, _super);
    function IntegrationsConnectorPlatformRegionsEnumerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsConnectorPlatformRegionsEnumerateQueryParams;
}(SpeakeasyBase));
export { IntegrationsConnectorPlatformRegionsEnumerateQueryParams };
var IntegrationsConnectorPlatformRegionsEnumerateSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsConnectorPlatformRegionsEnumerateSecurity, _super);
    function IntegrationsConnectorPlatformRegionsEnumerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsConnectorPlatformRegionsEnumerateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsConnectorPlatformRegionsEnumerateSecurity.prototype, "oauth2c", void 0);
    return IntegrationsConnectorPlatformRegionsEnumerateSecurity;
}(SpeakeasyBase));
export { IntegrationsConnectorPlatformRegionsEnumerateSecurity };
var IntegrationsConnectorPlatformRegionsEnumerateRequest = /** @class */ (function (_super) {
    __extends(IntegrationsConnectorPlatformRegionsEnumerateRequest, _super);
    function IntegrationsConnectorPlatformRegionsEnumerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsConnectorPlatformRegionsEnumerateQueryParams)
    ], IntegrationsConnectorPlatformRegionsEnumerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsConnectorPlatformRegionsEnumerateSecurity)
    ], IntegrationsConnectorPlatformRegionsEnumerateRequest.prototype, "security", void 0);
    return IntegrationsConnectorPlatformRegionsEnumerateRequest;
}(SpeakeasyBase));
export { IntegrationsConnectorPlatformRegionsEnumerateRequest };
var IntegrationsConnectorPlatformRegionsEnumerateResponse = /** @class */ (function (_super) {
    __extends(IntegrationsConnectorPlatformRegionsEnumerateResponse, _super);
    function IntegrationsConnectorPlatformRegionsEnumerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsConnectorPlatformRegionsEnumerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse)
    ], IntegrationsConnectorPlatformRegionsEnumerateResponse.prototype, "googleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsConnectorPlatformRegionsEnumerateResponse.prototype, "statusCode", void 0);
    return IntegrationsConnectorPlatformRegionsEnumerateResponse;
}(SpeakeasyBase));
export { IntegrationsConnectorPlatformRegionsEnumerateResponse };
