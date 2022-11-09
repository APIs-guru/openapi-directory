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
var IamProjectsServiceAccountsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSetIamPolicyPathParams, _super);
    function IamProjectsServiceAccountsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyPathParams.prototype, "resource", void 0);
    return IamProjectsServiceAccountsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSetIamPolicyPathParams };
var IamProjectsServiceAccountsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSetIamPolicyQueryParams, _super);
    function IamProjectsServiceAccountsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return IamProjectsServiceAccountsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSetIamPolicyQueryParams };
var IamProjectsServiceAccountsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSetIamPolicySecurity, _super);
    function IamProjectsServiceAccountsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsServiceAccountsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsServiceAccountsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return IamProjectsServiceAccountsSetIamPolicySecurity;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSetIamPolicySecurity };
var IamProjectsServiceAccountsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSetIamPolicyRequest, _super);
    function IamProjectsServiceAccountsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsSetIamPolicyPathParams)
    ], IamProjectsServiceAccountsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsSetIamPolicyQueryParams)
    ], IamProjectsServiceAccountsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], IamProjectsServiceAccountsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsSetIamPolicySecurity)
    ], IamProjectsServiceAccountsSetIamPolicyRequest.prototype, "security", void 0);
    return IamProjectsServiceAccountsSetIamPolicyRequest;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSetIamPolicyRequest };
var IamProjectsServiceAccountsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSetIamPolicyResponse, _super);
    function IamProjectsServiceAccountsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], IamProjectsServiceAccountsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamProjectsServiceAccountsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return IamProjectsServiceAccountsSetIamPolicyResponse;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSetIamPolicyResponse };
