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
import { IdentityServiceAzureAdConfig } from "./identityserviceazureadconfig";
import { IdentityServiceGoogleConfig } from "./identityservicegoogleconfig";
import { IdentityServiceOidcConfig } from "./identityserviceoidcconfig";
import { IdentityServiceAzureAdConfigInput } from "./identityserviceazureadconfig";
import { IdentityServiceOidcConfigInput } from "./identityserviceoidcconfig";
// IdentityServiceAuthMethod
/**
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
var IdentityServiceAuthMethod = /** @class */ (function (_super) {
    __extends(IdentityServiceAuthMethod, _super);
    function IdentityServiceAuthMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azureadConfig" }),
        __metadata("design:type", IdentityServiceAzureAdConfig)
    ], IdentityServiceAuthMethod.prototype, "azureadConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleConfig" }),
        __metadata("design:type", IdentityServiceGoogleConfig)
    ], IdentityServiceAuthMethod.prototype, "googleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IdentityServiceAuthMethod.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidcConfig" }),
        __metadata("design:type", IdentityServiceOidcConfig)
    ], IdentityServiceAuthMethod.prototype, "oidcConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxy" }),
        __metadata("design:type", String)
    ], IdentityServiceAuthMethod.prototype, "proxy", void 0);
    return IdentityServiceAuthMethod;
}(SpeakeasyBase));
export { IdentityServiceAuthMethod };
// IdentityServiceAuthMethodInput
/**
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
var IdentityServiceAuthMethodInput = /** @class */ (function (_super) {
    __extends(IdentityServiceAuthMethodInput, _super);
    function IdentityServiceAuthMethodInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azureadConfig" }),
        __metadata("design:type", IdentityServiceAzureAdConfigInput)
    ], IdentityServiceAuthMethodInput.prototype, "azureadConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleConfig" }),
        __metadata("design:type", IdentityServiceGoogleConfig)
    ], IdentityServiceAuthMethodInput.prototype, "googleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IdentityServiceAuthMethodInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidcConfig" }),
        __metadata("design:type", IdentityServiceOidcConfigInput)
    ], IdentityServiceAuthMethodInput.prototype, "oidcConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxy" }),
        __metadata("design:type", String)
    ], IdentityServiceAuthMethodInput.prototype, "proxy", void 0);
    return IdentityServiceAuthMethodInput;
}(SpeakeasyBase));
export { IdentityServiceAuthMethodInput };
