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
var ContainerProjectsLocationsClustersNodePoolsDeletePathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsDeletePathParams, _super);
    function ContainerProjectsLocationsClustersNodePoolsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeletePathParams.prototype, "name", void 0);
    return ContainerProjectsLocationsClustersNodePoolsDeletePathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsDeletePathParams };
var ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams, _super);
    function ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodePoolId" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "nodePoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams.prototype, "zone", void 0);
    return ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams };
var ContainerProjectsLocationsClustersNodePoolsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsDeleteSecurity, _super);
    function ContainerProjectsLocationsClustersNodePoolsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersNodePoolsDeleteSecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsDeleteSecurity };
var ContainerProjectsLocationsClustersNodePoolsDeleteRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsDeleteRequest, _super);
    function ContainerProjectsLocationsClustersNodePoolsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsDeletePathParams)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsDeleteSecurity)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersNodePoolsDeleteRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsDeleteRequest };
var ContainerProjectsLocationsClustersNodePoolsDeleteResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsDeleteResponse, _super);
    function ContainerProjectsLocationsClustersNodePoolsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersNodePoolsDeleteResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersNodePoolsDeleteResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsDeleteResponse };
