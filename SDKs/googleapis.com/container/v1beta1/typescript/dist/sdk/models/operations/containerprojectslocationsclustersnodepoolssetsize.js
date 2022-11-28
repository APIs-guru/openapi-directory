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
var ContainerProjectsLocationsClustersNodePoolsSetSizePathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsSetSizePathParams, _super);
    function ContainerProjectsLocationsClustersNodePoolsSetSizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizePathParams.prototype, "name", void 0);
    return ContainerProjectsLocationsClustersNodePoolsSetSizePathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsSetSizePathParams };
var ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams, _super);
    function ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams };
var ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity, _super);
    function ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity };
var ContainerProjectsLocationsClustersNodePoolsSetSizeRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsSetSizeRequest, _super);
    function ContainerProjectsLocationsClustersNodePoolsSetSizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsSetSizePathParams)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetNodePoolSizeRequest)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersNodePoolsSetSizeRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsSetSizeRequest };
var ContainerProjectsLocationsClustersNodePoolsSetSizeResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersNodePoolsSetSizeResponse, _super);
    function ContainerProjectsLocationsClustersNodePoolsSetSizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersNodePoolsSetSizeResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersNodePoolsSetSizeResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersNodePoolsSetSizeResponse };
