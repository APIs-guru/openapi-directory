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
import { GoogleCloudIdentitytoolkitAdminV2IdpConfig } from "./googlecloudidentitytoolkitadminv2idpconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfigInput } from "./googlecloudidentitytoolkitadminv2spconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfig } from "./googlecloudidentitytoolkitadminv2spconfig";
// GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput
/**
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
var GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput, _super);
    function GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idpConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2IdpConfig)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput.prototype, "idpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2SpConfigInput)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput.prototype, "spConfig", void 0);
    return GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput;
}(SpeakeasyBase));
export { GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput };
// GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
/**
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
var GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig, _super);
    function GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idpConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2IdpConfig)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.prototype, "idpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2SpConfig)
    ], GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.prototype, "spConfig", void 0);
    return GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
}(SpeakeasyBase));
export { GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig };
