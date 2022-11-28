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
var UpdateNetworkWirelessSsidPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidPathParams, _super);
    function UpdateNetworkWirelessSsidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidPathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidPathParams };
// UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials
/**
 * (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
**/
var UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials, _super);
    function UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logonName" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials.prototype, "logonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials.prototype, "password", void 0);
    return UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials };
var UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers, _super);
    function UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers.prototype, "port", void 0);
    return UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers };
// UpdateNetworkWirelessSsidRequestBodyActiveDirectory
/**
 * The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
**/
var UpdateNetworkWirelessSsidRequestBodyActiveDirectory = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyActiveDirectory, _super);
    function UpdateNetworkWirelessSsidRequestBodyActiveDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials)
    ], UpdateNetworkWirelessSsidRequestBodyActiveDirectory.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers", elemType: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBodyActiveDirectory.prototype, "servers", void 0);
    return UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyActiveDirectory };
var UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds, _super);
    function UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds.prototype, "vlanId", void 0);
    return UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds };
export var UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
(function (UpdateNetworkWirelessSsidRequestBodyAuthModeEnum) {
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["Open"] = "open";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["Psk"] = "psk";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["OpenWithRadius"] = "open-with-radius";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["EightThousandAndTwentyOnexMeraki"] = "8021x-meraki";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["EightThousandAndTwentyOnexRadius"] = "8021x-radius";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["EightThousandAndTwentyOnexGoogle"] = "8021x-google";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["EightThousandAndTwentyOnexLocalradius"] = "8021x-localradius";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["IpskWithRadius"] = "ipsk-with-radius";
    UpdateNetworkWirelessSsidRequestBodyAuthModeEnum["IpskWithoutRadius"] = "ipsk-without-radius";
})(UpdateNetworkWirelessSsidRequestBodyAuthModeEnum || (UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = {}));
// UpdateNetworkWirelessSsidRequestBodyDnsRewrite
/**
 * DNS servers rewrite settings
**/
var UpdateNetworkWirelessSsidRequestBodyDnsRewrite = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyDnsRewrite, _super);
    function UpdateNetworkWirelessSsidRequestBodyDnsRewrite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBodyDnsRewrite.prototype, "dnsCustomNameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyDnsRewrite.prototype, "enabled", void 0);
    return UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyDnsRewrite };
// UpdateNetworkWirelessSsidRequestBodyDot11r
/**
 * The current setting for 802.11r
**/
var UpdateNetworkWirelessSsidRequestBodyDot11r = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyDot11r, _super);
    function UpdateNetworkWirelessSsidRequestBodyDot11r() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adaptive" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyDot11r.prototype, "adaptive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyDot11r.prototype, "enabled", void 0);
    return UpdateNetworkWirelessSsidRequestBodyDot11r;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyDot11r };
// UpdateNetworkWirelessSsidRequestBodyDot11w
/**
 * The current setting for Protected Management Frames (802.11w).
**/
var UpdateNetworkWirelessSsidRequestBodyDot11w = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyDot11w, _super);
    function UpdateNetworkWirelessSsidRequestBodyDot11w() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyDot11w.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyDot11w.prototype, "required", void 0);
    return UpdateNetworkWirelessSsidRequestBodyDot11w;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyDot11w };
export var UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
(function (UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum) {
    UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum["Wep"] = "wep";
    UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum["Wpa"] = "wpa";
})(UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum || (UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum = {}));
export var UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
(function (UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum) {
    UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum["AccessDisabled"] = "access disabled";
    UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum["AccessEnabled"] = "access enabled";
})(UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum || (UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum = {}));
// UpdateNetworkWirelessSsidRequestBodyLdapCredentials
/**
 * (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
**/
var UpdateNetworkWirelessSsidRequestBodyLdapCredentials = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLdapCredentials, _super);
    function UpdateNetworkWirelessSsidRequestBodyLdapCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distinguishedName" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyLdapCredentials.prototype, "distinguishedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyLdapCredentials.prototype, "password", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLdapCredentials };
// UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate
/**
 * The CA certificate used to sign the LDAP server's key.
**/
var UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate, _super);
    function UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate.prototype, "contents", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate };
var UpdateNetworkWirelessSsidRequestBodyLdapServers = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLdapServers, _super);
    function UpdateNetworkWirelessSsidRequestBodyLdapServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyLdapServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBodyLdapServers.prototype, "port", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLdapServers;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLdapServers };
// UpdateNetworkWirelessSsidRequestBodyLdap
/**
 * The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
**/
var UpdateNetworkWirelessSsidRequestBodyLdap = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLdap, _super);
    function UpdateNetworkWirelessSsidRequestBodyLdap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseDistinguishedName" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyLdap.prototype, "baseDistinguishedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyLdapCredentials)
    ], UpdateNetworkWirelessSsidRequestBodyLdap.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverCaCertificate" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate)
    ], UpdateNetworkWirelessSsidRequestBodyLdap.prototype, "serverCaCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers", elemType: UpdateNetworkWirelessSsidRequestBodyLdapServers }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBodyLdap.prototype, "servers", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLdap;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLdap };
// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate
/**
 * The Client CA Certificate used to sign the client certificate.
**/
var UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate, _super);
    function UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate.prototype, "contents", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate };
// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication
/**
 * The current setting for certificate verification.
**/
var UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication, _super);
    function UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRootCaCertificate" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication.prototype, "clientRootCaCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ocspResponderUrl" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication.prototype, "ocspResponderUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useLdap" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication.prototype, "useLdap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useOcsp" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication.prototype, "useOcsp", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication };
// UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication
/**
 * The current setting for password-based authentication.
**/
var UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication, _super);
    function UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication.prototype, "enabled", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication };
// UpdateNetworkWirelessSsidRequestBodyLocalRadius
/**
 * The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
**/
var UpdateNetworkWirelessSsidRequestBodyLocalRadius = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyLocalRadius, _super);
    function UpdateNetworkWirelessSsidRequestBodyLocalRadius() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheTimeout" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadius.prototype, "cacheTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateAuthentication" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadius.prototype, "certificateAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordAuthentication" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication)
    ], UpdateNetworkWirelessSsidRequestBodyLocalRadius.prototype, "passwordAuthentication", void 0);
    return UpdateNetworkWirelessSsidRequestBodyLocalRadius;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyLocalRadius };
// UpdateNetworkWirelessSsidRequestBodyOauth
/**
 * The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
**/
var UpdateNetworkWirelessSsidRequestBodyOauth = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyOauth, _super);
    function UpdateNetworkWirelessSsidRequestBodyOauth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedDomains" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBodyOauth.prototype, "allowedDomains", void 0);
    return UpdateNetworkWirelessSsidRequestBodyOauth;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyOauth };
var UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers, _super);
    function UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radsecEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers.prototype, "radsecEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers.prototype, "secret", void 0);
    return UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers };
export var UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
(function (UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum) {
    UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum["FilterId"] = "Filter-Id";
    UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum["ReplyMessage"] = "Reply-Message";
    UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum["AirespaceAclName"] = "Airespace-ACL-Name";
    UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum["ArubaUserRole"] = "Aruba-User-Role";
})(UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum || (UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum = {}));
export var UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
(function (UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum) {
    UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum["DenyAccess"] = "Deny access";
    UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum["AllowAccess"] = "Allow access";
})(UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum || (UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum = {}));
export var UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
(function (UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum) {
    UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum["StrictPriorityOrder"] = "Strict priority order";
    UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum["RoundRobin"] = "Round robin";
})(UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum || (UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum = {}));
var UpdateNetworkWirelessSsidRequestBodyRadiusServers = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBodyRadiusServers, _super);
    function UpdateNetworkWirelessSsidRequestBodyRadiusServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusServers.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radsecEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusServers.prototype, "radsecEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBodyRadiusServers.prototype, "secret", void 0);
    return UpdateNetworkWirelessSsidRequestBodyRadiusServers;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBodyRadiusServers };
export var UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
(function (UpdateNetworkWirelessSsidRequestBodySplashPageEnum) {
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["None"] = "None";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["ClickThroughSplashPage"] = "Click-through splash page";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["Billing"] = "Billing";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["PasswordProtectedWithMerakiRadius"] = "Password-protected with Meraki RADIUS";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["PasswordProtectedWithCustomRadius"] = "Password-protected with custom RADIUS";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["PasswordProtectedWithActiveDirectory"] = "Password-protected with Active Directory";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["PasswordProtectedWithLdap"] = "Password-protected with LDAP";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["SmsAuthentication"] = "SMS authentication";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["SystemsManagerSentry"] = "Systems Manager Sentry";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["FacebookWiFi"] = "Facebook Wi-Fi";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["GoogleOAuth"] = "Google OAuth";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["SponsoredGuest"] = "Sponsored guest";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["CiscoIse"] = "Cisco ISE";
    UpdateNetworkWirelessSsidRequestBodySplashPageEnum["GoogleAppsDomain"] = "Google Apps domain";
})(UpdateNetworkWirelessSsidRequestBodySplashPageEnum || (UpdateNetworkWirelessSsidRequestBodySplashPageEnum = {}));
export var UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;
(function (UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum) {
    UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum["Wpa1Only"] = "WPA1 only";
    UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum["Wpa1AndWpa2"] = "WPA1 and WPA2";
    UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum["Wpa2Only"] = "WPA2 only";
    UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum["Wpa3TransitionMode"] = "WPA3 Transition Mode";
    UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum["Wpa3Only"] = "WPA3 only";
})(UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum || (UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum = {}));
var UpdateNetworkWirelessSsidRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequestBody, _super);
    function UpdateNetworkWirelessSsidRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeDirectory" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyActiveDirectory)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "activeDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adultContentFilteringEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "adultContentFilteringEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apTagsAndVlanIds", elemType: UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "apTagsAndVlanIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "authMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityTags" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "availabilityTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableOnAllAps" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "availableOnAllAps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandSelection" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "bandSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concentratorNetworkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "concentratorNetworkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultVlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "defaultVlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsRewrite" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyDnsRewrite)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "dnsRewrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dot11r" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyDot11r)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "dot11r", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dot11w" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyDot11w)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "dot11w", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "encryptionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterpriseAdminAccess" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "enterpriseAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAssignmentMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "ipAssignmentMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lanIsolationEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "lanIsolationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyLdap)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "ldap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localRadius" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyLocalRadius)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "localRadius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandatoryDhcpEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "mandatoryDhcpEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minBitrate" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "minBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBodyOauth)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "oauth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "perClientBandwidthLimitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "perClientBandwidthLimitUp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perSsidBandwidthLimitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "perSsidBandwidthLimitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perSsidBandwidthLimitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "perSsidBandwidthLimitUp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=psk" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "psk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAccountingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusAccountingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAccountingInterimInterval" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusAccountingInterimInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAccountingServers", elemType: UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusAccountingServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAttributeForGroupPolicies" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusAttributeForGroupPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAuthenticationNasId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusAuthenticationNasId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusCalledStationId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusCalledStationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusCoaEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusCoaEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusFailoverPolicy" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusFailoverPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusFallbackEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusFallbackEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusGuestVlanEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusGuestVlanEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusGuestVlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusGuestVlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusLoadBalancingPolicy" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusLoadBalancingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusOverride" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusProxyEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusProxyEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusServerAttemptsLimit" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusServerAttemptsLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusServerTimeout" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusServerTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusServers", elemType: UpdateNetworkWirelessSsidRequestBodyRadiusServers }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusTestingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "radiusTestingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashGuestSponsorDomains" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "splashGuestSponsorDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashPage" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "splashPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useVlanTagging" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "useVlanTagging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "visible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "vlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=walledGardenEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "walledGardenEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=walledGardenRanges" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "walledGardenRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wpaEncryptionMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidRequestBody.prototype, "wpaEncryptionMode", void 0);
    return UpdateNetworkWirelessSsidRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequestBody };
var UpdateNetworkWirelessSsidRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidRequest, _super);
    function UpdateNetworkWirelessSsidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSsidPathParams)
    ], UpdateNetworkWirelessSsidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidRequestBody)
    ], UpdateNetworkWirelessSsidRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidRequest };
var UpdateNetworkWirelessSsidResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidResponse, _super);
    function UpdateNetworkWirelessSsidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidResponse.prototype, "updateNetworkWirelessSsid200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSsidResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidResponse };
