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
var IamProjectsServiceAccountsSignJwtPathParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSignJwtPathParams, _super);
    function IamProjectsServiceAccountsSignJwtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtPathParams.prototype, "name", void 0);
    return IamProjectsServiceAccountsSignJwtPathParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSignJwtPathParams };
var IamProjectsServiceAccountsSignJwtQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSignJwtQueryParams, _super);
    function IamProjectsServiceAccountsSignJwtQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtQueryParams.prototype, "uploadProtocol", void 0);
    return IamProjectsServiceAccountsSignJwtQueryParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSignJwtQueryParams };
var IamProjectsServiceAccountsSignJwtSecurity = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSignJwtSecurity, _super);
    function IamProjectsServiceAccountsSignJwtSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsServiceAccountsSignJwtSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsServiceAccountsSignJwtSecurity.prototype, "oauth2c", void 0);
    return IamProjectsServiceAccountsSignJwtSecurity;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSignJwtSecurity };
var IamProjectsServiceAccountsSignJwtRequest = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSignJwtRequest, _super);
    function IamProjectsServiceAccountsSignJwtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsSignJwtPathParams)
    ], IamProjectsServiceAccountsSignJwtRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsSignJwtQueryParams)
    ], IamProjectsServiceAccountsSignJwtRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SignJwtRequest)
    ], IamProjectsServiceAccountsSignJwtRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsSignJwtSecurity)
    ], IamProjectsServiceAccountsSignJwtRequest.prototype, "security", void 0);
    return IamProjectsServiceAccountsSignJwtRequest;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSignJwtRequest };
var IamProjectsServiceAccountsSignJwtResponse = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsSignJwtResponse, _super);
    function IamProjectsServiceAccountsSignJwtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsSignJwtResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SignJwtResponse)
    ], IamProjectsServiceAccountsSignJwtResponse.prototype, "signJwtResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamProjectsServiceAccountsSignJwtResponse.prototype, "statusCode", void 0);
    return IamProjectsServiceAccountsSignJwtResponse;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsSignJwtResponse };
