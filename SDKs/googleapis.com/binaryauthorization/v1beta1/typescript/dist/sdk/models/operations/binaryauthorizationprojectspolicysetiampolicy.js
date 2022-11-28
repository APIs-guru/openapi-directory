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
var BinaryauthorizationProjectsPolicySetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicySetIamPolicyPathParams, _super);
    function BinaryauthorizationProjectsPolicySetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyPathParams.prototype, "resource", void 0);
    return BinaryauthorizationProjectsPolicySetIamPolicyPathParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicySetIamPolicyPathParams };
var BinaryauthorizationProjectsPolicySetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicySetIamPolicyQueryParams, _super);
    function BinaryauthorizationProjectsPolicySetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BinaryauthorizationProjectsPolicySetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicySetIamPolicyQueryParams };
var BinaryauthorizationProjectsPolicySetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicySetIamPolicySecurity, _super);
    function BinaryauthorizationProjectsPolicySetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BinaryauthorizationProjectsPolicySetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BinaryauthorizationProjectsPolicySetIamPolicySecurity.prototype, "oauth2c", void 0);
    return BinaryauthorizationProjectsPolicySetIamPolicySecurity;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicySetIamPolicySecurity };
var BinaryauthorizationProjectsPolicySetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicySetIamPolicyRequest, _super);
    function BinaryauthorizationProjectsPolicySetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsPolicySetIamPolicyPathParams)
    ], BinaryauthorizationProjectsPolicySetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsPolicySetIamPolicyQueryParams)
    ], BinaryauthorizationProjectsPolicySetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], BinaryauthorizationProjectsPolicySetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsPolicySetIamPolicySecurity)
    ], BinaryauthorizationProjectsPolicySetIamPolicyRequest.prototype, "security", void 0);
    return BinaryauthorizationProjectsPolicySetIamPolicyRequest;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicySetIamPolicyRequest };
var BinaryauthorizationProjectsPolicySetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicySetIamPolicyResponse, _super);
    function BinaryauthorizationProjectsPolicySetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicySetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IamPolicy)
    ], BinaryauthorizationProjectsPolicySetIamPolicyResponse.prototype, "iamPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BinaryauthorizationProjectsPolicySetIamPolicyResponse.prototype, "statusCode", void 0);
    return BinaryauthorizationProjectsPolicySetIamPolicyResponse;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicySetIamPolicyResponse };
