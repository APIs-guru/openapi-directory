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
var ServicemanagementServicesConsumersGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicyPathParams, _super);
    function ServicemanagementServicesConsumersGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyPathParams.prototype, "resource", void 0);
    return ServicemanagementServicesConsumersGetIamPolicyPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicyPathParams };
var ServicemanagementServicesConsumersGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicyQueryParams, _super);
    function ServicemanagementServicesConsumersGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesConsumersGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicyQueryParams };
var ServicemanagementServicesConsumersGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicySecurityOption1, _super);
    function ServicemanagementServicesConsumersGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicySecurityOption1 };
var ServicemanagementServicesConsumersGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicySecurityOption2, _super);
    function ServicemanagementServicesConsumersGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicySecurityOption2 };
var ServicemanagementServicesConsumersGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicySecurityOption3, _super);
    function ServicemanagementServicesConsumersGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersGetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicySecurityOption3 };
var ServicemanagementServicesConsumersGetIamPolicySecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicySecurityOption4, _super);
    function ServicemanagementServicesConsumersGetIamPolicySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersGetIamPolicySecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersGetIamPolicySecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicySecurityOption4 };
var ServicemanagementServicesConsumersGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicySecurity, _super);
    function ServicemanagementServicesConsumersGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersGetIamPolicySecurityOption1)
    ], ServicemanagementServicesConsumersGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersGetIamPolicySecurityOption2)
    ], ServicemanagementServicesConsumersGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersGetIamPolicySecurityOption3)
    ], ServicemanagementServicesConsumersGetIamPolicySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersGetIamPolicySecurityOption4)
    ], ServicemanagementServicesConsumersGetIamPolicySecurity.prototype, "option4", void 0);
    return ServicemanagementServicesConsumersGetIamPolicySecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicySecurity };
var ServicemanagementServicesConsumersGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicyRequest, _super);
    function ServicemanagementServicesConsumersGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersGetIamPolicyPathParams)
    ], ServicemanagementServicesConsumersGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersGetIamPolicyQueryParams)
    ], ServicemanagementServicesConsumersGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], ServicemanagementServicesConsumersGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersGetIamPolicySecurity)
    ], ServicemanagementServicesConsumersGetIamPolicyRequest.prototype, "security", void 0);
    return ServicemanagementServicesConsumersGetIamPolicyRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicyRequest };
var ServicemanagementServicesConsumersGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersGetIamPolicyResponse, _super);
    function ServicemanagementServicesConsumersGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], ServicemanagementServicesConsumersGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConsumersGetIamPolicyResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesConsumersGetIamPolicyResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersGetIamPolicyResponse };
