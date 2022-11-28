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
var RuntimeconfigProjectsConfigsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsSetIamPolicyPathParams, _super);
    function RuntimeconfigProjectsConfigsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyPathParams.prototype, "resource", void 0);
    return RuntimeconfigProjectsConfigsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsSetIamPolicyPathParams };
var RuntimeconfigProjectsConfigsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsSetIamPolicyQueryParams, _super);
    function RuntimeconfigProjectsConfigsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsSetIamPolicyQueryParams };
var RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1, _super);
    function RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1 };
var RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2, _super);
    function RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2 };
var RuntimeconfigProjectsConfigsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsSetIamPolicySecurity, _super);
    function RuntimeconfigProjectsConfigsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1)
    ], RuntimeconfigProjectsConfigsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2)
    ], RuntimeconfigProjectsConfigsSetIamPolicySecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsSetIamPolicySecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsSetIamPolicySecurity };
var RuntimeconfigProjectsConfigsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsSetIamPolicyRequest, _super);
    function RuntimeconfigProjectsConfigsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsSetIamPolicyPathParams)
    ], RuntimeconfigProjectsConfigsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsSetIamPolicyQueryParams)
    ], RuntimeconfigProjectsConfigsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], RuntimeconfigProjectsConfigsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsSetIamPolicySecurity)
    ], RuntimeconfigProjectsConfigsSetIamPolicyRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsSetIamPolicyRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsSetIamPolicyRequest };
var RuntimeconfigProjectsConfigsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsSetIamPolicyResponse, _super);
    function RuntimeconfigProjectsConfigsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], RuntimeconfigProjectsConfigsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return RuntimeconfigProjectsConfigsSetIamPolicyResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsSetIamPolicyResponse };
