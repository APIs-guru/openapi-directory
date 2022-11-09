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
var DatafusionProjectsLocationsInstancesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesGetIamPolicyPathParams, _super);
    function DatafusionProjectsLocationsInstancesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyPathParams.prototype, "resource", void 0);
    return DatafusionProjectsLocationsInstancesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesGetIamPolicyPathParams };
var DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams, _super);
    function DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams };
var DatafusionProjectsLocationsInstancesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesGetIamPolicySecurity, _super);
    function DatafusionProjectsLocationsInstancesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesGetIamPolicySecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesGetIamPolicySecurity };
var DatafusionProjectsLocationsInstancesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesGetIamPolicyRequest, _super);
    function DatafusionProjectsLocationsInstancesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesGetIamPolicyPathParams)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesGetIamPolicySecurity)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesGetIamPolicyRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesGetIamPolicyRequest };
var DatafusionProjectsLocationsInstancesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesGetIamPolicyResponse, _super);
    function DatafusionProjectsLocationsInstancesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsInstancesGetIamPolicyResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesGetIamPolicyResponse };
