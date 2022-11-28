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
var WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams.prototype, "workflow", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams };
var WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams.prototype, "uploadProtocol", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams };
var WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity.prototype, "oauth2c", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity };
var WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TriggerPubsubExecutionRequest)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest.prototype, "security", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest };
var WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Execution)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse.prototype, "execution", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse.prototype, "statusCode", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse };
