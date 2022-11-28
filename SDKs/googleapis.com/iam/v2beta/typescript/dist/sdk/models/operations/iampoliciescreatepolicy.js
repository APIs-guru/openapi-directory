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
var IamPoliciesCreatePolicyPathParams = /** @class */ (function (_super) {
    __extends(IamPoliciesCreatePolicyPathParams, _super);
    function IamPoliciesCreatePolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyPathParams.prototype, "parent", void 0);
    return IamPoliciesCreatePolicyPathParams;
}(SpeakeasyBase));
export { IamPoliciesCreatePolicyPathParams };
var IamPoliciesCreatePolicyQueryParams = /** @class */ (function (_super) {
    __extends(IamPoliciesCreatePolicyQueryParams, _super);
    function IamPoliciesCreatePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=policyId" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "policyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyQueryParams.prototype, "uploadProtocol", void 0);
    return IamPoliciesCreatePolicyQueryParams;
}(SpeakeasyBase));
export { IamPoliciesCreatePolicyQueryParams };
var IamPoliciesCreatePolicySecurity = /** @class */ (function (_super) {
    __extends(IamPoliciesCreatePolicySecurity, _super);
    function IamPoliciesCreatePolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamPoliciesCreatePolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamPoliciesCreatePolicySecurity.prototype, "oauth2c", void 0);
    return IamPoliciesCreatePolicySecurity;
}(SpeakeasyBase));
export { IamPoliciesCreatePolicySecurity };
var IamPoliciesCreatePolicyRequest = /** @class */ (function (_super) {
    __extends(IamPoliciesCreatePolicyRequest, _super);
    function IamPoliciesCreatePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamPoliciesCreatePolicyPathParams)
    ], IamPoliciesCreatePolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamPoliciesCreatePolicyQueryParams)
    ], IamPoliciesCreatePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV2betaPolicyInput)
    ], IamPoliciesCreatePolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamPoliciesCreatePolicySecurity)
    ], IamPoliciesCreatePolicyRequest.prototype, "security", void 0);
    return IamPoliciesCreatePolicyRequest;
}(SpeakeasyBase));
export { IamPoliciesCreatePolicyRequest };
var IamPoliciesCreatePolicyResponse = /** @class */ (function (_super) {
    __extends(IamPoliciesCreatePolicyResponse, _super);
    function IamPoliciesCreatePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IamPoliciesCreatePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], IamPoliciesCreatePolicyResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IamPoliciesCreatePolicyResponse.prototype, "statusCode", void 0);
    return IamPoliciesCreatePolicyResponse;
}(SpeakeasyBase));
export { IamPoliciesCreatePolicyResponse };
