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
var CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams, _super);
    function CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams };
var CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams };
var CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1 };
var CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2 };
var CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity, _super);
    function CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity };
var CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest, _super);
    function CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest };
var CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse, _super);
    function CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse };
