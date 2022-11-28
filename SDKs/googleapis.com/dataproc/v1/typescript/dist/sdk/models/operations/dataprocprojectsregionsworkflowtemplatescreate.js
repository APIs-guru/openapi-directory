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
var DataprocProjectsRegionsWorkflowTemplatesCreatePathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesCreatePathParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreatePathParams.prototype, "parent", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesCreatePathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesCreatePathParams };
var DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams };
var DataprocProjectsRegionsWorkflowTemplatesCreateSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesCreateSecurity, _super);
    function DataprocProjectsRegionsWorkflowTemplatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesCreateSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesCreateSecurity };
var DataprocProjectsRegionsWorkflowTemplatesCreateRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesCreateRequest, _super);
    function DataprocProjectsRegionsWorkflowTemplatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesCreatePathParams)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkflowTemplateInput)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesCreateSecurity)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesCreateRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesCreateRequest };
var DataprocProjectsRegionsWorkflowTemplatesCreateResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesCreateResponse, _super);
    function DataprocProjectsRegionsWorkflowTemplatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WorkflowTemplate)
    ], DataprocProjectsRegionsWorkflowTemplatesCreateResponse.prototype, "workflowTemplate", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesCreateResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesCreateResponse };
