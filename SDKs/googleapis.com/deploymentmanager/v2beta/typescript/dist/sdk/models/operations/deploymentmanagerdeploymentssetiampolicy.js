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
var DeploymentmanagerDeploymentsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsSetIamPolicyPathParams, _super);
    function DeploymentmanagerDeploymentsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyPathParams.prototype, "resource", void 0);
    return DeploymentmanagerDeploymentsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsSetIamPolicyPathParams };
var DeploymentmanagerDeploymentsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsSetIamPolicyQueryParams, _super);
    function DeploymentmanagerDeploymentsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsSetIamPolicyQueryParams };
var DeploymentmanagerDeploymentsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsSetIamPolicySecurityOption1, _super);
    function DeploymentmanagerDeploymentsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsSetIamPolicySecurityOption1 };
var DeploymentmanagerDeploymentsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsSetIamPolicySecurityOption2, _super);
    function DeploymentmanagerDeploymentsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsSetIamPolicySecurityOption2 };
var DeploymentmanagerDeploymentsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsSetIamPolicySecurity, _super);
    function DeploymentmanagerDeploymentsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsSetIamPolicySecurityOption1)
    ], DeploymentmanagerDeploymentsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsSetIamPolicySecurityOption2)
    ], DeploymentmanagerDeploymentsSetIamPolicySecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsSetIamPolicySecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsSetIamPolicySecurity };
var DeploymentmanagerDeploymentsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsSetIamPolicyRequest, _super);
    function DeploymentmanagerDeploymentsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsSetIamPolicyPathParams)
    ], DeploymentmanagerDeploymentsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsSetIamPolicyQueryParams)
    ], DeploymentmanagerDeploymentsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GlobalSetPolicyRequest)
    ], DeploymentmanagerDeploymentsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsSetIamPolicySecurity)
    ], DeploymentmanagerDeploymentsSetIamPolicyRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsSetIamPolicyRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsSetIamPolicyRequest };
var DeploymentmanagerDeploymentsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsSetIamPolicyResponse, _super);
    function DeploymentmanagerDeploymentsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DeploymentmanagerDeploymentsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsSetIamPolicyResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsSetIamPolicyResponse };
