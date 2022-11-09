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
var StorageBucketsUpdatePathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsUpdatePathParams, _super);
    function StorageBucketsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdatePathParams.prototype, "bucket", void 0);
    return StorageBucketsUpdatePathParams;
}(SpeakeasyBase));
export { StorageBucketsUpdatePathParams };
export var StorageBucketsUpdatePredefinedAclEnum;
(function (StorageBucketsUpdatePredefinedAclEnum) {
    StorageBucketsUpdatePredefinedAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageBucketsUpdatePredefinedAclEnum["Private"] = "private";
    StorageBucketsUpdatePredefinedAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageBucketsUpdatePredefinedAclEnum["PublicRead"] = "publicRead";
    StorageBucketsUpdatePredefinedAclEnum["PublicReadWrite"] = "publicReadWrite";
})(StorageBucketsUpdatePredefinedAclEnum || (StorageBucketsUpdatePredefinedAclEnum = {}));
export var StorageBucketsUpdatePredefinedDefaultObjectAclEnum;
(function (StorageBucketsUpdatePredefinedDefaultObjectAclEnum) {
    StorageBucketsUpdatePredefinedDefaultObjectAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageBucketsUpdatePredefinedDefaultObjectAclEnum["BucketOwnerFullControl"] = "bucketOwnerFullControl";
    StorageBucketsUpdatePredefinedDefaultObjectAclEnum["BucketOwnerRead"] = "bucketOwnerRead";
    StorageBucketsUpdatePredefinedDefaultObjectAclEnum["Private"] = "private";
    StorageBucketsUpdatePredefinedDefaultObjectAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageBucketsUpdatePredefinedDefaultObjectAclEnum["PublicRead"] = "publicRead";
})(StorageBucketsUpdatePredefinedDefaultObjectAclEnum || (StorageBucketsUpdatePredefinedDefaultObjectAclEnum = {}));
export var StorageBucketsUpdateProjectionEnum;
(function (StorageBucketsUpdateProjectionEnum) {
    StorageBucketsUpdateProjectionEnum["Full"] = "full";
    StorageBucketsUpdateProjectionEnum["NoAcl"] = "noAcl";
})(StorageBucketsUpdateProjectionEnum || (StorageBucketsUpdateProjectionEnum = {}));
var StorageBucketsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsUpdateQueryParams, _super);
    function StorageBucketsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=predefinedAcl" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "predefinedAcl", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=predefinedDefaultObjectAcl" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "predefinedDefaultObjectAcl", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "projection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsUpdateQueryParams.prototype, "userProject", void 0);
    return StorageBucketsUpdateQueryParams;
}(SpeakeasyBase));
export { StorageBucketsUpdateQueryParams };
var StorageBucketsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsUpdateSecurityOption1, _super);
    function StorageBucketsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsUpdateSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsUpdateSecurityOption1 };
var StorageBucketsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsUpdateSecurityOption2, _super);
    function StorageBucketsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsUpdateSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsUpdateSecurityOption2 };
var StorageBucketsUpdateSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsUpdateSecurity, _super);
    function StorageBucketsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsUpdateSecurityOption1)
    ], StorageBucketsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsUpdateSecurityOption2)
    ], StorageBucketsUpdateSecurity.prototype, "option2", void 0);
    return StorageBucketsUpdateSecurity;
}(SpeakeasyBase));
export { StorageBucketsUpdateSecurity };
var StorageBucketsUpdateRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsUpdateRequest, _super);
    function StorageBucketsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsUpdatePathParams)
    ], StorageBucketsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsUpdateQueryParams)
    ], StorageBucketsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsUpdateSecurity)
    ], StorageBucketsUpdateRequest.prototype, "security", void 0);
    return StorageBucketsUpdateRequest;
}(SpeakeasyBase));
export { StorageBucketsUpdateRequest };
var StorageBucketsUpdateResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsUpdateResponse, _super);
    function StorageBucketsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsUpdateResponse.prototype, "bucket", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageBucketsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageBucketsUpdateResponse.prototype, "statusCode", void 0);
    return StorageBucketsUpdateResponse;
}(SpeakeasyBase));
export { StorageBucketsUpdateResponse };
