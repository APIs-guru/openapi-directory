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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams.prototype, "parent", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams };
export var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum;
(function (WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum) {
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum["ExecutionViewUnspecified"] = "EXECUTION_VIEW_UNSPECIFIED";
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum["Basic"] = "BASIC";
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum["Full"] = "FULL";
})(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum || (WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum = {}));
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams.prototype, "view", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams };
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity.prototype, "oauth2c", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity };
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest.prototype, "security", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest };
var WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse = /** @class */ (function (_super) {
    __extends(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse, _super);
    function WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListExecutionsResponse)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse.prototype, "listExecutionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse.prototype, "statusCode", void 0);
    return WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse;
}(SpeakeasyBase));
export { WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse };
