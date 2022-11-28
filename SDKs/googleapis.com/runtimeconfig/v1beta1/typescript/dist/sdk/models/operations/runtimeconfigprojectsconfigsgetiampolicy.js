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
var RuntimeconfigProjectsConfigsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsGetIamPolicyPathParams, _super);
    function RuntimeconfigProjectsConfigsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyPathParams.prototype, "resource", void 0);
    return RuntimeconfigProjectsConfigsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsGetIamPolicyPathParams };
var RuntimeconfigProjectsConfigsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsGetIamPolicyQueryParams, _super);
    function RuntimeconfigProjectsConfigsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsGetIamPolicyQueryParams };
var RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1, _super);
    function RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1 };
var RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2, _super);
    function RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2 };
var RuntimeconfigProjectsConfigsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsGetIamPolicySecurity, _super);
    function RuntimeconfigProjectsConfigsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1)
    ], RuntimeconfigProjectsConfigsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2)
    ], RuntimeconfigProjectsConfigsGetIamPolicySecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsGetIamPolicySecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsGetIamPolicySecurity };
var RuntimeconfigProjectsConfigsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsGetIamPolicyRequest, _super);
    function RuntimeconfigProjectsConfigsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsGetIamPolicyPathParams)
    ], RuntimeconfigProjectsConfigsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsGetIamPolicyQueryParams)
    ], RuntimeconfigProjectsConfigsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsGetIamPolicySecurity)
    ], RuntimeconfigProjectsConfigsGetIamPolicyRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsGetIamPolicyRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsGetIamPolicyRequest };
var RuntimeconfigProjectsConfigsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsGetIamPolicyResponse, _super);
    function RuntimeconfigProjectsConfigsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], RuntimeconfigProjectsConfigsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return RuntimeconfigProjectsConfigsGetIamPolicyResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsGetIamPolicyResponse };
