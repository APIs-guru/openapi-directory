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
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials } from "./googlecloudconnectorsv1authconfigoauth2clientcredentials";
import { GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer } from "./googlecloudconnectorsv1authconfigoauth2jwtbearer";
import { GoogleCloudConnectorsV1AuthConfigSshPublicKey } from "./googlecloudconnectorsv1authconfigsshpublickey";
import { GoogleCloudConnectorsV1AuthConfigUserPassword } from "./googlecloudconnectorsv1authconfiguserpassword";
export var GoogleCloudConnectorsV1AuthConfigAuthTypeEnum;
(function (GoogleCloudConnectorsV1AuthConfigAuthTypeEnum) {
    GoogleCloudConnectorsV1AuthConfigAuthTypeEnum["AuthTypeUnspecified"] = "AUTH_TYPE_UNSPECIFIED";
    GoogleCloudConnectorsV1AuthConfigAuthTypeEnum["UserPassword"] = "USER_PASSWORD";
    GoogleCloudConnectorsV1AuthConfigAuthTypeEnum["Oauth2JwtBearer"] = "OAUTH2_JWT_BEARER";
    GoogleCloudConnectorsV1AuthConfigAuthTypeEnum["Oauth2ClientCredentials"] = "OAUTH2_CLIENT_CREDENTIALS";
    GoogleCloudConnectorsV1AuthConfigAuthTypeEnum["SshPublicKey"] = "SSH_PUBLIC_KEY";
    GoogleCloudConnectorsV1AuthConfigAuthTypeEnum["Oauth2AuthCodeFlow"] = "OAUTH2_AUTH_CODE_FLOW";
})(GoogleCloudConnectorsV1AuthConfigAuthTypeEnum || (GoogleCloudConnectorsV1AuthConfigAuthTypeEnum = {}));
// GoogleCloudConnectorsV1AuthConfig
/**
 * AuthConfig defines details of a authentication type.
**/
var GoogleCloudConnectorsV1AuthConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudConnectorsV1AuthConfig, _super);
    function GoogleCloudConnectorsV1AuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalVariables", elemType: GoogleCloudConnectorsV1ConfigVariable }),
        __metadata("design:type", Array)
    ], GoogleCloudConnectorsV1AuthConfig.prototype, "additionalVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1AuthConfig.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2ClientCredentials" }),
        __metadata("design:type", GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials)
    ], GoogleCloudConnectorsV1AuthConfig.prototype, "oauth2ClientCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2JwtBearer" }),
        __metadata("design:type", GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer)
    ], GoogleCloudConnectorsV1AuthConfig.prototype, "oauth2JwtBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sshPublicKey" }),
        __metadata("design:type", GoogleCloudConnectorsV1AuthConfigSshPublicKey)
    ], GoogleCloudConnectorsV1AuthConfig.prototype, "sshPublicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPassword" }),
        __metadata("design:type", GoogleCloudConnectorsV1AuthConfigUserPassword)
    ], GoogleCloudConnectorsV1AuthConfig.prototype, "userPassword", void 0);
    return GoogleCloudConnectorsV1AuthConfig;
}(SpeakeasyBase));
export { GoogleCloudConnectorsV1AuthConfig };
