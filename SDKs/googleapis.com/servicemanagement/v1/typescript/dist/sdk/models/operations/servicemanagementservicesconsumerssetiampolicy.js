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
var ServicemanagementServicesConsumersSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersSetIamPolicyPathParams, _super);
    function ServicemanagementServicesConsumersSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyPathParams.prototype, "resource", void 0);
    return ServicemanagementServicesConsumersSetIamPolicyPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersSetIamPolicyPathParams };
var ServicemanagementServicesConsumersSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersSetIamPolicyQueryParams, _super);
    function ServicemanagementServicesConsumersSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesConsumersSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersSetIamPolicyQueryParams };
var ServicemanagementServicesConsumersSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersSetIamPolicySecurityOption1, _super);
    function ServicemanagementServicesConsumersSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersSetIamPolicySecurityOption1 };
var ServicemanagementServicesConsumersSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersSetIamPolicySecurityOption2, _super);
    function ServicemanagementServicesConsumersSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersSetIamPolicySecurityOption2 };
var ServicemanagementServicesConsumersSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersSetIamPolicySecurity, _super);
    function ServicemanagementServicesConsumersSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersSetIamPolicySecurityOption1)
    ], ServicemanagementServicesConsumersSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersSetIamPolicySecurityOption2)
    ], ServicemanagementServicesConsumersSetIamPolicySecurity.prototype, "option2", void 0);
    return ServicemanagementServicesConsumersSetIamPolicySecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersSetIamPolicySecurity };
var ServicemanagementServicesConsumersSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersSetIamPolicyRequest, _super);
    function ServicemanagementServicesConsumersSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersSetIamPolicyPathParams)
    ], ServicemanagementServicesConsumersSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersSetIamPolicyQueryParams)
    ], ServicemanagementServicesConsumersSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], ServicemanagementServicesConsumersSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersSetIamPolicySecurity)
    ], ServicemanagementServicesConsumersSetIamPolicyRequest.prototype, "security", void 0);
    return ServicemanagementServicesConsumersSetIamPolicyRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersSetIamPolicyRequest };
var ServicemanagementServicesConsumersSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersSetIamPolicyResponse, _super);
    function ServicemanagementServicesConsumersSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], ServicemanagementServicesConsumersSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConsumersSetIamPolicyResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesConsumersSetIamPolicyResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersSetIamPolicyResponse };
