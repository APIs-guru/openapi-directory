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
var StorageBucketsLockRetentionPolicyPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicyPathParams, _super);
    function StorageBucketsLockRetentionPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyPathParams.prototype, "bucket", void 0);
    return StorageBucketsLockRetentionPolicyPathParams;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicyPathParams };
var StorageBucketsLockRetentionPolicyQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicyQueryParams, _super);
    function StorageBucketsLockRetentionPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyQueryParams.prototype, "userProject", void 0);
    return StorageBucketsLockRetentionPolicyQueryParams;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicyQueryParams };
var StorageBucketsLockRetentionPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicySecurityOption1, _super);
    function StorageBucketsLockRetentionPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsLockRetentionPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsLockRetentionPolicySecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsLockRetentionPolicySecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicySecurityOption1 };
var StorageBucketsLockRetentionPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicySecurityOption2, _super);
    function StorageBucketsLockRetentionPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsLockRetentionPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsLockRetentionPolicySecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsLockRetentionPolicySecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicySecurityOption2 };
var StorageBucketsLockRetentionPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicySecurityOption3, _super);
    function StorageBucketsLockRetentionPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsLockRetentionPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsLockRetentionPolicySecurityOption3.prototype, "oauth2c", void 0);
    return StorageBucketsLockRetentionPolicySecurityOption3;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicySecurityOption3 };
var StorageBucketsLockRetentionPolicySecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicySecurity, _super);
    function StorageBucketsLockRetentionPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsLockRetentionPolicySecurityOption1)
    ], StorageBucketsLockRetentionPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsLockRetentionPolicySecurityOption2)
    ], StorageBucketsLockRetentionPolicySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsLockRetentionPolicySecurityOption3)
    ], StorageBucketsLockRetentionPolicySecurity.prototype, "option3", void 0);
    return StorageBucketsLockRetentionPolicySecurity;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicySecurity };
var StorageBucketsLockRetentionPolicyRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicyRequest, _super);
    function StorageBucketsLockRetentionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsLockRetentionPolicyPathParams)
    ], StorageBucketsLockRetentionPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsLockRetentionPolicyQueryParams)
    ], StorageBucketsLockRetentionPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsLockRetentionPolicySecurity)
    ], StorageBucketsLockRetentionPolicyRequest.prototype, "security", void 0);
    return StorageBucketsLockRetentionPolicyRequest;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicyRequest };
var StorageBucketsLockRetentionPolicyResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsLockRetentionPolicyResponse, _super);
    function StorageBucketsLockRetentionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsLockRetentionPolicyResponse.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageBucketsLockRetentionPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageBucketsLockRetentionPolicyResponse.prototype, "statusCode", void 0);
    return StorageBucketsLockRetentionPolicyResponse;
}(SpeakeasyBase));
export { StorageBucketsLockRetentionPolicyResponse };
