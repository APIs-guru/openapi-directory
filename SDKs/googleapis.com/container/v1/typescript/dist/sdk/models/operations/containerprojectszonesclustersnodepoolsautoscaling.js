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
var ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams, _super);
    function ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodePoolId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams.prototype, "nodePoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams };
var ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams, _super);
    function ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams };
var ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity, _super);
    function ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity };
var ContainerProjectsZonesClustersNodePoolsAutoscalingRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsAutoscalingRequest, _super);
    function ContainerProjectsZonesClustersNodePoolsAutoscalingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetNodePoolAutoscalingRequest)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersNodePoolsAutoscalingRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsAutoscalingRequest };
var ContainerProjectsZonesClustersNodePoolsAutoscalingResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsAutoscalingResponse, _super);
    function ContainerProjectsZonesClustersNodePoolsAutoscalingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersNodePoolsAutoscalingResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersNodePoolsAutoscalingResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsAutoscalingResponse };
