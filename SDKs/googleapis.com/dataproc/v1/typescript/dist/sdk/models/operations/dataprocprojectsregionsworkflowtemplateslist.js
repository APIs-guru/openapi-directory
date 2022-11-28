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
var DataprocProjectsRegionsWorkflowTemplatesListPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesListPathParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListPathParams.prototype, "parent", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesListPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesListPathParams };
var DataprocProjectsRegionsWorkflowTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesListQueryParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesListQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesListQueryParams };
var DataprocProjectsRegionsWorkflowTemplatesListSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesListSecurity, _super);
    function DataprocProjectsRegionsWorkflowTemplatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsWorkflowTemplatesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsWorkflowTemplatesListSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesListSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesListSecurity };
var DataprocProjectsRegionsWorkflowTemplatesListRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesListRequest, _super);
    function DataprocProjectsRegionsWorkflowTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesListPathParams)
    ], DataprocProjectsRegionsWorkflowTemplatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesListQueryParams)
    ], DataprocProjectsRegionsWorkflowTemplatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesListSecurity)
    ], DataprocProjectsRegionsWorkflowTemplatesListRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesListRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesListRequest };
var DataprocProjectsRegionsWorkflowTemplatesListResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesListResponse, _super);
    function DataprocProjectsRegionsWorkflowTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListWorkflowTemplatesResponse)
    ], DataprocProjectsRegionsWorkflowTemplatesListResponse.prototype, "listWorkflowTemplatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsWorkflowTemplatesListResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesListResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesListResponse };
