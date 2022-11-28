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
var ContainerProjectsZonesClustersStartIpRotationPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersStartIpRotationPathParams, _super);
    function ContainerProjectsZonesClustersStartIpRotationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationPathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationPathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersStartIpRotationPathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersStartIpRotationPathParams };
var ContainerProjectsZonesClustersStartIpRotationQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersStartIpRotationQueryParams, _super);
    function ContainerProjectsZonesClustersStartIpRotationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersStartIpRotationQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersStartIpRotationQueryParams };
var ContainerProjectsZonesClustersStartIpRotationSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersStartIpRotationSecurity, _super);
    function ContainerProjectsZonesClustersStartIpRotationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersStartIpRotationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersStartIpRotationSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersStartIpRotationSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersStartIpRotationSecurity };
var ContainerProjectsZonesClustersStartIpRotationRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersStartIpRotationRequest, _super);
    function ContainerProjectsZonesClustersStartIpRotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersStartIpRotationPathParams)
    ], ContainerProjectsZonesClustersStartIpRotationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersStartIpRotationQueryParams)
    ], ContainerProjectsZonesClustersStartIpRotationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartIpRotationRequest)
    ], ContainerProjectsZonesClustersStartIpRotationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersStartIpRotationSecurity)
    ], ContainerProjectsZonesClustersStartIpRotationRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersStartIpRotationRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersStartIpRotationRequest };
var ContainerProjectsZonesClustersStartIpRotationResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersStartIpRotationResponse, _super);
    function ContainerProjectsZonesClustersStartIpRotationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersStartIpRotationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersStartIpRotationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersStartIpRotationResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersStartIpRotationResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersStartIpRotationResponse };
