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
var ContainerProjectsZonesClustersNodePoolsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsUpdatePathParams, _super);
    function ContainerProjectsZonesClustersNodePoolsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdatePathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodePoolId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdatePathParams.prototype, "nodePoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdatePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdatePathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersNodePoolsUpdatePathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsUpdatePathParams };
var ContainerProjectsZonesClustersNodePoolsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsUpdateQueryParams, _super);
    function ContainerProjectsZonesClustersNodePoolsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersNodePoolsUpdateQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsUpdateQueryParams };
var ContainerProjectsZonesClustersNodePoolsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsUpdateSecurity, _super);
    function ContainerProjectsZonesClustersNodePoolsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersNodePoolsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersNodePoolsUpdateSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersNodePoolsUpdateSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsUpdateSecurity };
var ContainerProjectsZonesClustersNodePoolsUpdateRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsUpdateRequest, _super);
    function ContainerProjectsZonesClustersNodePoolsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsUpdatePathParams)
    ], ContainerProjectsZonesClustersNodePoolsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsUpdateQueryParams)
    ], ContainerProjectsZonesClustersNodePoolsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateNodePoolRequest)
    ], ContainerProjectsZonesClustersNodePoolsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersNodePoolsUpdateSecurity)
    ], ContainerProjectsZonesClustersNodePoolsUpdateRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersNodePoolsUpdateRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsUpdateRequest };
var ContainerProjectsZonesClustersNodePoolsUpdateResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersNodePoolsUpdateResponse, _super);
    function ContainerProjectsZonesClustersNodePoolsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersNodePoolsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersNodePoolsUpdateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersNodePoolsUpdateResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersNodePoolsUpdateResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersNodePoolsUpdateResponse };
