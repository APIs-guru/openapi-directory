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
var PubsubProjectsTopicsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSetIamPolicyPathParams, _super);
    function PubsubProjectsTopicsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyPathParams.prototype, "resource", void 0);
    return PubsubProjectsTopicsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSetIamPolicyPathParams };
var PubsubProjectsTopicsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSetIamPolicyQueryParams, _super);
    function PubsubProjectsTopicsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSetIamPolicyQueryParams };
var PubsubProjectsTopicsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSetIamPolicySecurityOption1, _super);
    function PubsubProjectsTopicsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSetIamPolicySecurityOption1 };
var PubsubProjectsTopicsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSetIamPolicySecurityOption2, _super);
    function PubsubProjectsTopicsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSetIamPolicySecurityOption2 };
var PubsubProjectsTopicsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSetIamPolicySecurity, _super);
    function PubsubProjectsTopicsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsSetIamPolicySecurityOption1)
    ], PubsubProjectsTopicsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsSetIamPolicySecurityOption2)
    ], PubsubProjectsTopicsSetIamPolicySecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsSetIamPolicySecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSetIamPolicySecurity };
var PubsubProjectsTopicsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSetIamPolicyRequest, _super);
    function PubsubProjectsTopicsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSetIamPolicyPathParams)
    ], PubsubProjectsTopicsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSetIamPolicyQueryParams)
    ], PubsubProjectsTopicsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], PubsubProjectsTopicsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSetIamPolicySecurity)
    ], PubsubProjectsTopicsSetIamPolicyRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsSetIamPolicyRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSetIamPolicyRequest };
var PubsubProjectsTopicsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSetIamPolicyResponse, _super);
    function PubsubProjectsTopicsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], PubsubProjectsTopicsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return PubsubProjectsTopicsSetIamPolicyResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSetIamPolicyResponse };
