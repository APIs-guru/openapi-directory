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
var PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams.prototype, "resource", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams };
var PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams };
var PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity };
var PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyQueryParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest };
var PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse };
