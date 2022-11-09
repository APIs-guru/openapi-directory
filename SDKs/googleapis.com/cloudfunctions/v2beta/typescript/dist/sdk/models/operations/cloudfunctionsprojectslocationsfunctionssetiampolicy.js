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
var CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams };
var CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams };
var CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity, _super);
    function CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity };
var CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest, _super);
    function CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest.prototype, "security", void 0);
    return CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest };
var CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse, _super);
    function CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse };
