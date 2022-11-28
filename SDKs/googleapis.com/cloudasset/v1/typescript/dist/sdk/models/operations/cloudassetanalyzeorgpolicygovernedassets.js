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
var CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams, _super);
    function CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams.prototype, "scope", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams };
var CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams, _super);
    function CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraint" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "constraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams };
var CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity, _super);
    function CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity.prototype, "oauth2c", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity };
var CloudassetAnalyzeOrgPolicyGovernedAssetsRequest = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedAssetsRequest, _super);
    function CloudassetAnalyzeOrgPolicyGovernedAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPolicyGovernedAssetsPathParams)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPolicyGovernedAssetsQueryParams)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsRequest.prototype, "security", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedAssetsRequest;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedAssetsRequest };
var CloudassetAnalyzeOrgPolicyGovernedAssetsResponse = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeOrgPolicyGovernedAssetsResponse, _super);
    function CloudassetAnalyzeOrgPolicyGovernedAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AnalyzeOrgPolicyGovernedAssetsResponse)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsResponse.prototype, "analyzeOrgPolicyGovernedAssetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeOrgPolicyGovernedAssetsResponse.prototype, "statusCode", void 0);
    return CloudassetAnalyzeOrgPolicyGovernedAssetsResponse;
}(SpeakeasyBase));
export { CloudassetAnalyzeOrgPolicyGovernedAssetsResponse };
