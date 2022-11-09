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
var DatafusionProjectsLocationsRemoveIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsRemoveIamPolicyPathParams, _super);
    function DatafusionProjectsLocationsRemoveIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyPathParams.prototype, "resource", void 0);
    return DatafusionProjectsLocationsRemoveIamPolicyPathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsRemoveIamPolicyPathParams };
var DatafusionProjectsLocationsRemoveIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsRemoveIamPolicyQueryParams, _super);
    function DatafusionProjectsLocationsRemoveIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsRemoveIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsRemoveIamPolicyQueryParams };
var DatafusionProjectsLocationsRemoveIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsRemoveIamPolicySecurity, _super);
    function DatafusionProjectsLocationsRemoveIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsRemoveIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsRemoveIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsRemoveIamPolicySecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsRemoveIamPolicySecurity };
var DatafusionProjectsLocationsRemoveIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsRemoveIamPolicyRequest, _super);
    function DatafusionProjectsLocationsRemoveIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsRemoveIamPolicyPathParams)
    ], DatafusionProjectsLocationsRemoveIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsRemoveIamPolicyQueryParams)
    ], DatafusionProjectsLocationsRemoveIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DatafusionProjectsLocationsRemoveIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsRemoveIamPolicySecurity)
    ], DatafusionProjectsLocationsRemoveIamPolicyRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsRemoveIamPolicyRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsRemoveIamPolicyRequest };
var DatafusionProjectsLocationsRemoveIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsRemoveIamPolicyResponse, _super);
    function DatafusionProjectsLocationsRemoveIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsRemoveIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DatafusionProjectsLocationsRemoveIamPolicyResponse.prototype, "removeIamPolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsRemoveIamPolicyResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsRemoveIamPolicyResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsRemoveIamPolicyResponse };
