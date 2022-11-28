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
var ContainerProjectsZonesClustersNodePoolsSetSizePathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetSizePathParams, _super);
    function ContainerProjectsZonesClustersNodePoolsSetSizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizePathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodePoolId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizePathParams.prototype, "nodePoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizePathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetSizePathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetSizePathParams };
var ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams, _super);
    function ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams };
var ContainerProjectsZonesClustersNodePoolsSetSizeSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetSizeSecurity, _super);
    function ContainerProjectsZonesClustersNodePoolsSetSizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetSizeSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetSizeSecurity };
var ContainerProjectsZonesClustersNodePoolsSetSizeRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetSizeRequest, _super);
    function ContainerProjectsZonesClustersNodePoolsSetSizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsSetSizePathParams)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetNodePoolSizeRequest)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsSetSizeSecurity)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetSizeRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetSizeRequest };
var ContainerProjectsZonesClustersNodePoolsSetSizeResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetSizeResponse, _super);
    function ContainerProjectsZonesClustersNodePoolsSetSizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersNodePoolsSetSizeResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetSizeResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetSizeResponse };
