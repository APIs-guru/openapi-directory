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
var SecretmanagerProjectsSecretsListPathParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsListPathParams, _super);
    function SecretmanagerProjectsSecretsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListPathParams.prototype, "parent", void 0);
    return SecretmanagerProjectsSecretsListPathParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsListPathParams };
var SecretmanagerProjectsSecretsListQueryParams = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsListQueryParams, _super);
    function SecretmanagerProjectsSecretsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListQueryParams.prototype, "uploadProtocol", void 0);
    return SecretmanagerProjectsSecretsListQueryParams;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsListQueryParams };
var SecretmanagerProjectsSecretsListSecurity = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsListSecurity, _super);
    function SecretmanagerProjectsSecretsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecretmanagerProjectsSecretsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecretmanagerProjectsSecretsListSecurity.prototype, "oauth2c", void 0);
    return SecretmanagerProjectsSecretsListSecurity;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsListSecurity };
var SecretmanagerProjectsSecretsListRequest = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsListRequest, _super);
    function SecretmanagerProjectsSecretsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsListPathParams)
    ], SecretmanagerProjectsSecretsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsListQueryParams)
    ], SecretmanagerProjectsSecretsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecretmanagerProjectsSecretsListSecurity)
    ], SecretmanagerProjectsSecretsListRequest.prototype, "security", void 0);
    return SecretmanagerProjectsSecretsListRequest;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsListRequest };
var SecretmanagerProjectsSecretsListResponse = /** @class */ (function (_super) {
    __extends(SecretmanagerProjectsSecretsListResponse, _super);
    function SecretmanagerProjectsSecretsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecretmanagerProjectsSecretsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSecretsResponse)
    ], SecretmanagerProjectsSecretsListResponse.prototype, "listSecretsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecretmanagerProjectsSecretsListResponse.prototype, "statusCode", void 0);
    return SecretmanagerProjectsSecretsListResponse;
}(SpeakeasyBase));
export { SecretmanagerProjectsSecretsListResponse };
