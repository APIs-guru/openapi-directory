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
var SpannerProjectsInstancesDatabasesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSetIamPolicyPathParams, _super);
    function SpannerProjectsInstancesDatabasesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyPathParams.prototype, "resource", void 0);
    return SpannerProjectsInstancesDatabasesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSetIamPolicyPathParams };
var SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams, _super);
    function SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams };
var SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1 };
var SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2 };
var SpannerProjectsInstancesDatabasesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSetIamPolicySecurity, _super);
    function SpannerProjectsInstancesDatabasesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1)
    ], SpannerProjectsInstancesDatabasesSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2)
    ], SpannerProjectsInstancesDatabasesSetIamPolicySecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesSetIamPolicySecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSetIamPolicySecurity };
var SpannerProjectsInstancesDatabasesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSetIamPolicyRequest, _super);
    function SpannerProjectsInstancesDatabasesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSetIamPolicyPathParams)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSetIamPolicySecurity)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesSetIamPolicyRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSetIamPolicyRequest };
var SpannerProjectsInstancesDatabasesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSetIamPolicyResponse, _super);
    function SpannerProjectsInstancesDatabasesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesSetIamPolicyResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSetIamPolicyResponse };
