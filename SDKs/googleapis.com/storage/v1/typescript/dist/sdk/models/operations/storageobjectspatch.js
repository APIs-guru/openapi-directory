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
var StorageObjectsPatchPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsPatchPathParams, _super);
    function StorageObjectsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchPathParams.prototype, "object", void 0);
    return StorageObjectsPatchPathParams;
}(SpeakeasyBase));
export { StorageObjectsPatchPathParams };
export var StorageObjectsPatchPredefinedAclEnum;
(function (StorageObjectsPatchPredefinedAclEnum) {
    StorageObjectsPatchPredefinedAclEnum["AuthenticatedRead"] = "authenticatedRead";
    StorageObjectsPatchPredefinedAclEnum["BucketOwnerFullControl"] = "bucketOwnerFullControl";
    StorageObjectsPatchPredefinedAclEnum["BucketOwnerRead"] = "bucketOwnerRead";
    StorageObjectsPatchPredefinedAclEnum["Private"] = "private";
    StorageObjectsPatchPredefinedAclEnum["ProjectPrivate"] = "projectPrivate";
    StorageObjectsPatchPredefinedAclEnum["PublicRead"] = "publicRead";
})(StorageObjectsPatchPredefinedAclEnum || (StorageObjectsPatchPredefinedAclEnum = {}));
export var StorageObjectsPatchProjectionEnum;
(function (StorageObjectsPatchProjectionEnum) {
    StorageObjectsPatchProjectionEnum["Full"] = "full";
    StorageObjectsPatchProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsPatchProjectionEnum || (StorageObjectsPatchProjectionEnum = {}));
var StorageObjectsPatchQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsPatchQueryParams, _super);
    function StorageObjectsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "ifGenerationNotMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=predefinedAcl" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "predefinedAcl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsPatchQueryParams.prototype, "userProject", void 0);
    return StorageObjectsPatchQueryParams;
}(SpeakeasyBase));
export { StorageObjectsPatchQueryParams };
var StorageObjectsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsPatchSecurityOption1, _super);
    function StorageObjectsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsPatchSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsPatchSecurityOption1 };
var StorageObjectsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsPatchSecurityOption2, _super);
    function StorageObjectsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsPatchSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsPatchSecurityOption2 };
var StorageObjectsPatchSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsPatchSecurity, _super);
    function StorageObjectsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsPatchSecurityOption1)
    ], StorageObjectsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsPatchSecurityOption2)
    ], StorageObjectsPatchSecurity.prototype, "option2", void 0);
    return StorageObjectsPatchSecurity;
}(SpeakeasyBase));
export { StorageObjectsPatchSecurity };
var StorageObjectsPatchRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsPatchRequest, _super);
    function StorageObjectsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsPatchPathParams)
    ], StorageObjectsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsPatchQueryParams)
    ], StorageObjectsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Object)
    ], StorageObjectsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsPatchSecurity)
    ], StorageObjectsPatchRequest.prototype, "security", void 0);
    return StorageObjectsPatchRequest;
}(SpeakeasyBase));
export { StorageObjectsPatchRequest };
var StorageObjectsPatchResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsPatchResponse, _super);
    function StorageObjectsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Object)
    ], StorageObjectsPatchResponse.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectsPatchResponse.prototype, "statusCode", void 0);
    return StorageObjectsPatchResponse;
}(SpeakeasyBase));
export { StorageObjectsPatchResponse };
