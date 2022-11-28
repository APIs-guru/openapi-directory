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
var CloudresourcemanagerTagValuesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetIamPolicyPathParams, _super);
    function CloudresourcemanagerTagValuesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerTagValuesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetIamPolicyPathParams };
var CloudresourcemanagerTagValuesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetIamPolicyQueryParams, _super);
    function CloudresourcemanagerTagValuesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerTagValuesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetIamPolicyQueryParams };
var CloudresourcemanagerTagValuesGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetIamPolicySecurityOption1, _super);
    function CloudresourcemanagerTagValuesGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetIamPolicySecurityOption1 };
var CloudresourcemanagerTagValuesGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetIamPolicySecurityOption2, _super);
    function CloudresourcemanagerTagValuesGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetIamPolicySecurityOption2 };
var CloudresourcemanagerTagValuesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetIamPolicySecurity, _super);
    function CloudresourcemanagerTagValuesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesGetIamPolicySecurityOption1)
    ], CloudresourcemanagerTagValuesGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesGetIamPolicySecurityOption2)
    ], CloudresourcemanagerTagValuesGetIamPolicySecurity.prototype, "option2", void 0);
    return CloudresourcemanagerTagValuesGetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetIamPolicySecurity };
var CloudresourcemanagerTagValuesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetIamPolicyRequest, _super);
    function CloudresourcemanagerTagValuesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesGetIamPolicyPathParams)
    ], CloudresourcemanagerTagValuesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesGetIamPolicyQueryParams)
    ], CloudresourcemanagerTagValuesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], CloudresourcemanagerTagValuesGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesGetIamPolicySecurity)
    ], CloudresourcemanagerTagValuesGetIamPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerTagValuesGetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetIamPolicyRequest };
var CloudresourcemanagerTagValuesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetIamPolicyResponse, _super);
    function CloudresourcemanagerTagValuesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], CloudresourcemanagerTagValuesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagValuesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerTagValuesGetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetIamPolicyResponse };
