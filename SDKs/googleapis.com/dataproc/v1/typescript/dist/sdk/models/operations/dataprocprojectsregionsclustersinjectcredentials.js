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
var DataprocProjectsRegionsClustersInjectCredentialsPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersInjectCredentialsPathParams, _super);
    function DataprocProjectsRegionsClustersInjectCredentialsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsPathParams.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsPathParams.prototype, "region", void 0);
    return DataprocProjectsRegionsClustersInjectCredentialsPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersInjectCredentialsPathParams };
var DataprocProjectsRegionsClustersInjectCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersInjectCredentialsQueryParams, _super);
    function DataprocProjectsRegionsClustersInjectCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsClustersInjectCredentialsQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersInjectCredentialsQueryParams };
var DataprocProjectsRegionsClustersInjectCredentialsSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersInjectCredentialsSecurity, _super);
    function DataprocProjectsRegionsClustersInjectCredentialsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsClustersInjectCredentialsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsClustersInjectCredentialsSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsClustersInjectCredentialsSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersInjectCredentialsSecurity };
var DataprocProjectsRegionsClustersInjectCredentialsRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersInjectCredentialsRequest, _super);
    function DataprocProjectsRegionsClustersInjectCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersInjectCredentialsPathParams)
    ], DataprocProjectsRegionsClustersInjectCredentialsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersInjectCredentialsQueryParams)
    ], DataprocProjectsRegionsClustersInjectCredentialsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InjectCredentialsRequest)
    ], DataprocProjectsRegionsClustersInjectCredentialsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsClustersInjectCredentialsSecurity)
    ], DataprocProjectsRegionsClustersInjectCredentialsRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsClustersInjectCredentialsRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersInjectCredentialsRequest };
var DataprocProjectsRegionsClustersInjectCredentialsResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsClustersInjectCredentialsResponse, _super);
    function DataprocProjectsRegionsClustersInjectCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsClustersInjectCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DataprocProjectsRegionsClustersInjectCredentialsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsClustersInjectCredentialsResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsClustersInjectCredentialsResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsClustersInjectCredentialsResponse };
