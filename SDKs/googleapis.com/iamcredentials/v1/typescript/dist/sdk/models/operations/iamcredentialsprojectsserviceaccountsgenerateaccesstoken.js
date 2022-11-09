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
var IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams = /** @class */ (function (_super) {
    __extends(IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams, _super);
    function IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams.prototype, "name", void 0);
    return IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams;
}(SpeakeasyBase));
export { IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams };
var IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams = /** @class */ (function (_super) {
    __extends(IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams, _super);
    function IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams.prototype, "uploadProtocol", void 0);
    return IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams;
}(SpeakeasyBase));
export { IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams };
var IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity = /** @class */ (function (_super) {
    __extends(IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity, _super);
    function IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity.prototype, "oauth2c", void 0);
    return IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;
}(SpeakeasyBase));
export { IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity };
var IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest = /** @class */ (function (_super) {
    __extends(IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest, _super);
    function IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateAccessTokenRequest)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest.prototype, "security", void 0);
    return IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
}(SpeakeasyBase));
export { IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest };
var IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse = /** @class */ (function (_super) {
    __extends(IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse, _super);
    function IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GenerateAccessTokenResponse)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse.prototype, "generateAccessTokenResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse.prototype, "statusCode", void 0);
    return IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse;
}(SpeakeasyBase));
export { IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse };
