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
import { GoogleCloudIntegrationsV1alphaAuthToken } from "./googlecloudintegrationsv1alphaauthtoken";
import { GoogleCloudIntegrationsV1alphaJwt } from "./googlecloudintegrationsv1alphajwt";
import { GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode } from "./googlecloudintegrationsv1alphaoauth2authorizationcode";
import { GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials } from "./googlecloudintegrationsv1alphaoauth2clientcredentials";
import { GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials } from "./googlecloudintegrationsv1alphaoauth2resourceownercredentials";
import { GoogleCloudIntegrationsV1alphaOidcToken } from "./googlecloudintegrationsv1alphaoidctoken";
import { GoogleCloudIntegrationsV1alphaServiceAccountCredentials } from "./googlecloudintegrationsv1alphaserviceaccountcredentials";
import { GoogleCloudIntegrationsV1alphaUsernameAndPassword } from "./googlecloudintegrationsv1alphausernameandpassword";
export var GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum;
(function (GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum) {
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["CredentialTypeUnspecified"] = "CREDENTIAL_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["UsernameAndPassword"] = "USERNAME_AND_PASSWORD";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["ApiKey"] = "API_KEY";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["Oauth2AuthorizationCode"] = "OAUTH2_AUTHORIZATION_CODE";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["Oauth2Implicit"] = "OAUTH2_IMPLICIT";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["Oauth2ClientCredentials"] = "OAUTH2_CLIENT_CREDENTIALS";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["Oauth2ResourceOwnerCredentials"] = "OAUTH2_RESOURCE_OWNER_CREDENTIALS";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["Jwt"] = "JWT";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["AuthToken"] = "AUTH_TOKEN";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["ServiceAccount"] = "SERVICE_ACCOUNT";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["ClientCertificateOnly"] = "CLIENT_CERTIFICATE_ONLY";
    GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum["OidcToken"] = "OIDC_TOKEN";
})(GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum || (GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaCredential
/**
 * Defines parameters for a single, canonical credential.
**/
var GoogleCloudIntegrationsV1alphaCredential = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaCredential, _super);
    function GoogleCloudIntegrationsV1alphaCredential() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authToken" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaAuthToken)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "authToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "credentialType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwt" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaJwt)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2AuthorizationCode" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "oauth2AuthorizationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2ClientCredentials" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "oauth2ClientCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2ResourceOwnerCredentials" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "oauth2ResourceOwnerCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidcToken" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaOidcToken)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "oidcToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountCredentials" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaServiceAccountCredentials)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "serviceAccountCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usernameAndPassword" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaUsernameAndPassword)
    ], GoogleCloudIntegrationsV1alphaCredential.prototype, "usernameAndPassword", void 0);
    return GoogleCloudIntegrationsV1alphaCredential;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaCredential };
