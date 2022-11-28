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
import { GoogleCloudIdentitytoolkitAdminV2OAuthResponseType } from "./googlecloudidentitytoolkitadminv2oauthresponsetype";
// GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
/**
 * Configuration options for authenticating with an OAuth IDP.
**/
var GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig, _super);
    function GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseType" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2OAuthResponseType)
    ], GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.prototype, "responseType", void 0);
    return GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
}(SpeakeasyBase));
export { GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig };
