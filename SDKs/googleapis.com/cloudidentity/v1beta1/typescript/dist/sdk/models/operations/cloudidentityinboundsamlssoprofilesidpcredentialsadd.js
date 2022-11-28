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
var CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams.prototype, "parent", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity.prototype, "oauth2c", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddIdpCredentialRequest)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest.prototype, "security", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse.prototype, "statusCode", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse };
