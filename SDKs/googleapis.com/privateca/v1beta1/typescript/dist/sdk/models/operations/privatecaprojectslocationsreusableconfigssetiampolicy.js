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
var PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams, _super);
    function PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams.prototype, "resource", void 0);
    return PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams };
var PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams, _super);
    function PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams };
var PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity, _super);
    function PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity };
var PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest, _super);
    function PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsSetIamPolicyPathParams)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsSetIamPolicyQueryParams)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest };
var PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse, _super);
    function PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse };
