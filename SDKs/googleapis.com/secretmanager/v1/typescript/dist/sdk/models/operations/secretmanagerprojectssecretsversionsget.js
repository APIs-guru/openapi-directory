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
var SecretmanagerProjectsSecretsVersionsGetPathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsGetPathParams, _super);
    function SecretmanagerProjectsSecretsVersionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetPathParams.prototype, "name", void 0);
    return SecretmanagerProjectsSecretsVersionsGetPathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsGetPathParams };
var SecretmanagerProjectsSecretsVersionsGetQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsGetQueryParams, _super);
    function SecretmanagerProjectsSecretsVersionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsVersionsGetQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsGetQueryParams };
var SecretmanagerProjectsSecretsVersionsGetSecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsGetSecurity, _super);
    function SecretmanagerProjectsSecretsVersionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsVersionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsVersionsGetSecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsVersionsGetSecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsGetSecurity };
var SecretmanagerProjectsSecretsVersionsGetRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsGetRequest, _super);
    function SecretmanagerProjectsSecretsVersionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsGetPathParams)
    ], SecretmanagerProjectsSecretsVersionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsGetQueryParams)
    ], SecretmanagerProjectsSecretsVersionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsGetSecurity)
    ], SecretmanagerProjectsSecretsVersionsGetRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsVersionsGetRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsGetRequest };
var SecretmanagerProjectsSecretsVersionsGetResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsGetResponse, _super);
    function SecretmanagerProjectsSecretsVersionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SecretVersion)
    ], SecretmanagerProjectsSecretsVersionsGetResponse.prototype, "secretVersion", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsVersionsGetResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsVersionsGetResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsGetResponse };
