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
var StorageObjectsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicyPathParams, _super);
    function StorageObjectsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyPathParams.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyPathParams.prototype, "object", void 0);
    return StorageObjectsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicyPathParams };
var StorageObjectsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicyQueryParams, _super);
    function StorageObjectsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "generation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyQueryParams.prototype, "userProject", void 0);
    return StorageObjectsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicyQueryParams };
var StorageObjectsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicySecurityOption1, _super);
    function StorageObjectsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicySecurityOption1 };
var StorageObjectsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicySecurityOption2, _super);
    function StorageObjectsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicySecurityOption2 };
var StorageObjectsSetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicySecurityOption3, _super);
    function StorageObjectsSetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsSetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsSetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsSetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicySecurityOption3 };
var StorageObjectsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicySecurity, _super);
    function StorageObjectsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsSetIamPolicySecurityOption1)
    ], StorageObjectsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsSetIamPolicySecurityOption2)
    ], StorageObjectsSetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsSetIamPolicySecurityOption3)
    ], StorageObjectsSetIamPolicySecurity.prototype, "option3", void 0);
    return StorageObjectsSetIamPolicySecurity;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicySecurity };
var StorageObjectsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicyRequest, _super);
    function StorageObjectsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsSetIamPolicyPathParams)
    ], StorageObjectsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsSetIamPolicyQueryParams)
    ], StorageObjectsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Policy)
    ], StorageObjectsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsSetIamPolicySecurity)
    ], StorageObjectsSetIamPolicyRequest.prototype, "security", void 0);
    return StorageObjectsSetIamPolicyRequest;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicyRequest };
var StorageObjectsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsSetIamPolicyResponse, _super);
    function StorageObjectsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageObjectsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], StorageObjectsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageObjectsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return StorageObjectsSetIamPolicyResponse;
}(SpeakeasyBase));
export { StorageObjectsSetIamPolicyResponse };
