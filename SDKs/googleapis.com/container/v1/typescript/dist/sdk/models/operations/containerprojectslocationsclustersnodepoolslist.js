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
var ContainerProjectsLocationsClustersNodePoolsListPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsListPathParams, _super);
    function ContainerProjectsLocationsClustersNodePoolsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListPathParams.prototype, "parent", void 0);
    return ContainerProjectsLocationsClustersNodePoolsListPathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsListPathParams };
var ContainerProjectsLocationsClustersNodePoolsListQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsListQueryParams, _super);
    function ContainerProjectsLocationsClustersNodePoolsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListQueryParams.prototype, "zone", void 0);
    return ContainerProjectsLocationsClustersNodePoolsListQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsListQueryParams };
var ContainerProjectsLocationsClustersNodePoolsListSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsListSecurity, _super);
    function ContainerProjectsLocationsClustersNodePoolsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersNodePoolsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersNodePoolsListSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersNodePoolsListSecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsListSecurity };
var ContainerProjectsLocationsClustersNodePoolsListRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsListRequest, _super);
    function ContainerProjectsLocationsClustersNodePoolsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsListPathParams)
    ], ContainerProjectsLocationsClustersNodePoolsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsListQueryParams)
    ], ContainerProjectsLocationsClustersNodePoolsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsListSecurity)
    ], ContainerProjectsLocationsClustersNodePoolsListRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersNodePoolsListRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsListRequest };
var ContainerProjectsLocationsClustersNodePoolsListResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsListResponse, _super);
    function ContainerProjectsLocationsClustersNodePoolsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNodePoolsResponse)
    ], ContainerProjectsLocationsClustersNodePoolsListResponse.prototype, "listNodePoolsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersNodePoolsListResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersNodePoolsListResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsListResponse };
