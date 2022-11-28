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
var SecretmanagerProjectsSecretsAddVersionPathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsAddVersionPathParams, _super);
    function SecretmanagerProjectsSecretsAddVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionPathParams.prototype, "parent", void 0);
    return SecretmanagerProjectsSecretsAddVersionPathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsAddVersionPathParams };
var SecretmanagerProjectsSecretsAddVersionQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsAddVersionQueryParams, _super);
    function SecretmanagerProjectsSecretsAddVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsAddVersionQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsAddVersionQueryParams };
var SecretmanagerProjectsSecretsAddVersionSecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsAddVersionSecurity, _super);
    function SecretmanagerProjectsSecretsAddVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsAddVersionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsAddVersionSecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsAddVersionSecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsAddVersionSecurity };
var SecretmanagerProjectsSecretsAddVersionRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsAddVersionRequest, _super);
    function SecretmanagerProjectsSecretsAddVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsAddVersionPathParams)
    ], SecretmanagerProjectsSecretsAddVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsAddVersionQueryParams)
    ], SecretmanagerProjectsSecretsAddVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddSecretVersionRequest)
    ], SecretmanagerProjectsSecretsAddVersionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsAddVersionSecurity)
    ], SecretmanagerProjectsSecretsAddVersionRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsAddVersionRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsAddVersionRequest };
var SecretmanagerProjectsSecretsAddVersionResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsAddVersionResponse, _super);
    function SecretmanagerProjectsSecretsAddVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsAddVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SecretVersion)
    ], SecretmanagerProjectsSecretsAddVersionResponse.prototype, "secretVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsAddVersionResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsAddVersionResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsAddVersionResponse };
