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
var OsloginUsersImportSshPublicKeyPathParams = /** @class */ (function (_super) {
    __extends(OsloginUsersImportSshPublicKeyPathParams, _super);
    function OsloginUsersImportSshPublicKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyPathParams.prototype, "parent", void 0);
    return OsloginUsersImportSshPublicKeyPathParams;
}(SpeakeasyBase));
export { OsloginUsersImportSshPublicKeyPathParams };
export var OsloginUsersImportSshPublicKeyViewEnum;
(function (OsloginUsersImportSshPublicKeyViewEnum) {
    OsloginUsersImportSshPublicKeyViewEnum["LoginProfileViewUnspecified"] = "LOGIN_PROFILE_VIEW_UNSPECIFIED";
    OsloginUsersImportSshPublicKeyViewEnum["Basic"] = "BASIC";
    OsloginUsersImportSshPublicKeyViewEnum["SecurityKey"] = "SECURITY_KEY";
})(OsloginUsersImportSshPublicKeyViewEnum || (OsloginUsersImportSshPublicKeyViewEnum = {}));
var OsloginUsersImportSshPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(OsloginUsersImportSshPublicKeyQueryParams, _super);
    function OsloginUsersImportSshPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyQueryParams.prototype, "view", void 0);
    return OsloginUsersImportSshPublicKeyQueryParams;
}(SpeakeasyBase));
export { OsloginUsersImportSshPublicKeyQueryParams };
var OsloginUsersImportSshPublicKeySecurityOption1 = /** @class */ (function (_super) {
    __extends(OsloginUsersImportSshPublicKeySecurityOption1, _super);
    function OsloginUsersImportSshPublicKeySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersImportSshPublicKeySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersImportSshPublicKeySecurityOption1.prototype, "oauth2c", void 0);
    return OsloginUsersImportSshPublicKeySecurityOption1;
}(SpeakeasyBase));
export { OsloginUsersImportSshPublicKeySecurityOption1 };
var OsloginUsersImportSshPublicKeySecurityOption2 = /** @class */ (function (_super) {
    __extends(OsloginUsersImportSshPublicKeySecurityOption2, _super);
    function OsloginUsersImportSshPublicKeySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersImportSshPublicKeySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersImportSshPublicKeySecurityOption2.prototype, "oauth2c", void 0);
    return OsloginUsersImportSshPublicKeySecurityOption2;
}(SpeakeasyBase));
export { OsloginUsersImportSshPublicKeySecurityOption2 };
var OsloginUsersImportSshPublicKeySecurity = /** @class */ (function (_super) {
    __extends(OsloginUsersImportSshPublicKeySecurity, _super);
    function OsloginUsersImportSshPublicKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersImportSshPublicKeySecurityOption1)
    ], OsloginUsersImportSshPublicKeySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersImportSshPublicKeySecurityOption2)
    ], OsloginUsersImportSshPublicKeySecurity.prototype, "option2", void 0);
    return OsloginUsersImportSshPublicKeySecurity;
}(SpeakeasyBase));
export { OsloginUsersImportSshPublicKeySecurity };
var OsloginUsersImportSshPublicKeyRequest = /** @class */ (function (_super) {
    __extends(OsloginUsersImportSshPublicKeyRequest, _super);
    function OsloginUsersImportSshPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsloginUsersImportSshPublicKeyPathParams)
    ], OsloginUsersImportSshPublicKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsloginUsersImportSshPublicKeyQueryParams)
    ], OsloginUsersImportSshPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SshPublicKeyInput)
    ], OsloginUsersImportSshPublicKeyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsloginUsersImportSshPublicKeySecurity)
    ], OsloginUsersImportSshPublicKeyRequest.prototype, "security", void 0);
    return OsloginUsersImportSshPublicKeyRequest;
}(SpeakeasyBase));
export { OsloginUsersImportSshPublicKeyRequest };
var OsloginUsersImportSshPublicKeyResponse = /** @class */ (function (_super) {
    __extends(OsloginUsersImportSshPublicKeyResponse, _super);
    function OsloginUsersImportSshPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsloginUsersImportSshPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImportSshPublicKeyResponse)
    ], OsloginUsersImportSshPublicKeyResponse.prototype, "importSshPublicKeyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsloginUsersImportSshPublicKeyResponse.prototype, "statusCode", void 0);
    return OsloginUsersImportSshPublicKeyResponse;
}(SpeakeasyBase));
export { OsloginUsersImportSshPublicKeyResponse };
