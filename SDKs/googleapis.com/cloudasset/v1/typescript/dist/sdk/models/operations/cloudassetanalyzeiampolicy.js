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
var CloudassetAnalyzeIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyPathParams, _super);
    function CloudassetAnalyzeIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyPathParams.prototype, "scope", void 0);
    return CloudassetAnalyzeIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyPathParams };
var CloudassetAnalyzeIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyQueryParams, _super);
    function CloudassetAnalyzeIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.accessSelector.permissions" }),
        __metadata("design:type", Array)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryAccessSelectorPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.accessSelector.roles" }),
        __metadata("design:type", Array)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryAccessSelectorRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.conditionContext.accessTime" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryConditionContextAccessTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.identitySelector.identity" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryIdentitySelectorIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.analyzeServiceAccountImpersonation" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryOptionsAnalyzeServiceAccountImpersonation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandGroups" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryOptionsExpandGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandResources" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryOptionsExpandResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.expandRoles" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryOptionsExpandRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.outputGroupEdges" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryOptionsOutputGroupEdges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.options.outputResourceEdges" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryOptionsOutputResourceEdges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analysisQuery.resourceSelector.fullResourceName" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "analysisQueryResourceSelectorFullResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=executionTimeout" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "executionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=savedAnalysisQuery" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "savedAnalysisQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetAnalyzeIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyQueryParams };
var CloudassetAnalyzeIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicySecurity, _super);
    function CloudassetAnalyzeIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetAnalyzeIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetAnalyzeIamPolicySecurity.prototype, "oauth2c", void 0);
    return CloudassetAnalyzeIamPolicySecurity;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicySecurity };
var CloudassetAnalyzeIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyRequest, _super);
    function CloudassetAnalyzeIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeIamPolicyPathParams)
    ], CloudassetAnalyzeIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeIamPolicyQueryParams)
    ], CloudassetAnalyzeIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeIamPolicySecurity)
    ], CloudassetAnalyzeIamPolicyRequest.prototype, "security", void 0);
    return CloudassetAnalyzeIamPolicyRequest;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyRequest };
var CloudassetAnalyzeIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyResponse, _super);
    function CloudassetAnalyzeIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AnalyzeIamPolicyResponse)
    ], CloudassetAnalyzeIamPolicyResponse.prototype, "analyzeIamPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudassetAnalyzeIamPolicyResponse;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyResponse };
