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
var ContainerProjectsLocationsClustersSetMonitoringPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMonitoringPathParams, _super);
    function ContainerProjectsLocationsClustersSetMonitoringPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringPathParams.prototype, "name", void 0);
    return ContainerProjectsLocationsClustersSetMonitoringPathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMonitoringPathParams };
var ContainerProjectsLocationsClustersSetMonitoringQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMonitoringQueryParams, _super);
    function ContainerProjectsLocationsClustersSetMonitoringQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsLocationsClustersSetMonitoringQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMonitoringQueryParams };
var ContainerProjectsLocationsClustersSetMonitoringSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMonitoringSecurity, _super);
    function ContainerProjectsLocationsClustersSetMonitoringSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersSetMonitoringSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersSetMonitoringSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersSetMonitoringSecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMonitoringSecurity };
var ContainerProjectsLocationsClustersSetMonitoringRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMonitoringRequest, _super);
    function ContainerProjectsLocationsClustersSetMonitoringRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetMonitoringPathParams)
    ], ContainerProjectsLocationsClustersSetMonitoringRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetMonitoringQueryParams)
    ], ContainerProjectsLocationsClustersSetMonitoringRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetMonitoringServiceRequest)
    ], ContainerProjectsLocationsClustersSetMonitoringRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetMonitoringSecurity)
    ], ContainerProjectsLocationsClustersSetMonitoringRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersSetMonitoringRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMonitoringRequest };
var ContainerProjectsLocationsClustersSetMonitoringResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMonitoringResponse, _super);
    function ContainerProjectsLocationsClustersSetMonitoringResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMonitoringResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsLocationsClustersSetMonitoringResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersSetMonitoringResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersSetMonitoringResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMonitoringResponse };
