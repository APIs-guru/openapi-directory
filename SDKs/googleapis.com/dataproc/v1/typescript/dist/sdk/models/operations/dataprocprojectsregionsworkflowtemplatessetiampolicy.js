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
var DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams.prototype, "resource", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams };
var DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams, _super);
    function DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams };
var DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity, _super);
    function DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity };
var DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest, _super);
    function DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest };
var DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse, _super);
    function DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse };
