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
var ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams.prototype, "resource", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams };
var ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams };
var ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity };
var ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest.prototype, "security", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest };
var ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse };
