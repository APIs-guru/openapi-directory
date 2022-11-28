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
var OsloginUsersSshPublicKeysPatchPathParams = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysPatchPathParams, _super);
    function OsloginUsersSshPublicKeysPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchPathParams.prototype, "name", void 0);
    return OsloginUsersSshPublicKeysPatchPathParams;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysPatchPathParams };
var OsloginUsersSshPublicKeysPatchQueryParams = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysPatchQueryParams, _super);
    function OsloginUsersSshPublicKeysPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchQueryParams.prototype, "uploadProtocol", void 0);
    return OsloginUsersSshPublicKeysPatchQueryParams;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysPatchQueryParams };
var OsloginUsersSshPublicKeysPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysPatchSecurityOption1, _super);
    function OsloginUsersSshPublicKeysPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersSshPublicKeysPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersSshPublicKeysPatchSecurityOption1.prototype, "oauth2c", void 0);
    return OsloginUsersSshPublicKeysPatchSecurityOption1;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysPatchSecurityOption1 };
var OsloginUsersSshPublicKeysPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysPatchSecurityOption2, _super);
    function OsloginUsersSshPublicKeysPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersSshPublicKeysPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersSshPublicKeysPatchSecurityOption2.prototype, "oauth2c", void 0);
    return OsloginUsersSshPublicKeysPatchSecurityOption2;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysPatchSecurityOption2 };
var OsloginUsersSshPublicKeysPatchSecurity = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysPatchSecurity, _super);
    function OsloginUsersSshPublicKeysPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersSshPublicKeysPatchSecurityOption1)
    ], OsloginUsersSshPublicKeysPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersSshPublicKeysPatchSecurityOption2)
    ], OsloginUsersSshPublicKeysPatchSecurity.prototype, "option2", void 0);
    return OsloginUsersSshPublicKeysPatchSecurity;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysPatchSecurity };
var OsloginUsersSshPublicKeysPatchRequest = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysPatchRequest, _super);
    function OsloginUsersSshPublicKeysPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysPatchPathParams)
    ], OsloginUsersSshPublicKeysPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysPatchQueryParams)
    ], OsloginUsersSshPublicKeysPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SshPublicKeyInput)
    ], OsloginUsersSshPublicKeysPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysPatchSecurity)
    ], OsloginUsersSshPublicKeysPatchRequest.prototype, "security", void 0);
    return OsloginUsersSshPublicKeysPatchRequest;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysPatchRequest };
var OsloginUsersSshPublicKeysPatchResponse = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysPatchResponse, _super);
    function OsloginUsersSshPublicKeysPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SshPublicKey)
    ], OsloginUsersSshPublicKeysPatchResponse.prototype, "sshPublicKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsloginUsersSshPublicKeysPatchResponse.prototype, "statusCode", void 0);
    return OsloginUsersSshPublicKeysPatchResponse;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysPatchResponse };
