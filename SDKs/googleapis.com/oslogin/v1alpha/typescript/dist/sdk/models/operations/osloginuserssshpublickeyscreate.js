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
var OsloginUsersSshPublicKeysCreatePathParams = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysCreatePathParams, _super);
    function OsloginUsersSshPublicKeysCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreatePathParams.prototype, "parent", void 0);
    return OsloginUsersSshPublicKeysCreatePathParams;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysCreatePathParams };
var OsloginUsersSshPublicKeysCreateQueryParams = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysCreateQueryParams, _super);
    function OsloginUsersSshPublicKeysCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateQueryParams.prototype, "uploadProtocol", void 0);
    return OsloginUsersSshPublicKeysCreateQueryParams;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysCreateQueryParams };
var OsloginUsersSshPublicKeysCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysCreateSecurityOption1, _super);
    function OsloginUsersSshPublicKeysCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersSshPublicKeysCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersSshPublicKeysCreateSecurityOption1.prototype, "oauth2c", void 0);
    return OsloginUsersSshPublicKeysCreateSecurityOption1;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysCreateSecurityOption1 };
var OsloginUsersSshPublicKeysCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysCreateSecurityOption2, _super);
    function OsloginUsersSshPublicKeysCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersSshPublicKeysCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersSshPublicKeysCreateSecurityOption2.prototype, "oauth2c", void 0);
    return OsloginUsersSshPublicKeysCreateSecurityOption2;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysCreateSecurityOption2 };
var OsloginUsersSshPublicKeysCreateSecurity = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysCreateSecurity, _super);
    function OsloginUsersSshPublicKeysCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersSshPublicKeysCreateSecurityOption1)
    ], OsloginUsersSshPublicKeysCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersSshPublicKeysCreateSecurityOption2)
    ], OsloginUsersSshPublicKeysCreateSecurity.prototype, "option2", void 0);
    return OsloginUsersSshPublicKeysCreateSecurity;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysCreateSecurity };
var OsloginUsersSshPublicKeysCreateRequest = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysCreateRequest, _super);
    function OsloginUsersSshPublicKeysCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysCreatePathParams)
    ], OsloginUsersSshPublicKeysCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysCreateQueryParams)
    ], OsloginUsersSshPublicKeysCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SshPublicKey)
    ], OsloginUsersSshPublicKeysCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysCreateSecurity)
    ], OsloginUsersSshPublicKeysCreateRequest.prototype, "security", void 0);
    return OsloginUsersSshPublicKeysCreateRequest;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysCreateRequest };
var OsloginUsersSshPublicKeysCreateResponse = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysCreateResponse, _super);
    function OsloginUsersSshPublicKeysCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SshPublicKey)
    ], OsloginUsersSshPublicKeysCreateResponse.prototype, "sshPublicKey", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OsloginUsersSshPublicKeysCreateResponse.prototype, "statusCode", void 0);
    return OsloginUsersSshPublicKeysCreateResponse;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysCreateResponse };
