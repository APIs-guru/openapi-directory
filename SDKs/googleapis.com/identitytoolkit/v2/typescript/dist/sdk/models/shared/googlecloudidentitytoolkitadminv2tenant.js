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
import { GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig } from "./googlecloudidentitytoolkitadminv2clientpermissionconfig";
import { GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig } from "./googlecloudidentitytoolkitadminv2emailprivacyconfig";
import { GoogleCloudIdentitytoolkitAdminV2HashConfig } from "./googlecloudidentitytoolkitadminv2hashconfig";
import { GoogleCloudIdentitytoolkitAdminV2Inheritance } from "./googlecloudidentitytoolkitadminv2inheritance";
import { GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig } from "./googlecloudidentitytoolkitadminv2multifactorauthconfig";
import { GoogleCloudIdentitytoolkitAdminV2MonitoringConfig } from "./googlecloudidentitytoolkitadminv2monitoringconfig";
import { GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig } from "./googlecloudidentitytoolkitadminv2smsregionconfig";
// GoogleCloudIdentitytoolkitAdminV2Tenant
/**
 * A Tenant contains configuration for the tenant in a multi-tenant project.
**/
var GoogleCloudIdentitytoolkitAdminV2Tenant = /** @class */ (function (_super) {
    __extends(GoogleCloudIdentitytoolkitAdminV2Tenant, _super);
    function GoogleCloudIdentitytoolkitAdminV2Tenant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowPasswordSignup" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "allowPasswordSignup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autodeleteAnonymousUsers" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "autodeleteAnonymousUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableAuth" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "disableAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailPrivacyConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "emailPrivacyConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAnonymousUser" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "enableAnonymousUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableEmailLinkSignin" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "enableEmailLinkSignin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2HashConfig)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "hashConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritance" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2Inheritance)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "inheritance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mfaConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "mfaConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoring" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2MonitoringConfig)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsRegionConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "smsRegionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testPhoneNumbers" }),
        __metadata("design:type", Map)
    ], GoogleCloudIdentitytoolkitAdminV2Tenant.prototype, "testPhoneNumbers", void 0);
    return GoogleCloudIdentitytoolkitAdminV2Tenant;
}(SpeakeasyBase));
export { GoogleCloudIdentitytoolkitAdminV2Tenant };
// GoogleCloudIdentitytoolkitAdminV2TenantInput
/**
 * A Tenant contains configuration for the tenant in a multi-tenant project.
**/
var GoogleCloudIdentitytoolkitAdminV2TenantInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIdentitytoolkitAdminV2TenantInput, _super);
    function GoogleCloudIdentitytoolkitAdminV2TenantInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowPasswordSignup" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "allowPasswordSignup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autodeleteAnonymousUsers" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "autodeleteAnonymousUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableAuth" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "disableAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailPrivacyConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "emailPrivacyConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAnonymousUser" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "enableAnonymousUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableEmailLinkSignin" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "enableEmailLinkSignin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritance" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2Inheritance)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "inheritance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mfaConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "mfaConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoring" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2MonitoringConfig)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsRegionConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "smsRegionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testPhoneNumbers" }),
        __metadata("design:type", Map)
    ], GoogleCloudIdentitytoolkitAdminV2TenantInput.prototype, "testPhoneNumbers", void 0);
    return GoogleCloudIdentitytoolkitAdminV2TenantInput;
}(SpeakeasyBase));
export { GoogleCloudIdentitytoolkitAdminV2TenantInput };
