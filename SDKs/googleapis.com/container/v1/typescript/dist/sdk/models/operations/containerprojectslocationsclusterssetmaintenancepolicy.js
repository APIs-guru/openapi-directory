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
var ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams, _super);
    function ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams.prototype, "name", void 0);
    return ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams };
var ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams, _super);
    function ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams };
var ContainerProjectsLocationsClustersSetMaintenancePolicySecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMaintenancePolicySecurity, _super);
    function ContainerProjectsLocationsClustersSetMaintenancePolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicySecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersSetMaintenancePolicySecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMaintenancePolicySecurity };
var ContainerProjectsLocationsClustersSetMaintenancePolicyRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMaintenancePolicyRequest, _super);
    function ContainerProjectsLocationsClustersSetMaintenancePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetMaintenancePolicyRequest)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetMaintenancePolicySecurity)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersSetMaintenancePolicyRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMaintenancePolicyRequest };
var ContainerProjectsLocationsClustersSetMaintenancePolicyResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetMaintenancePolicyResponse, _super);
    function ContainerProjectsLocationsClustersSetMaintenancePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersSetMaintenancePolicyResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersSetMaintenancePolicyResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetMaintenancePolicyResponse };
