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
var PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams.prototype, "resource", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams };
var PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams };
var PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity };
var PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsGetIamPolicyQueryParams)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest };
var PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse };
