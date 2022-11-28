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
// IdentityServiceOidcConfigInput
/**
 * Configuration for OIDC Auth flow.
**/
var IdentityServiceOidcConfigInput = /** @class */ (function (_super) {
    __extends(IdentityServiceOidcConfigInput, _super);
    function IdentityServiceOidcConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateAuthorityData" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "certificateAuthorityData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployCloudConsoleProxy" }),
        __metadata("design:type", Boolean)
    ], IdentityServiceOidcConfigInput.prototype, "deployCloudConsoleProxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAccessToken" }),
        __metadata("design:type", Boolean)
    ], IdentityServiceOidcConfigInput.prototype, "enableAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraParams" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "extraParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPrefix" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "groupPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupsClaim" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "groupsClaim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuerUri" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "issuerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubectlRedirectUri" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "kubectlRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userClaim" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "userClaim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPrefix" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfigInput.prototype, "userPrefix", void 0);
    return IdentityServiceOidcConfigInput;
}(SpeakeasyBase));
export { IdentityServiceOidcConfigInput };
// IdentityServiceOidcConfig
/**
 * Configuration for OIDC Auth flow.
**/
var IdentityServiceOidcConfig = /** @class */ (function (_super) {
    __extends(IdentityServiceOidcConfig, _super);
    function IdentityServiceOidcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateAuthorityData" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "certificateAuthorityData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployCloudConsoleProxy" }),
        __metadata("design:type", Boolean)
    ], IdentityServiceOidcConfig.prototype, "deployCloudConsoleProxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAccessToken" }),
        __metadata("design:type", Boolean)
    ], IdentityServiceOidcConfig.prototype, "enableAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptedClientSecret" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "encryptedClientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraParams" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "extraParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPrefix" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "groupPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupsClaim" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "groupsClaim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuerUri" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "issuerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubectlRedirectUri" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "kubectlRedirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userClaim" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "userClaim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPrefix" }),
        __metadata("design:type", String)
    ], IdentityServiceOidcConfig.prototype, "userPrefix", void 0);
    return IdentityServiceOidcConfig;
}(SpeakeasyBase));
export { IdentityServiceOidcConfig };
