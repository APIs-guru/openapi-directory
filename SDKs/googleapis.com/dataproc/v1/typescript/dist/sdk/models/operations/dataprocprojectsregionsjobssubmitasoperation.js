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
var DataprocProjectsRegionsJobsSubmitAsOperationPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsSubmitAsOperationPathParams, _super);
    function DataprocProjectsRegionsJobsSubmitAsOperationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationPathParams.prototype, "region", void 0);
    return DataprocProjectsRegionsJobsSubmitAsOperationPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsSubmitAsOperationPathParams };
var DataprocProjectsRegionsJobsSubmitAsOperationQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsSubmitAsOperationQueryParams, _super);
    function DataprocProjectsRegionsJobsSubmitAsOperationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsJobsSubmitAsOperationQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsSubmitAsOperationQueryParams };
var DataprocProjectsRegionsJobsSubmitAsOperationSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsSubmitAsOperationSecurity, _super);
    function DataprocProjectsRegionsJobsSubmitAsOperationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsJobsSubmitAsOperationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsJobsSubmitAsOperationSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsJobsSubmitAsOperationSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsSubmitAsOperationSecurity };
var DataprocProjectsRegionsJobsSubmitAsOperationRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsSubmitAsOperationRequest, _super);
    function DataprocProjectsRegionsJobsSubmitAsOperationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsJobsSubmitAsOperationPathParams)
    ], DataprocProjectsRegionsJobsSubmitAsOperationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsJobsSubmitAsOperationQueryParams)
    ], DataprocProjectsRegionsJobsSubmitAsOperationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubmitJobRequestInput)
    ], DataprocProjectsRegionsJobsSubmitAsOperationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsJobsSubmitAsOperationSecurity)
    ], DataprocProjectsRegionsJobsSubmitAsOperationRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsJobsSubmitAsOperationRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsSubmitAsOperationRequest };
var DataprocProjectsRegionsJobsSubmitAsOperationResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsJobsSubmitAsOperationResponse, _super);
    function DataprocProjectsRegionsJobsSubmitAsOperationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsJobsSubmitAsOperationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DataprocProjectsRegionsJobsSubmitAsOperationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsJobsSubmitAsOperationResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsJobsSubmitAsOperationResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsJobsSubmitAsOperationResponse };
