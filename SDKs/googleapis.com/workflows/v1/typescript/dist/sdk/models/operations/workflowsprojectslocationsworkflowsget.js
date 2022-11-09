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
var WorkflowsProjectsLocationsWorkflowsGetPathParams = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsWorkflowsGetPathParams, _super);
    function WorkflowsProjectsLocationsWorkflowsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetPathParams.prototype, "name", void 0);
    return WorkflowsProjectsLocationsWorkflowsGetPathParams;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsWorkflowsGetPathParams };
var WorkflowsProjectsLocationsWorkflowsGetQueryParams = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsWorkflowsGetQueryParams, _super);
    function WorkflowsProjectsLocationsWorkflowsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetQueryParams.prototype, "uploadProtocol", void 0);
    return WorkflowsProjectsLocationsWorkflowsGetQueryParams;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsWorkflowsGetQueryParams };
var WorkflowsProjectsLocationsWorkflowsGetSecurity = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsWorkflowsGetSecurity, _super);
    function WorkflowsProjectsLocationsWorkflowsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WorkflowsProjectsLocationsWorkflowsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WorkflowsProjectsLocationsWorkflowsGetSecurity.prototype, "oauth2c", void 0);
    return WorkflowsProjectsLocationsWorkflowsGetSecurity;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsWorkflowsGetSecurity };
var WorkflowsProjectsLocationsWorkflowsGetRequest = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsWorkflowsGetRequest, _super);
    function WorkflowsProjectsLocationsWorkflowsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowsProjectsLocationsWorkflowsGetPathParams)
    ], WorkflowsProjectsLocationsWorkflowsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowsProjectsLocationsWorkflowsGetQueryParams)
    ], WorkflowsProjectsLocationsWorkflowsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowsProjectsLocationsWorkflowsGetSecurity)
    ], WorkflowsProjectsLocationsWorkflowsGetRequest.prototype, "security", void 0);
    return WorkflowsProjectsLocationsWorkflowsGetRequest;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsWorkflowsGetRequest };
var WorkflowsProjectsLocationsWorkflowsGetResponse = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsWorkflowsGetResponse, _super);
    function WorkflowsProjectsLocationsWorkflowsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsWorkflowsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WorkflowsProjectsLocationsWorkflowsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Workflow)
    ], WorkflowsProjectsLocationsWorkflowsGetResponse.prototype, "workflow", void 0);
    return WorkflowsProjectsLocationsWorkflowsGetResponse;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsWorkflowsGetResponse };
