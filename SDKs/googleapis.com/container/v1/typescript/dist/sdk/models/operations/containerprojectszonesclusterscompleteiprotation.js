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
var ContainerProjectsZonesClustersCompleteIpRotationPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersCompleteIpRotationPathParams, _super);
    function ContainerProjectsZonesClustersCompleteIpRotationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationPathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationPathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersCompleteIpRotationPathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersCompleteIpRotationPathParams };
var ContainerProjectsZonesClustersCompleteIpRotationQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersCompleteIpRotationQueryParams, _super);
    function ContainerProjectsZonesClustersCompleteIpRotationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersCompleteIpRotationQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersCompleteIpRotationQueryParams };
var ContainerProjectsZonesClustersCompleteIpRotationSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersCompleteIpRotationSecurity, _super);
    function ContainerProjectsZonesClustersCompleteIpRotationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersCompleteIpRotationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersCompleteIpRotationSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersCompleteIpRotationSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersCompleteIpRotationSecurity };
var ContainerProjectsZonesClustersCompleteIpRotationRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersCompleteIpRotationRequest, _super);
    function ContainerProjectsZonesClustersCompleteIpRotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersCompleteIpRotationPathParams)
    ], ContainerProjectsZonesClustersCompleteIpRotationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersCompleteIpRotationQueryParams)
    ], ContainerProjectsZonesClustersCompleteIpRotationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompleteIpRotationRequest)
    ], ContainerProjectsZonesClustersCompleteIpRotationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersCompleteIpRotationSecurity)
    ], ContainerProjectsZonesClustersCompleteIpRotationRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersCompleteIpRotationRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersCompleteIpRotationRequest };
var ContainerProjectsZonesClustersCompleteIpRotationResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersCompleteIpRotationResponse, _super);
    function ContainerProjectsZonesClustersCompleteIpRotationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersCompleteIpRotationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersCompleteIpRotationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersCompleteIpRotationResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersCompleteIpRotationResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersCompleteIpRotationResponse };
