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
var StorageBucketsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsGetIamPolicyPathParams, _super);
    function StorageBucketsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyPathParams.prototype, "bucket", void 0);
    return StorageBucketsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { StorageBucketsGetIamPolicyPathParams };
var StorageBucketsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsGetIamPolicyQueryParams, _super);
    function StorageBucketsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=optionsRequestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyQueryParams.prototype, "userProject", void 0);
    return StorageBucketsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { StorageBucketsGetIamPolicyQueryParams };
var StorageBucketsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsGetIamPolicySecurityOption1, _super);
    function StorageBucketsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsGetIamPolicySecurityOption1 };
var StorageBucketsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsGetIamPolicySecurityOption2, _super);
    function StorageBucketsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsGetIamPolicySecurityOption2 };
var StorageBucketsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsGetIamPolicySecurity, _super);
    function StorageBucketsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsGetIamPolicySecurityOption1)
    ], StorageBucketsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsGetIamPolicySecurityOption2)
    ], StorageBucketsGetIamPolicySecurity.prototype, "option2", void 0);
    return StorageBucketsGetIamPolicySecurity;
}(SpeakeasyBase));
export { StorageBucketsGetIamPolicySecurity };
var StorageBucketsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsGetIamPolicyRequest, _super);
    function StorageBucketsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsGetIamPolicyPathParams)
    ], StorageBucketsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsGetIamPolicyQueryParams)
    ], StorageBucketsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsGetIamPolicySecurity)
    ], StorageBucketsGetIamPolicyRequest.prototype, "security", void 0);
    return StorageBucketsGetIamPolicyRequest;
}(SpeakeasyBase));
export { StorageBucketsGetIamPolicyRequest };
var StorageBucketsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsGetIamPolicyResponse, _super);
    function StorageBucketsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageBucketsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], StorageBucketsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageBucketsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return StorageBucketsGetIamPolicyResponse;
}(SpeakeasyBase));
export { StorageBucketsGetIamPolicyResponse };
