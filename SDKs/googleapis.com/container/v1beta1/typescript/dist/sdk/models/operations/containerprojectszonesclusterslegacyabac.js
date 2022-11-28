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
var ContainerProjectsZonesClustersLegacyAbacPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersLegacyAbacPathParams, _super);
    function ContainerProjectsZonesClustersLegacyAbacPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacPathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacPathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesClustersLegacyAbacPathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersLegacyAbacPathParams };
var ContainerProjectsZonesClustersLegacyAbacQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersLegacyAbacQueryParams, _super);
    function ContainerProjectsZonesClustersLegacyAbacQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesClustersLegacyAbacQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersLegacyAbacQueryParams };
var ContainerProjectsZonesClustersLegacyAbacSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersLegacyAbacSecurity, _super);
    function ContainerProjectsZonesClustersLegacyAbacSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesClustersLegacyAbacSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesClustersLegacyAbacSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesClustersLegacyAbacSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersLegacyAbacSecurity };
var ContainerProjectsZonesClustersLegacyAbacRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersLegacyAbacRequest, _super);
    function ContainerProjectsZonesClustersLegacyAbacRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersLegacyAbacPathParams)
    ], ContainerProjectsZonesClustersLegacyAbacRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersLegacyAbacQueryParams)
    ], ContainerProjectsZonesClustersLegacyAbacRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetLegacyAbacRequest)
    ], ContainerProjectsZonesClustersLegacyAbacRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesClustersLegacyAbacSecurity)
    ], ContainerProjectsZonesClustersLegacyAbacRequest.prototype, "security", void 0);
    return ContainerProjectsZonesClustersLegacyAbacRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersLegacyAbacRequest };
var ContainerProjectsZonesClustersLegacyAbacResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesClustersLegacyAbacResponse, _super);
    function ContainerProjectsZonesClustersLegacyAbacResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesClustersLegacyAbacResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsZonesClustersLegacyAbacResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesClustersLegacyAbacResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesClustersLegacyAbacResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesClustersLegacyAbacResponse };
