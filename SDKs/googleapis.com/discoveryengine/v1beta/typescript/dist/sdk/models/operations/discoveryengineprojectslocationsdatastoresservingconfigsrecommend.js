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
var DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=servingConfig" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams.prototype, "servingConfig", void 0);
    return DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams };
var DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams.prototype, "uploadProtocol", void 0);
    return DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams };
var DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity };
var DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaRecommendRequest)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest };
var DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaRecommendResponse)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse.prototype, "googleCloudDiscoveryengineV1betaRecommendResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse };
