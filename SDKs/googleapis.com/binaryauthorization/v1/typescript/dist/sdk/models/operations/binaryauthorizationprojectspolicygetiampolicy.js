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
var BinaryauthorizationProjectsPolicyGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicyGetIamPolicyPathParams, _super);
    function BinaryauthorizationProjectsPolicyGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyPathParams.prototype, "resource", void 0);
    return BinaryauthorizationProjectsPolicyGetIamPolicyPathParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicyGetIamPolicyPathParams };
var BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams, _super);
    function BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams };
var BinaryauthorizationProjectsPolicyGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicyGetIamPolicySecurity, _super);
    function BinaryauthorizationProjectsPolicyGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BinaryauthorizationProjectsPolicyGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BinaryauthorizationProjectsPolicyGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return BinaryauthorizationProjectsPolicyGetIamPolicySecurity;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicyGetIamPolicySecurity };
var BinaryauthorizationProjectsPolicyGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicyGetIamPolicyRequest, _super);
    function BinaryauthorizationProjectsPolicyGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsPolicyGetIamPolicyPathParams)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsPolicyGetIamPolicySecurity)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyRequest.prototype, "security", void 0);
    return BinaryauthorizationProjectsPolicyGetIamPolicyRequest;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicyGetIamPolicyRequest };
var BinaryauthorizationProjectsPolicyGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsPolicyGetIamPolicyResponse, _super);
    function BinaryauthorizationProjectsPolicyGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IamPolicy)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyResponse.prototype, "iamPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BinaryauthorizationProjectsPolicyGetIamPolicyResponse.prototype, "statusCode", void 0);
    return BinaryauthorizationProjectsPolicyGetIamPolicyResponse;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsPolicyGetIamPolicyResponse };
