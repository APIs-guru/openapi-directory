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
var DataprocProjectsRegionsClustersRepairPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersRepairPathParams, _super);
    function DataprocProjectsRegionsClustersRepairPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterName" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairPathParams.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairPathParams.prototype, "region", void 0);
    return DataprocProjectsRegionsClustersRepairPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersRepairPathParams };
var DataprocProjectsRegionsClustersRepairQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersRepairQueryParams, _super);
    function DataprocProjectsRegionsClustersRepairQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsClustersRepairQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersRepairQueryParams };
var DataprocProjectsRegionsClustersRepairSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersRepairSecurity, _super);
    function DataprocProjectsRegionsClustersRepairSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsClustersRepairSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsClustersRepairSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsClustersRepairSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersRepairSecurity };
var DataprocProjectsRegionsClustersRepairRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersRepairRequest, _super);
    function DataprocProjectsRegionsClustersRepairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersRepairPathParams)
    ], DataprocProjectsRegionsClustersRepairRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersRepairQueryParams)
    ], DataprocProjectsRegionsClustersRepairRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RepairClusterRequest)
    ], DataprocProjectsRegionsClustersRepairRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersRepairSecurity)
    ], DataprocProjectsRegionsClustersRepairRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsClustersRepairRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersRepairRequest };
var DataprocProjectsRegionsClustersRepairResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersRepairResponse, _super);
    function DataprocProjectsRegionsClustersRepairResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersRepairResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DataprocProjectsRegionsClustersRepairResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsClustersRepairResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsClustersRepairResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersRepairResponse };
