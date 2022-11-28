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
var CloudbillingBillingAccountsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicyPathParams, _super);
    function CloudbillingBillingAccountsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudbillingBillingAccountsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicyPathParams };
var CloudbillingBillingAccountsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicyQueryParams, _super);
    function CloudbillingBillingAccountsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicyQueryParams };
var CloudbillingBillingAccountsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicySecurityOption1, _super);
    function CloudbillingBillingAccountsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicySecurityOption1 };
var CloudbillingBillingAccountsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicySecurityOption2, _super);
    function CloudbillingBillingAccountsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicySecurityOption2 };
var CloudbillingBillingAccountsGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicySecurityOption3, _super);
    function CloudbillingBillingAccountsGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsGetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicySecurityOption3 };
var CloudbillingBillingAccountsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicySecurity, _super);
    function CloudbillingBillingAccountsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsGetIamPolicySecurityOption1)
    ], CloudbillingBillingAccountsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsGetIamPolicySecurityOption2)
    ], CloudbillingBillingAccountsGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsGetIamPolicySecurityOption3)
    ], CloudbillingBillingAccountsGetIamPolicySecurity.prototype, "option3", void 0);
    return CloudbillingBillingAccountsGetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicySecurity };
var CloudbillingBillingAccountsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicyRequest, _super);
    function CloudbillingBillingAccountsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsGetIamPolicyPathParams)
    ], CloudbillingBillingAccountsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsGetIamPolicyQueryParams)
    ], CloudbillingBillingAccountsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsGetIamPolicySecurity)
    ], CloudbillingBillingAccountsGetIamPolicyRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsGetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicyRequest };
var CloudbillingBillingAccountsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsGetIamPolicyResponse, _super);
    function CloudbillingBillingAccountsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], CloudbillingBillingAccountsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsGetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsGetIamPolicyResponse };
