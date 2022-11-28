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
var IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams, _super);
    function IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams };
var IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams, _super);
    function IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams };
var IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity, _super);
    function IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity };
var IntegrationsProjectsLocationsProductsListTaskEntitiesRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsListTaskEntitiesRequest, _super);
    function IntegrationsProjectsLocationsProductsListTaskEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsListTaskEntitiesRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsListTaskEntitiesRequest };
var IntegrationsProjectsLocationsProductsListTaskEntitiesResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsListTaskEntitiesResponse, _super);
    function IntegrationsProjectsLocationsProductsListTaskEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesResponse.prototype, "googleCloudIntegrationsV1alphaListTaskEntitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsListTaskEntitiesResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsListTaskEntitiesResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsListTaskEntitiesResponse };
