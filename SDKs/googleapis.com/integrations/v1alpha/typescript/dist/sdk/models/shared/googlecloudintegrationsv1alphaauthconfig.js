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
import { GoogleCloudIntegrationsV1alphaCredential } from "./googlecloudintegrationsv1alphacredential";
export var GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;
(function (GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum) {
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["CredentialTypeUnspecified"] = "CREDENTIAL_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["UsernameAndPassword"] = "USERNAME_AND_PASSWORD";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["ApiKey"] = "API_KEY";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["Oauth2AuthorizationCode"] = "OAUTH2_AUTHORIZATION_CODE";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["Oauth2Implicit"] = "OAUTH2_IMPLICIT";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["Oauth2ClientCredentials"] = "OAUTH2_CLIENT_CREDENTIALS";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["Oauth2ResourceOwnerCredentials"] = "OAUTH2_RESOURCE_OWNER_CREDENTIALS";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["Jwt"] = "JWT";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["AuthToken"] = "AUTH_TOKEN";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["ServiceAccount"] = "SERVICE_ACCOUNT";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["ClientCertificateOnly"] = "CLIENT_CERTIFICATE_ONLY";
    GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum["OidcToken"] = "OIDC_TOKEN";
})(GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum || (GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = {}));
export var GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;
(function (GoogleCloudIntegrationsV1alphaAuthConfigStateEnum) {
    GoogleCloudIntegrationsV1alphaAuthConfigStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaAuthConfigStateEnum["Valid"] = "VALID";
    GoogleCloudIntegrationsV1alphaAuthConfigStateEnum["Invalid"] = "INVALID";
    GoogleCloudIntegrationsV1alphaAuthConfigStateEnum["SoftDeleted"] = "SOFT_DELETED";
    GoogleCloudIntegrationsV1alphaAuthConfigStateEnum["Expired"] = "EXPIRED";
    GoogleCloudIntegrationsV1alphaAuthConfigStateEnum["Unauthorized"] = "UNAUTHORIZED";
    GoogleCloudIntegrationsV1alphaAuthConfigStateEnum["Unsupported"] = "UNSUPPORTED";
})(GoogleCloudIntegrationsV1alphaAuthConfigStateEnum || (GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = {}));
export var GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
(function (GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum) {
    GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum["AuthConfigVisibilityUnspecified"] = "AUTH_CONFIG_VISIBILITY_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum["Private"] = "PRIVATE";
    GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum["ClientVisible"] = "CLIENT_VISIBLE";
})(GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum || (GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum = {}));
// GoogleCloudIntegrationsV1alphaAuthConfig
/**
 * The AuthConfig resource use to hold channels and connection config data.
**/
var GoogleCloudIntegrationsV1alphaAuthConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaAuthConfig, _super);
    function GoogleCloudIntegrationsV1alphaAuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "certificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "creatorEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "credentialType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decryptedCredential" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaCredential)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "decryptedCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptedCredential" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "encryptedCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryNotificationDuration" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "expiryNotificationDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifierEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "lastModifierEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideValidTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "overrideValidTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "validTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfig.prototype, "visibility", void 0);
    return GoogleCloudIntegrationsV1alphaAuthConfig;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaAuthConfig };
// GoogleCloudIntegrationsV1alphaAuthConfigInput
/**
 * The AuthConfig resource use to hold channels and connection config data.
**/
var GoogleCloudIntegrationsV1alphaAuthConfigInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaAuthConfigInput, _super);
    function GoogleCloudIntegrationsV1alphaAuthConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "certificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "creatorEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "credentialType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decryptedCredential" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaCredential)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "decryptedCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptedCredential" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "encryptedCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryNotificationDuration" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "expiryNotificationDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifierEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "lastModifierEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideValidTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "overrideValidTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "validTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaAuthConfigInput.prototype, "visibility", void 0);
    return GoogleCloudIntegrationsV1alphaAuthConfigInput;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaAuthConfigInput };
