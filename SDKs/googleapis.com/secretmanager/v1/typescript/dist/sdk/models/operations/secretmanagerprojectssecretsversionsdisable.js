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
var SecretmanagerProjectsSecretsVersionsDisablePathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDisablePathParams, _super);
    function SecretmanagerProjectsSecretsVersionsDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisablePathParams.prototype, "name", void 0);
    return SecretmanagerProjectsSecretsVersionsDisablePathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDisablePathParams };
var SecretmanagerProjectsSecretsVersionsDisableQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDisableQueryParams, _super);
    function SecretmanagerProjectsSecretsVersionsDisableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsVersionsDisableQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDisableQueryParams };
var SecretmanagerProjectsSecretsVersionsDisableSecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDisableSecurity, _super);
    function SecretmanagerProjectsSecretsVersionsDisableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsVersionsDisableSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsVersionsDisableSecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsVersionsDisableSecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDisableSecurity };
var SecretmanagerProjectsSecretsVersionsDisableRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDisableRequest, _super);
    function SecretmanagerProjectsSecretsVersionsDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsDisablePathParams)
    ], SecretmanagerProjectsSecretsVersionsDisableRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsDisableQueryParams)
    ], SecretmanagerProjectsSecretsVersionsDisableRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisableSecretVersionRequest)
    ], SecretmanagerProjectsSecretsVersionsDisableRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsDisableSecurity)
    ], SecretmanagerProjectsSecretsVersionsDisableRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsVersionsDisableRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDisableRequest };
var SecretmanagerProjectsSecretsVersionsDisableResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDisableResponse, _super);
    function SecretmanagerProjectsSecretsVersionsDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDisableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SecretVersion)
    ], SecretmanagerProjectsSecretsVersionsDisableResponse.prototype, "secretVersion", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsVersionsDisableResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsVersionsDisableResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDisableResponse };
