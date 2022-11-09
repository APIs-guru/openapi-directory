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
var StorageBucketsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyPathParams, _super);
    function StorageBucketsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyPathParams.prototype, "bucket", void 0);
    return StorageBucketsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { StorageBucketsSetIamPolicyPathParams };
var StorageBucketsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyQueryParams, _super);
    function StorageBucketsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyQueryParams.prototype, "userProject", void 0);
    return StorageBucketsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { StorageBucketsSetIamPolicyQueryParams };
var StorageBucketsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicySecurityOption1, _super);
    function StorageBucketsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsSetIamPolicySecurityOption1 };
var StorageBucketsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicySecurityOption2, _super);
    function StorageBucketsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsSetIamPolicySecurityOption2 };
var StorageBucketsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicySecurity, _super);
    function StorageBucketsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsSetIamPolicySecurityOption1)
    ], StorageBucketsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsSetIamPolicySecurityOption2)
    ], StorageBucketsSetIamPolicySecurity.prototype, "option2", void 0);
    return StorageBucketsSetIamPolicySecurity;
}(SpeakeasyBase));
export { StorageBucketsSetIamPolicySecurity };
var StorageBucketsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyRequest, _super);
    function StorageBucketsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsSetIamPolicyPathParams)
    ], StorageBucketsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsSetIamPolicyQueryParams)
    ], StorageBucketsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Policy)
    ], StorageBucketsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsSetIamPolicySecurity)
    ], StorageBucketsSetIamPolicyRequest.prototype, "security", void 0);
    return StorageBucketsSetIamPolicyRequest;
}(SpeakeasyBase));
export { StorageBucketsSetIamPolicyRequest };
var StorageBucketsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsSetIamPolicyResponse, _super);
    function StorageBucketsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageBucketsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], StorageBucketsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageBucketsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return StorageBucketsSetIamPolicyResponse;
}(SpeakeasyBase));
export { StorageBucketsSetIamPolicyResponse };
