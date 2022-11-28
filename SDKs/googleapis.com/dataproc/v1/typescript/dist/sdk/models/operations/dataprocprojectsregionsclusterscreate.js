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
var DataprocProjectsRegionsClustersCreatePathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersCreatePathParams, _super);
    function DataprocProjectsRegionsClustersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreatePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreatePathParams.prototype, "region", void 0);
    return DataprocProjectsRegionsClustersCreatePathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersCreatePathParams };
export var DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum;
(function (DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum) {
    DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum["FailureActionUnspecified"] = "FAILURE_ACTION_UNSPECIFIED";
    DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum["NoAction"] = "NO_ACTION";
    DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum["Delete"] = "DELETE";
})(DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum || (DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum = {}));
var DataprocProjectsRegionsClustersCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersCreateQueryParams, _super);
    function DataprocProjectsRegionsClustersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actionOnFailedPrimaryWorkers" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "actionOnFailedPrimaryWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsClustersCreateQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersCreateQueryParams };
var DataprocProjectsRegionsClustersCreateSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersCreateSecurity, _super);
    function DataprocProjectsRegionsClustersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsClustersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsClustersCreateSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsClustersCreateSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersCreateSecurity };
var DataprocProjectsRegionsClustersCreateRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersCreateRequest, _super);
    function DataprocProjectsRegionsClustersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersCreatePathParams)
    ], DataprocProjectsRegionsClustersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersCreateQueryParams)
    ], DataprocProjectsRegionsClustersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClusterInput)
    ], DataprocProjectsRegionsClustersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersCreateSecurity)
    ], DataprocProjectsRegionsClustersCreateRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsClustersCreateRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersCreateRequest };
var DataprocProjectsRegionsClustersCreateResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersCreateResponse, _super);
    function DataprocProjectsRegionsClustersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DataprocProjectsRegionsClustersCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsClustersCreateResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsClustersCreateResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersCreateResponse };
