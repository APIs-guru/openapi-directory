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
var CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams };
var CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams };
var CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity, _super);
    function CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity };
var CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest, _super);
    function CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsGetIamPolicyQueryParams)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest.prototype, "security", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest };
var CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse, _super);
    function CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse };
