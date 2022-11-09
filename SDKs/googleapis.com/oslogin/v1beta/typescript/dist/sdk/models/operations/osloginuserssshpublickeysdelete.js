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
var OsloginUsersSshPublicKeysDeletePathParams = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysDeletePathParams, _super);
    function OsloginUsersSshPublicKeysDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeletePathParams.prototype, "name", void 0);
    return OsloginUsersSshPublicKeysDeletePathParams;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysDeletePathParams };
var OsloginUsersSshPublicKeysDeleteQueryParams = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysDeleteQueryParams, _super);
    function OsloginUsersSshPublicKeysDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return OsloginUsersSshPublicKeysDeleteQueryParams;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysDeleteQueryParams };
var OsloginUsersSshPublicKeysDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysDeleteSecurityOption1, _super);
    function OsloginUsersSshPublicKeysDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersSshPublicKeysDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersSshPublicKeysDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return OsloginUsersSshPublicKeysDeleteSecurityOption1;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysDeleteSecurityOption1 };
var OsloginUsersSshPublicKeysDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysDeleteSecurityOption2, _super);
    function OsloginUsersSshPublicKeysDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsloginUsersSshPublicKeysDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsloginUsersSshPublicKeysDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return OsloginUsersSshPublicKeysDeleteSecurityOption2;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysDeleteSecurityOption2 };
var OsloginUsersSshPublicKeysDeleteSecurity = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysDeleteSecurity, _super);
    function OsloginUsersSshPublicKeysDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersSshPublicKeysDeleteSecurityOption1)
    ], OsloginUsersSshPublicKeysDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", OsloginUsersSshPublicKeysDeleteSecurityOption2)
    ], OsloginUsersSshPublicKeysDeleteSecurity.prototype, "option2", void 0);
    return OsloginUsersSshPublicKeysDeleteSecurity;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysDeleteSecurity };
var OsloginUsersSshPublicKeysDeleteRequest = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysDeleteRequest, _super);
    function OsloginUsersSshPublicKeysDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysDeletePathParams)
    ], OsloginUsersSshPublicKeysDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysDeleteQueryParams)
    ], OsloginUsersSshPublicKeysDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OsloginUsersSshPublicKeysDeleteSecurity)
    ], OsloginUsersSshPublicKeysDeleteRequest.prototype, "security", void 0);
    return OsloginUsersSshPublicKeysDeleteRequest;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysDeleteRequest };
var OsloginUsersSshPublicKeysDeleteResponse = /** @class */ (function (_super) {
    __extends(OsloginUsersSshPublicKeysDeleteResponse, _super);
    function OsloginUsersSshPublicKeysDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OsloginUsersSshPublicKeysDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], OsloginUsersSshPublicKeysDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OsloginUsersSshPublicKeysDeleteResponse.prototype, "statusCode", void 0);
    return OsloginUsersSshPublicKeysDeleteResponse;
}(SpeakeasyBase));
export { OsloginUsersSshPublicKeysDeleteResponse };
