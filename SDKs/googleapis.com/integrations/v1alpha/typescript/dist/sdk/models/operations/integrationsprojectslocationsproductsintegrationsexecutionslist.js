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
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.customFilter" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsCustomFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.endTime" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.eventStatuses" }),
        __metadata("design:type", Array)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsEventStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.executionId" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterKey" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsParameterKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterPairKey" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsParameterPairKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterPairValue" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsParameterPairValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsParameterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterValue" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsParameterValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.startTime" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.taskStatuses" }),
        __metadata("design:type", Array)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsTaskStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.workflowName" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "filterParamsWorkflowName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshAcl" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "refreshAcl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=truncateParams" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "truncateParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest };
var IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse, _super);
    function IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse.prototype, "googleCloudIntegrationsV1alphaListExecutionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse };
