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
var IntegrationsProjectsLocationsProductsIntegrationsVersionsArchivePathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsArchivePathParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchivePathParams.prototype, "name", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsArchivePathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsArchivePathParams };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsVersionsArchivePathParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveQueryParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveSecurity)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse.prototype, "googleCloudIntegrationsV1alphaArchiveIntegrationVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse };
