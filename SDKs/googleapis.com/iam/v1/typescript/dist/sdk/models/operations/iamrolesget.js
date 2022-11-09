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
var IamRolesGetPathParams = /** @class */ (function (_super) {
    __extends(IamRolesGetPathParams, _super);
    function IamRolesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IamRolesGetPathParams.prototype, "name", void 0);
    return IamRolesGetPathParams;
}(SpeakeasyBase));
export { IamRolesGetPathParams };
export var IamRolesGetPublicKeyTypeEnum;
(function (IamRolesGetPublicKeyTypeEnum) {
    IamRolesGetPublicKeyTypeEnum["TypeNone"] = "TYPE_NONE";
    IamRolesGetPublicKeyTypeEnum["TypeX509PemFile"] = "TYPE_X509_PEM_FILE";
    IamRolesGetPublicKeyTypeEnum["TypeRawPublicKey"] = "TYPE_RAW_PUBLIC_KEY";
})(IamRolesGetPublicKeyTypeEnum || (IamRolesGetPublicKeyTypeEnum = {}));
var IamRolesGetQueryParams = /** @class */ (function (_super) {
    __extends(IamRolesGetQueryParams, _super);
    function IamRolesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamRolesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=publicKeyType" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "publicKeyType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamRolesGetQueryParams.prototype, "uploadProtocol", void 0);
    return IamRolesGetQueryParams;
}(SpeakeasyBase));
export { IamRolesGetQueryParams };
var IamRolesGetSecurity = /** @class */ (function (_super) {
    __extends(IamRolesGetSecurity, _super);
    function IamRolesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamRolesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamRolesGetSecurity.prototype, "oauth2c", void 0);
    return IamRolesGetSecurity;
}(SpeakeasyBase));
export { IamRolesGetSecurity };
var IamRolesGetRequest = /** @class */ (function (_super) {
    __extends(IamRolesGetRequest, _super);
    function IamRolesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamRolesGetPathParams)
    ], IamRolesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamRolesGetQueryParams)
    ], IamRolesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamRolesGetSecurity)
    ], IamRolesGetRequest.prototype, "security", void 0);
    return IamRolesGetRequest;
}(SpeakeasyBase));
export { IamRolesGetRequest };
var IamRolesGetResponse = /** @class */ (function (_super) {
    __extends(IamRolesGetResponse, _super);
    function IamRolesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamRolesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Role)
    ], IamRolesGetResponse.prototype, "role", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamRolesGetResponse.prototype, "statusCode", void 0);
    return IamRolesGetResponse;
}(SpeakeasyBase));
export { IamRolesGetResponse };
