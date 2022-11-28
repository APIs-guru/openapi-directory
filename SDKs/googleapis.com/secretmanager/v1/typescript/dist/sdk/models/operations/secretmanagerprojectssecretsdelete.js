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
var SecretmanagerProjectsSecretsDeletePathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsDeletePathParams, _super);
    function SecretmanagerProjectsSecretsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeletePathParams.prototype, "name", void 0);
    return SecretmanagerProjectsSecretsDeletePathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsDeletePathParams };
var SecretmanagerProjectsSecretsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsDeleteQueryParams, _super);
    function SecretmanagerProjectsSecretsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=etag" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsDeleteQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsDeleteQueryParams };
var SecretmanagerProjectsSecretsDeleteSecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsDeleteSecurity, _super);
    function SecretmanagerProjectsSecretsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsDeleteSecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsDeleteSecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsDeleteSecurity };
var SecretmanagerProjectsSecretsDeleteRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsDeleteRequest, _super);
    function SecretmanagerProjectsSecretsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsDeletePathParams)
    ], SecretmanagerProjectsSecretsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsDeleteQueryParams)
    ], SecretmanagerProjectsSecretsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsDeleteSecurity)
    ], SecretmanagerProjectsSecretsDeleteRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsDeleteRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsDeleteRequest };
var SecretmanagerProjectsSecretsDeleteResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsDeleteResponse, _super);
    function SecretmanagerProjectsSecretsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SecretmanagerProjectsSecretsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsDeleteResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsDeleteResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsDeleteResponse };
