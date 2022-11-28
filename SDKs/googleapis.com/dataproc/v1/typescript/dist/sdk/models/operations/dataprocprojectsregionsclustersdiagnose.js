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
var DataprocProjectsRegionsClustersDiagnosePathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersDiagnosePathParams, _super);
    function DataprocProjectsRegionsClustersDiagnosePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterName" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnosePathParams.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnosePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnosePathParams.prototype, "region", void 0);
    return DataprocProjectsRegionsClustersDiagnosePathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersDiagnosePathParams };
var DataprocProjectsRegionsClustersDiagnoseQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersDiagnoseQueryParams, _super);
    function DataprocProjectsRegionsClustersDiagnoseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsClustersDiagnoseQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersDiagnoseQueryParams };
var DataprocProjectsRegionsClustersDiagnoseSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersDiagnoseSecurity, _super);
    function DataprocProjectsRegionsClustersDiagnoseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsClustersDiagnoseSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsClustersDiagnoseSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsClustersDiagnoseSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersDiagnoseSecurity };
var DataprocProjectsRegionsClustersDiagnoseRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersDiagnoseRequest, _super);
    function DataprocProjectsRegionsClustersDiagnoseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersDiagnosePathParams)
    ], DataprocProjectsRegionsClustersDiagnoseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersDiagnoseQueryParams)
    ], DataprocProjectsRegionsClustersDiagnoseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DataprocProjectsRegionsClustersDiagnoseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersDiagnoseSecurity)
    ], DataprocProjectsRegionsClustersDiagnoseRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsClustersDiagnoseRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersDiagnoseRequest };
var DataprocProjectsRegionsClustersDiagnoseResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersDiagnoseResponse, _super);
    function DataprocProjectsRegionsClustersDiagnoseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersDiagnoseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DataprocProjectsRegionsClustersDiagnoseResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsClustersDiagnoseResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsClustersDiagnoseResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersDiagnoseResponse };
