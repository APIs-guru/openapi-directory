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
var StorageObjectsInsertPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertPathParams, _super);
    function StorageObjectsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertPathParams.prototype, "bucket", void 0);
    return StorageObjectsInsertPathParams;
}(SpeakeasyBase));
export { StorageObjectsInsertPathParams };
export var StorageObjectsInsertPredefinedAclEnum;
(function (StorageObjectsInsertPredefinedAclEnum) {
    StorageObjectsInsertPredefinedAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageObjectsInsertPredefinedAclEnum["BucketOwnerFullControl"] = "bucketOwnerFullControl";
    StorageObjectsInsertPredefinedAclEnum["BucketOwnerRead"] = "bucketOwnerRead";
    StorageObjectsInsertPredefinedAclEnum["Private"] = "private";
    StorageObjectsInsertPredefinedAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageObjectsInsertPredefinedAclEnum["PublicRead"] = "publicRead";
})(StorageObjectsInsertPredefinedAclEnum || (StorageObjectsInsertPredefinedAclEnum = {}));
export var StorageObjectsInsertProjectionEnum;
(function (StorageObjectsInsertProjectionEnum) {
    StorageObjectsInsertProjectionEnum["Full"] = "full";
    StorageObjectsInsertProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsInsertProjectionEnum || (StorageObjectsInsertProjectionEnum = {}));
var StorageObjectsInsertQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertQueryParams, _super);
    function StorageObjectsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=contentEncoding" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "contentEncoding", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifGenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=kmsKeyName" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "kmsKeyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=predefinedAcl" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "predefinedAcl", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "projection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsInsertQueryParams.prototype, "userProject", void 0);
    return StorageObjectsInsertQueryParams;
}(SpeakeasyBase));
export { StorageObjectsInsertQueryParams };
var StorageObjectsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurityOption1, _super);
    function StorageObjectsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsInsertSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsInsertSecurityOption1 };
var StorageObjectsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurityOption2, _super);
    function StorageObjectsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsInsertSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsInsertSecurityOption2 };
var StorageObjectsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurityOption3, _super);
    function StorageObjectsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsInsertSecurityOption3;
}(SpeakeasyBase));
export { StorageObjectsInsertSecurityOption3 };
var StorageObjectsInsertSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertSecurity, _super);
    function StorageObjectsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsInsertSecurityOption1)
    ], StorageObjectsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsInsertSecurityOption2)
    ], StorageObjectsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsInsertSecurityOption3)
    ], StorageObjectsInsertSecurity.prototype, "option3", void 0);
    return StorageObjectsInsertSecurity;
}(SpeakeasyBase));
export { StorageObjectsInsertSecurity };
var StorageObjectsInsertRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertRequest, _super);
    function StorageObjectsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsInsertPathParams)
    ], StorageObjectsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsInsertQueryParams)
    ], StorageObjectsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], StorageObjectsInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsInsertSecurity)
    ], StorageObjectsInsertRequest.prototype, "security", void 0);
    return StorageObjectsInsertRequest;
}(SpeakeasyBase));
export { StorageObjectsInsertRequest };
var StorageObjectsInsertResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsInsertResponse, _super);
    function StorageObjectsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageObjectsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Object)
    ], StorageObjectsInsertResponse.prototype, "object", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageObjectsInsertResponse.prototype, "statusCode", void 0);
    return StorageObjectsInsertResponse;
}(SpeakeasyBase));
export { StorageObjectsInsertResponse };
