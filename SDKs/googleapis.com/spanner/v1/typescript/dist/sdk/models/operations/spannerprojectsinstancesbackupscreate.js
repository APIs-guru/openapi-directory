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
var SpannerProjectsInstancesBackupsCreatePathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCreatePathParams, _super);
    function SpannerProjectsInstancesBackupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreatePathParams.prototype, "parent", void 0);
    return SpannerProjectsInstancesBackupsCreatePathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCreatePathParams };
export var SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum;
(function (SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum) {
    SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum["EncryptionTypeUnspecified"] = "ENCRYPTION_TYPE_UNSPECIFIED";
    SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum["UseDatabaseEncryption"] = "USE_DATABASE_ENCRYPTION";
    SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum["GoogleDefaultEncryption"] = "GOOGLE_DEFAULT_ENCRYPTION";
    SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum["CustomerManagedEncryption"] = "CUSTOMER_MANAGED_ENCRYPTION";
})(SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum || (SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum = {}));
var SpannerProjectsInstancesBackupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCreateQueryParams, _super);
    function SpannerProjectsInstancesBackupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backupId" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "backupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encryptionConfig.encryptionType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "encryptionConfigEncryptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encryptionConfig.kmsKeyName" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "encryptionConfigKmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesBackupsCreateQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCreateQueryParams };
var SpannerProjectsInstancesBackupsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCreateSecurityOption1, _super);
    function SpannerProjectsInstancesBackupsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesBackupsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesBackupsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesBackupsCreateSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCreateSecurityOption1 };
var SpannerProjectsInstancesBackupsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCreateSecurityOption2, _super);
    function SpannerProjectsInstancesBackupsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesBackupsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesBackupsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesBackupsCreateSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCreateSecurityOption2 };
var SpannerProjectsInstancesBackupsCreateSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCreateSecurity, _super);
    function SpannerProjectsInstancesBackupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesBackupsCreateSecurityOption1)
    ], SpannerProjectsInstancesBackupsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesBackupsCreateSecurityOption2)
    ], SpannerProjectsInstancesBackupsCreateSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesBackupsCreateSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCreateSecurity };
var SpannerProjectsInstancesBackupsCreateRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCreateRequest, _super);
    function SpannerProjectsInstancesBackupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupsCreatePathParams)
    ], SpannerProjectsInstancesBackupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupsCreateQueryParams)
    ], SpannerProjectsInstancesBackupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BackupInput)
    ], SpannerProjectsInstancesBackupsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupsCreateSecurity)
    ], SpannerProjectsInstancesBackupsCreateRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesBackupsCreateRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCreateRequest };
var SpannerProjectsInstancesBackupsCreateResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCreateResponse, _super);
    function SpannerProjectsInstancesBackupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SpannerProjectsInstancesBackupsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesBackupsCreateResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesBackupsCreateResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCreateResponse };
