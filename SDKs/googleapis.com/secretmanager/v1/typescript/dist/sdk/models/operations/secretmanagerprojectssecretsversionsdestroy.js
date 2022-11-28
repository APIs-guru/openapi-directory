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
var SecretmanagerProjectsSecretsVersionsDestroyPathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDestroyPathParams, _super);
    function SecretmanagerProjectsSecretsVersionsDestroyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyPathParams.prototype, "name", void 0);
    return SecretmanagerProjectsSecretsVersionsDestroyPathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDestroyPathParams };
var SecretmanagerProjectsSecretsVersionsDestroyQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDestroyQueryParams, _super);
    function SecretmanagerProjectsSecretsVersionsDestroyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsVersionsDestroyQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDestroyQueryParams };
var SecretmanagerProjectsSecretsVersionsDestroySecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDestroySecurity, _super);
    function SecretmanagerProjectsSecretsVersionsDestroySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsVersionsDestroySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsVersionsDestroySecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsVersionsDestroySecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDestroySecurity };
var SecretmanagerProjectsSecretsVersionsDestroyRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDestroyRequest, _super);
    function SecretmanagerProjectsSecretsVersionsDestroyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsDestroyPathParams)
    ], SecretmanagerProjectsSecretsVersionsDestroyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsDestroyQueryParams)
    ], SecretmanagerProjectsSecretsVersionsDestroyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DestroySecretVersionRequest)
    ], SecretmanagerProjectsSecretsVersionsDestroyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsVersionsDestroySecurity)
    ], SecretmanagerProjectsSecretsVersionsDestroyRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsVersionsDestroyRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDestroyRequest };
var SecretmanagerProjectsSecretsVersionsDestroyResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsVersionsDestroyResponse, _super);
    function SecretmanagerProjectsSecretsVersionsDestroyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsVersionsDestroyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SecretVersion)
    ], SecretmanagerProjectsSecretsVersionsDestroyResponse.prototype, "secretVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsVersionsDestroyResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsVersionsDestroyResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsVersionsDestroyResponse };
