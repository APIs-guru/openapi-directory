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
var SecretmanagerProjectsSecretsVersionsAccessPathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsAccessPathParams, _super);
    function SecretmanagerProjectsSecretsVersionsAccessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessPathParams.prototype, "name", void 0);
    return SecretmanagerProjectsSecretsVersionsAccessPathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsAccessPathParams };
var SecretmanagerProjectsSecretsVersionsAccessQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsAccessQueryParams, _super);
    function SecretmanagerProjectsSecretsVersionsAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsVersionsAccessQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsAccessQueryParams };
var SecretmanagerProjectsSecretsVersionsAccessSecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsAccessSecurity, _super);
    function SecretmanagerProjectsSecretsVersionsAccessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsVersionsAccessSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsVersionsAccessSecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsVersionsAccessSecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsAccessSecurity };
var SecretmanagerProjectsSecretsVersionsAccessRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsAccessRequest, _super);
    function SecretmanagerProjectsSecretsVersionsAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsAccessPathParams)
    ], SecretmanagerProjectsSecretsVersionsAccessRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsAccessQueryParams)
    ], SecretmanagerProjectsSecretsVersionsAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsAccessSecurity)
    ], SecretmanagerProjectsSecretsVersionsAccessRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsVersionsAccessRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsAccessRequest };
var SecretmanagerProjectsSecretsVersionsAccessResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsAccessResponse, _super);
    function SecretmanagerProjectsSecretsVersionsAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccessSecretVersionResponse)
    ], SecretmanagerProjectsSecretsVersionsAccessResponse.prototype, "accessSecretVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsAccessResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsVersionsAccessResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsVersionsAccessResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsAccessResponse };
