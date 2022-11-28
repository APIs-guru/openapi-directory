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
var SecuritycenterOrganizationsSourcesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesSetIamPolicyPathParams, _super);
    function SecuritycenterOrganizationsSourcesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyPathParams.prototype, "resource", void 0);
    return SecuritycenterOrganizationsSourcesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesSetIamPolicyPathParams };
var SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams, _super);
    function SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams };
var SecuritycenterOrganizationsSourcesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesSetIamPolicySecurity, _super);
    function SecuritycenterOrganizationsSourcesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsSourcesSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsSourcesSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsSourcesSetIamPolicySecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesSetIamPolicySecurity };
var SecuritycenterOrganizationsSourcesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesSetIamPolicyRequest, _super);
    function SecuritycenterOrganizationsSourcesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesSetIamPolicyPathParams)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesSetIamPolicySecurity)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsSourcesSetIamPolicyRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesSetIamPolicyRequest };
var SecuritycenterOrganizationsSourcesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesSetIamPolicyResponse, _super);
    function SecuritycenterOrganizationsSourcesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsSourcesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsSourcesSetIamPolicyResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesSetIamPolicyResponse };
