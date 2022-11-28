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
var ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams, _super);
    function ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams.prototype, "parent", void 0);
    return ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams };
var ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams, _super);
    function ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams };
var ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest, _super);
    function ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest.prototype, "queryParams", void 0);
    return ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest };
var ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse, _super);
    function ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetOpenIdConfigResponse)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse.prototype, "getOpenIdConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse };
