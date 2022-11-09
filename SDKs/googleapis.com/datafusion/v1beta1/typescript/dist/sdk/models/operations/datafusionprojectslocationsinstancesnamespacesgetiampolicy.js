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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams.prototype, "resource", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams };
var DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams };
var DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity, _super);
    function DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity };
var DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest, _super);
    function DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest };
var DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse, _super);
    function DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse };
