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
var SpannerProjectsInstancesDatabasesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetIamPolicyPathParams, _super);
    function SpannerProjectsInstancesDatabasesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyPathParams.prototype, "resource", void 0);
    return SpannerProjectsInstancesDatabasesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetIamPolicyPathParams };
var SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams, _super);
    function SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams };
var SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1 };
var SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2 };
var SpannerProjectsInstancesDatabasesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetIamPolicySecurity, _super);
    function SpannerProjectsInstancesDatabasesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1)
    ], SpannerProjectsInstancesDatabasesGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2)
    ], SpannerProjectsInstancesDatabasesGetIamPolicySecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesGetIamPolicySecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetIamPolicySecurity };
var SpannerProjectsInstancesDatabasesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetIamPolicyRequest, _super);
    function SpannerProjectsInstancesDatabasesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetIamPolicyPathParams)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetIamPolicySecurity)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesGetIamPolicyRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetIamPolicyRequest };
var SpannerProjectsInstancesDatabasesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetIamPolicyResponse, _super);
    function SpannerProjectsInstancesDatabasesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesGetIamPolicyResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetIamPolicyResponse };
