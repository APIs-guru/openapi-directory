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
var CloudassetAnalyzeOrgPolicyGovernedContainersPathParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedContainersPathParams, _super);
    function CloudassetAnalyzeOrgPolicyGovernedContainersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersPathParams.prototype, "scope", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedContainersPathParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedContainersPathParams };
var CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams, _super);
    function CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraint" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "constraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams };
var CloudassetAnalyzeOrgPolicyGovernedContainersSecurity = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedContainersSecurity, _super);
    function CloudassetAnalyzeOrgPolicyGovernedContainersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersSecurity.prototype, "oauth2c", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedContainersSecurity;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedContainersSecurity };
var CloudassetAnalyzeOrgPolicyGovernedContainersRequest = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedContainersRequest, _super);
    function CloudassetAnalyzeOrgPolicyGovernedContainersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPolicyGovernedContainersPathParams)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPolicyGovernedContainersQueryParams)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPolicyGovernedContainersSecurity)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersRequest.prototype, "security", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedContainersRequest;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedContainersRequest };
var CloudassetAnalyzeOrgPolicyGovernedContainersResponse = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedContainersResponse, _super);
    function CloudassetAnalyzeOrgPolicyGovernedContainersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AnalyzeOrgPolicyGovernedContainersResponse)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersResponse.prototype, "analyzeOrgPolicyGovernedContainersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeOrgPolicyGovernedContainersResponse.prototype, "statusCode", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedContainersResponse;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedContainersResponse };
