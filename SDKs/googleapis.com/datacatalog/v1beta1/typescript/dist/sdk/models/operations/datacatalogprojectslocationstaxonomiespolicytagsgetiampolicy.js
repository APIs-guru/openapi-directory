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
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams.prototype, "resource", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse };
