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
var DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams.prototype, "registration", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams };
var DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams };
var DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity.prototype, "oauth2c", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity };
var DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeQueryParams)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest.prototype, "security", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest };
var DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthorizationCode)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse.prototype, "authorizationCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse.prototype, "statusCode", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse };
