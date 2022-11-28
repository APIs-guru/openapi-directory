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
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyPathParams, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyPathParams.prototype, "resource", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyPathParams };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyPathParams)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyQueryParams)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest.prototype, "security", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse };
