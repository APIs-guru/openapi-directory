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
var CloudresourcemanagerTagValuesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesSetIamPolicyPathParams, _super);
    function CloudresourcemanagerTagValuesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerTagValuesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesSetIamPolicyPathParams };
var CloudresourcemanagerTagValuesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesSetIamPolicyQueryParams, _super);
    function CloudresourcemanagerTagValuesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerTagValuesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesSetIamPolicyQueryParams };
var CloudresourcemanagerTagValuesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesSetIamPolicySecurity, _super);
    function CloudresourcemanagerTagValuesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesSetIamPolicySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesSetIamPolicySecurity };
var CloudresourcemanagerTagValuesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesSetIamPolicyRequest, _super);
    function CloudresourcemanagerTagValuesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesSetIamPolicyPathParams)
    ], CloudresourcemanagerTagValuesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesSetIamPolicyQueryParams)
    ], CloudresourcemanagerTagValuesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], CloudresourcemanagerTagValuesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesSetIamPolicySecurity)
    ], CloudresourcemanagerTagValuesSetIamPolicyRequest.prototype, "security", void 0);
    return CloudresourcemanagerTagValuesSetIamPolicyRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesSetIamPolicyRequest };
var CloudresourcemanagerTagValuesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesSetIamPolicyResponse, _super);
    function CloudresourcemanagerTagValuesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], CloudresourcemanagerTagValuesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagValuesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerTagValuesSetIamPolicyResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesSetIamPolicyResponse };
