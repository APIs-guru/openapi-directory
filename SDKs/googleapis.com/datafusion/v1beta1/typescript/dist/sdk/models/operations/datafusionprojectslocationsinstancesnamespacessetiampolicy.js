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
var DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams.prototype, "resource", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams };
var DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams };
var DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity, _super);
    function DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity };
var DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest, _super);
    function DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest };
var DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse, _super);
    function DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse };
