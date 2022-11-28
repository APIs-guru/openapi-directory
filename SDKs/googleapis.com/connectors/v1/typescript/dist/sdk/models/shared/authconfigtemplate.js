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
import { ConfigVariableTemplate } from "./configvariabletemplate";
export var AuthConfigTemplateAuthTypeEnum;
(function (AuthConfigTemplateAuthTypeEnum) {
    AuthConfigTemplateAuthTypeEnum["AuthTypeUnspecified"] = "AUTH_TYPE_UNSPECIFIED";
    AuthConfigTemplateAuthTypeEnum["UserPassword"] = "USER_PASSWORD";
    AuthConfigTemplateAuthTypeEnum["Oauth2JwtBearer"] = "OAUTH2_JWT_BEARER";
    AuthConfigTemplateAuthTypeEnum["Oauth2ClientCredentials"] = "OAUTH2_CLIENT_CREDENTIALS";
    AuthConfigTemplateAuthTypeEnum["SshPublicKey"] = "SSH_PUBLIC_KEY";
    AuthConfigTemplateAuthTypeEnum["Oauth2AuthCodeFlow"] = "OAUTH2_AUTH_CODE_FLOW";
})(AuthConfigTemplateAuthTypeEnum || (AuthConfigTemplateAuthTypeEnum = {}));
// AuthConfigTemplate
/**
 * AuthConfigTemplate defines required field over an authentication type.
**/
var AuthConfigTemplate = /** @class */ (function (_super) {
    __extends(AuthConfigTemplate, _super);
    function AuthConfigTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], AuthConfigTemplate.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configVariableTemplates", elemType: ConfigVariableTemplate }),
        __metadata("design:type", Array)
    ], AuthConfigTemplate.prototype, "configVariableTemplates", void 0);
    return AuthConfigTemplate;
}(SpeakeasyBase));
export { AuthConfigTemplate };
