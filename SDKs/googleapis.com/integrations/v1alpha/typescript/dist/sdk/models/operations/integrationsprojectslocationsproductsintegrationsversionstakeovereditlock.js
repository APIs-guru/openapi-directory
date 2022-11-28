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
var IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationVersion" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams.prototype, "integrationVersion", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockPathParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockQueryParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest };
var IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse.prototype, "googleCloudIntegrationsV1alphaTakeoverEditLockResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse };
