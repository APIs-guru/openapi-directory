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
var ContainerProjectsZonesClustersSetMasterAuthPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersSetMasterAuthPathParams, _super);
    function ContainerProjectsZonesClustersSetMasterAuthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthPathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthPathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersSetMasterAuthPathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersSetMasterAuthPathParams };
var ContainerProjectsZonesClustersSetMasterAuthQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersSetMasterAuthQueryParams, _super);
    function ContainerProjectsZonesClustersSetMasterAuthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersSetMasterAuthQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersSetMasterAuthQueryParams };
var ContainerProjectsZonesClustersSetMasterAuthSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersSetMasterAuthSecurity, _super);
    function ContainerProjectsZonesClustersSetMasterAuthSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersSetMasterAuthSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersSetMasterAuthSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersSetMasterAuthSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersSetMasterAuthSecurity };
var ContainerProjectsZonesClustersSetMasterAuthRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersSetMasterAuthRequest, _super);
    function ContainerProjectsZonesClustersSetMasterAuthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersSetMasterAuthPathParams)
    ], ContainerProjectsZonesClustersSetMasterAuthRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersSetMasterAuthQueryParams)
    ], ContainerProjectsZonesClustersSetMasterAuthRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetMasterAuthRequest)
    ], ContainerProjectsZonesClustersSetMasterAuthRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersSetMasterAuthSecurity)
    ], ContainerProjectsZonesClustersSetMasterAuthRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersSetMasterAuthRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersSetMasterAuthRequest };
var ContainerProjectsZonesClustersSetMasterAuthResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersSetMasterAuthResponse, _super);
    function ContainerProjectsZonesClustersSetMasterAuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersSetMasterAuthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersSetMasterAuthResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersSetMasterAuthResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersSetMasterAuthResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersSetMasterAuthResponse };
