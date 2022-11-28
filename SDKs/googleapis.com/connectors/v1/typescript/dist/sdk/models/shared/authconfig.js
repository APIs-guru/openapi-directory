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
import { ConfigVariable } from "./configvariable";
import { Oauth2ClientCredentials } from "./oauth2clientcredentials";
import { Oauth2JwtBearer } from "./oauth2jwtbearer";
import { SshPublicKey } from "./sshpublickey";
import { UserPassword } from "./userpassword";
export var AuthConfigAuthTypeEnum;
(function (AuthConfigAuthTypeEnum) {
    AuthConfigAuthTypeEnum["AuthTypeUnspecified"] = "AUTH_TYPE_UNSPECIFIED";
    AuthConfigAuthTypeEnum["UserPassword"] = "USER_PASSWORD";
    AuthConfigAuthTypeEnum["Oauth2JwtBearer"] = "OAUTH2_JWT_BEARER";
    AuthConfigAuthTypeEnum["Oauth2ClientCredentials"] = "OAUTH2_CLIENT_CREDENTIALS";
    AuthConfigAuthTypeEnum["SshPublicKey"] = "SSH_PUBLIC_KEY";
    AuthConfigAuthTypeEnum["Oauth2AuthCodeFlow"] = "OAUTH2_AUTH_CODE_FLOW";
})(AuthConfigAuthTypeEnum || (AuthConfigAuthTypeEnum = {}));
// AuthConfig
/**
 * AuthConfig defines details of a authentication type.
**/
var AuthConfig = /** @class */ (function (_super) {
    __extends(AuthConfig, _super);
    function AuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalVariables", elemType: ConfigVariable }),
        __metadata("design:type", Array)
    ], AuthConfig.prototype, "additionalVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], AuthConfig.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2ClientCredentials" }),
        __metadata("design:type", Oauth2ClientCredentials)
    ], AuthConfig.prototype, "oauth2ClientCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2JwtBearer" }),
        __metadata("design:type", Oauth2JwtBearer)
    ], AuthConfig.prototype, "oauth2JwtBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sshPublicKey" }),
        __metadata("design:type", SshPublicKey)
    ], AuthConfig.prototype, "sshPublicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPassword" }),
        __metadata("design:type", UserPassword)
    ], AuthConfig.prototype, "userPassword", void 0);
    return AuthConfig;
}(SpeakeasyBase));
export { AuthConfig };
