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
var StorageBucketsPatchPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchPathParams, _super);
    function StorageBucketsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchPathParams.prototype, "bucket", void 0);
    return StorageBucketsPatchPathParams;
}(SpeakeasyBase));
export { StorageBucketsPatchPathParams };
export var StorageBucketsPatchPredefinedAclEnum;
(function (StorageBucketsPatchPredefinedAclEnum) {
    StorageBucketsPatchPredefinedAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageBucketsPatchPredefinedAclEnum["Private"] = "private";
    StorageBucketsPatchPredefinedAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageBucketsPatchPredefinedAclEnum["PublicRead"] = "publicRead";
    StorageBucketsPatchPredefinedAclEnum["PublicReadWrite"] = "publicReadWrite";
})(StorageBucketsPatchPredefinedAclEnum || (StorageBucketsPatchPredefinedAclEnum = {}));
export var StorageBucketsPatchPredefinedDefaultObjectAclEnum;
(function (StorageBucketsPatchPredefinedDefaultObjectAclEnum) {
    StorageBucketsPatchPredefinedDefaultObjectAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageBucketsPatchPredefinedDefaultObjectAclEnum["BucketOwnerFullControl"] = "bucketOwnerFullControl";
    StorageBucketsPatchPredefinedDefaultObjectAclEnum["BucketOwnerRead"] = "bucketOwnerRead";
    StorageBucketsPatchPredefinedDefaultObjectAclEnum["Private"] = "private";
    StorageBucketsPatchPredefinedDefaultObjectAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageBucketsPatchPredefinedDefaultObjectAclEnum["PublicRead"] = "publicRead";
})(StorageBucketsPatchPredefinedDefaultObjectAclEnum || (StorageBucketsPatchPredefinedDefaultObjectAclEnum = {}));
export var StorageBucketsPatchProjectionEnum;
(function (StorageBucketsPatchProjectionEnum) {
    StorageBucketsPatchProjectionEnum["Full"] = "full";
    StorageBucketsPatchProjectionEnum["NoAcl"] = "noAcl";
})(StorageBucketsPatchProjectionEnum || (StorageBucketsPatchProjectionEnum = {}));
var StorageBucketsPatchQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchQueryParams, _super);
    function StorageBucketsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=predefinedAcl" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "predefinedAcl", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=predefinedDefaultObjectAcl" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "predefinedDefaultObjectAcl", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "projection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsPatchQueryParams.prototype, "userProject", void 0);
    return StorageBucketsPatchQueryParams;
}(SpeakeasyBase));
export { StorageBucketsPatchQueryParams };
var StorageBucketsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchSecurityOption1, _super);
    function StorageBucketsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsPatchSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsPatchSecurityOption1 };
var StorageBucketsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchSecurityOption2, _super);
    function StorageBucketsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsPatchSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsPatchSecurityOption2 };
var StorageBucketsPatchSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchSecurity, _super);
    function StorageBucketsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsPatchSecurityOption1)
    ], StorageBucketsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsPatchSecurityOption2)
    ], StorageBucketsPatchSecurity.prototype, "option2", void 0);
    return StorageBucketsPatchSecurity;
}(SpeakeasyBase));
export { StorageBucketsPatchSecurity };
var StorageBucketsPatchRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchRequest, _super);
    function StorageBucketsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsPatchPathParams)
    ], StorageBucketsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsPatchQueryParams)
    ], StorageBucketsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsPatchSecurity)
    ], StorageBucketsPatchRequest.prototype, "security", void 0);
    return StorageBucketsPatchRequest;
}(SpeakeasyBase));
export { StorageBucketsPatchRequest };
var StorageBucketsPatchResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsPatchResponse, _super);
    function StorageBucketsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsPatchResponse.prototype, "bucket", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageBucketsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageBucketsPatchResponse.prototype, "statusCode", void 0);
    return StorageBucketsPatchResponse;
}(SpeakeasyBase));
export { StorageBucketsPatchResponse };
