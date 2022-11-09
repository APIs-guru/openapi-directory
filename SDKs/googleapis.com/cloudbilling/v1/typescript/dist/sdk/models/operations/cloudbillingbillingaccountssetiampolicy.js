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
var CloudbillingBillingAccountsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsSetIamPolicyPathParams, _super);
    function CloudbillingBillingAccountsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudbillingBillingAccountsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsSetIamPolicyPathParams };
var CloudbillingBillingAccountsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsSetIamPolicyQueryParams, _super);
    function CloudbillingBillingAccountsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsSetIamPolicyQueryParams };
var CloudbillingBillingAccountsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsSetIamPolicySecurityOption1, _super);
    function CloudbillingBillingAccountsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsSetIamPolicySecurityOption1 };
var CloudbillingBillingAccountsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsSetIamPolicySecurityOption2, _super);
    function CloudbillingBillingAccountsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsSetIamPolicySecurityOption2 };
var CloudbillingBillingAccountsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsSetIamPolicySecurity, _super);
    function CloudbillingBillingAccountsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsSetIamPolicySecurityOption1)
    ], CloudbillingBillingAccountsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsSetIamPolicySecurityOption2)
    ], CloudbillingBillingAccountsSetIamPolicySecurity.prototype, "option2", void 0);
    return CloudbillingBillingAccountsSetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsSetIamPolicySecurity };
var CloudbillingBillingAccountsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsSetIamPolicyRequest, _super);
    function CloudbillingBillingAccountsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsSetIamPolicyPathParams)
    ], CloudbillingBillingAccountsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsSetIamPolicyQueryParams)
    ], CloudbillingBillingAccountsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], CloudbillingBillingAccountsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingBillingAccountsSetIamPolicySecurity)
    ], CloudbillingBillingAccountsSetIamPolicyRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsSetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsSetIamPolicyRequest };
var CloudbillingBillingAccountsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsSetIamPolicyResponse, _super);
    function CloudbillingBillingAccountsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], CloudbillingBillingAccountsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsSetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsSetIamPolicyResponse };
