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
var DataprocProjectsRegionsWorkflowTemplatesGetPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesGetPathParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetPathParams.prototype, "name", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesGetPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesGetPathParams };
var DataprocProjectsRegionsWorkflowTemplatesGetQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesGetQueryParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsWorkflowTemplatesGetQueryParams.prototype, "version", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesGetQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesGetQueryParams };
var DataprocProjectsRegionsWorkflowTemplatesGetSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesGetSecurity, _super);
    function DataprocProjectsRegionsWorkflowTemplatesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsWorkflowTemplatesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsWorkflowTemplatesGetSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesGetSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesGetSecurity };
var DataprocProjectsRegionsWorkflowTemplatesGetRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesGetRequest, _super);
    function DataprocProjectsRegionsWorkflowTemplatesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesGetPathParams)
    ], DataprocProjectsRegionsWorkflowTemplatesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesGetQueryParams)
    ], DataprocProjectsRegionsWorkflowTemplatesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesGetSecurity)
    ], DataprocProjectsRegionsWorkflowTemplatesGetRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesGetRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesGetRequest };
var DataprocProjectsRegionsWorkflowTemplatesGetResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesGetResponse, _super);
    function DataprocProjectsRegionsWorkflowTemplatesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsWorkflowTemplatesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WorkflowTemplate)
    ], DataprocProjectsRegionsWorkflowTemplatesGetResponse.prototype, "workflowTemplate", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesGetResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesGetResponse };
