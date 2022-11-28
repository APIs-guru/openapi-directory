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
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams.prototype, "resource", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse };
