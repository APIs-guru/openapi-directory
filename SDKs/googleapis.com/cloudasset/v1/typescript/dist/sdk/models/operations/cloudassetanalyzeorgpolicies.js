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
var CloudassetAnalyzeOrgPoliciesPathParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPoliciesPathParams, _super);
    function CloudassetAnalyzeOrgPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesPathParams.prototype, "scope", void 0);
    return CloudassetAnalyzeOrgPoliciesPathParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPoliciesPathParams };
var CloudassetAnalyzeOrgPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPoliciesQueryParams, _super);
    function CloudassetAnalyzeOrgPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraint" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "constraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetAnalyzeOrgPoliciesQueryParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPoliciesQueryParams };
var CloudassetAnalyzeOrgPoliciesSecurity = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPoliciesSecurity, _super);
    function CloudassetAnalyzeOrgPoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetAnalyzeOrgPoliciesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetAnalyzeOrgPoliciesSecurity.prototype, "oauth2c", void 0);
    return CloudassetAnalyzeOrgPoliciesSecurity;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPoliciesSecurity };
var CloudassetAnalyzeOrgPoliciesRequest = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPoliciesRequest, _super);
    function CloudassetAnalyzeOrgPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPoliciesPathParams)
    ], CloudassetAnalyzeOrgPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPoliciesQueryParams)
    ], CloudassetAnalyzeOrgPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPoliciesSecurity)
    ], CloudassetAnalyzeOrgPoliciesRequest.prototype, "security", void 0);
    return CloudassetAnalyzeOrgPoliciesRequest;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPoliciesRequest };
var CloudassetAnalyzeOrgPoliciesResponse = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPoliciesResponse, _super);
    function CloudassetAnalyzeOrgPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AnalyzeOrgPoliciesResponse)
    ], CloudassetAnalyzeOrgPoliciesResponse.prototype, "analyzeOrgPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeOrgPoliciesResponse.prototype, "statusCode", void 0);
    return CloudassetAnalyzeOrgPoliciesResponse;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPoliciesResponse };
