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
var ContainerProjectsZonesClustersNodePoolsSetManagementPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetManagementPathParams, _super);
    function ContainerProjectsZonesClustersNodePoolsSetManagementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementPathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodePoolId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementPathParams.prototype, "nodePoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementPathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetManagementPathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetManagementPathParams };
var ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams, _super);
    function ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams };
var ContainerProjectsZonesClustersNodePoolsSetManagementSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetManagementSecurity, _super);
    function ContainerProjectsZonesClustersNodePoolsSetManagementSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetManagementSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetManagementSecurity };
var ContainerProjectsZonesClustersNodePoolsSetManagementRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetManagementRequest, _super);
    function ContainerProjectsZonesClustersNodePoolsSetManagementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsSetManagementPathParams)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetNodePoolManagementRequest)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsSetManagementSecurity)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetManagementRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetManagementRequest };
var ContainerProjectsZonesClustersNodePoolsSetManagementResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsSetManagementResponse, _super);
    function ContainerProjectsZonesClustersNodePoolsSetManagementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersNodePoolsSetManagementResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersNodePoolsSetManagementResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsSetManagementResponse };
