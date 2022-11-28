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
var DataprocProjectsRegionsClustersStopPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersStopPathParams, _super);
    function DataprocProjectsRegionsClustersStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterName" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopPathParams.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopPathParams.prototype, "region", void 0);
    return DataprocProjectsRegionsClustersStopPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersStopPathParams };
var DataprocProjectsRegionsClustersStopQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersStopQueryParams, _super);
    function DataprocProjectsRegionsClustersStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsClustersStopQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersStopQueryParams };
var DataprocProjectsRegionsClustersStopSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersStopSecurity, _super);
    function DataprocProjectsRegionsClustersStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsClustersStopSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsClustersStopSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsClustersStopSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersStopSecurity };
var DataprocProjectsRegionsClustersStopRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersStopRequest, _super);
    function DataprocProjectsRegionsClustersStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersStopPathParams)
    ], DataprocProjectsRegionsClustersStopRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersStopQueryParams)
    ], DataprocProjectsRegionsClustersStopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StopClusterRequest)
    ], DataprocProjectsRegionsClustersStopRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersStopSecurity)
    ], DataprocProjectsRegionsClustersStopRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsClustersStopRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersStopRequest };
var DataprocProjectsRegionsClustersStopResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersStopResponse, _super);
    function DataprocProjectsRegionsClustersStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DataprocProjectsRegionsClustersStopResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsClustersStopResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsClustersStopResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersStopResponse };
