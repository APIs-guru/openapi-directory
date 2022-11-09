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
var SecretmanagerProjectsSecretsPatchPathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsPatchPathParams, _super);
    function SecretmanagerProjectsSecretsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchPathParams.prototype, "name", void 0);
    return SecretmanagerProjectsSecretsPatchPathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsPatchPathParams };
var SecretmanagerProjectsSecretsPatchQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsPatchQueryParams, _super);
    function SecretmanagerProjectsSecretsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsPatchQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsPatchQueryParams };
var SecretmanagerProjectsSecretsPatchSecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsPatchSecurity, _super);
    function SecretmanagerProjectsSecretsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsPatchSecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsPatchSecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsPatchSecurity };
var SecretmanagerProjectsSecretsPatchRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsPatchRequest, _super);
    function SecretmanagerProjectsSecretsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsPatchPathParams)
    ], SecretmanagerProjectsSecretsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsPatchQueryParams)
    ], SecretmanagerProjectsSecretsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Secret)
    ], SecretmanagerProjectsSecretsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsPatchSecurity)
    ], SecretmanagerProjectsSecretsPatchRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsPatchRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsPatchRequest };
var SecretmanagerProjectsSecretsPatchResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsPatchResponse, _super);
    function SecretmanagerProjectsSecretsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Secret)
    ], SecretmanagerProjectsSecretsPatchResponse.prototype, "secret", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsPatchResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsPatchResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsPatchResponse };
