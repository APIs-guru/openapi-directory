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
var CloudresourcemanagerProjectsClearOrgPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsClearOrgPolicyPathParams, _super);
    function CloudresourcemanagerProjectsClearOrgPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerProjectsClearOrgPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsClearOrgPolicyPathParams };
var CloudresourcemanagerProjectsClearOrgPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsClearOrgPolicyQueryParams, _super);
    function CloudresourcemanagerProjectsClearOrgPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsClearOrgPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsClearOrgPolicyQueryParams };
var CloudresourcemanagerProjectsClearOrgPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsClearOrgPolicySecurity, _super);
    function CloudresourcemanagerProjectsClearOrgPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsClearOrgPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsClearOrgPolicySecurity.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsClearOrgPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsClearOrgPolicySecurity };
var CloudresourcemanagerProjectsClearOrgPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsClearOrgPolicyRequest, _super);
    function CloudresourcemanagerProjectsClearOrgPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsClearOrgPolicyPathParams)
    ], CloudresourcemanagerProjectsClearOrgPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsClearOrgPolicyQueryParams)
    ], CloudresourcemanagerProjectsClearOrgPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClearOrgPolicyRequest)
    ], CloudresourcemanagerProjectsClearOrgPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsClearOrgPolicySecurity)
    ], CloudresourcemanagerProjectsClearOrgPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsClearOrgPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsClearOrgPolicyRequest };
var CloudresourcemanagerProjectsClearOrgPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsClearOrgPolicyResponse, _super);
    function CloudresourcemanagerProjectsClearOrgPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsClearOrgPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CloudresourcemanagerProjectsClearOrgPolicyResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsClearOrgPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsClearOrgPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsClearOrgPolicyResponse };
