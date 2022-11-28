import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
/**
 * (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials extends SpeakeasyBase {
    logonName?: string;
    password?: string;
}
export declare class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers extends SpeakeasyBase {
    host: string;
    port?: number;
}
/**
 * The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
**/
export declare class UpdateNetworkWirelessSsidRequestBodyActiveDirectory extends SpeakeasyBase {
    credentials?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
    servers?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[];
}
export declare class UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds extends SpeakeasyBase {
    tags?: string[];
    vlanId?: number;
}
export declare enum UpdateNetworkWirelessSsidRequestBodyAuthModeEnum {
    Open = "open",
    Psk = "psk",
    OpenWithRadius = "open-with-radius",
    EightThousandAndTwentyOnexMeraki = "8021x-meraki",
    EightThousandAndTwentyOnexRadius = "8021x-radius",
    EightThousandAndTwentyOnexGoogle = "8021x-google",
    EightThousandAndTwentyOnexLocalradius = "8021x-localradius",
    IpskWithRadius = "ipsk-with-radius",
    IpskWithoutRadius = "ipsk-without-radius"
}
/**
 * DNS servers rewrite settings
**/
export declare class UpdateNetworkWirelessSsidRequestBodyDnsRewrite extends SpeakeasyBase {
    dnsCustomNameservers?: string[];
    enabled?: boolean;
}
/**
 * The current setting for 802.11r
**/
export declare class UpdateNetworkWirelessSsidRequestBodyDot11r extends SpeakeasyBase {
    adaptive?: boolean;
    enabled?: boolean;
}
/**
 * The current setting for Protected Management Frames (802.11w).
**/
export declare class UpdateNetworkWirelessSsidRequestBodyDot11w extends SpeakeasyBase {
    enabled?: boolean;
    required?: boolean;
}
export declare enum UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum {
    Wep = "wep",
    Wpa = "wpa"
}
export declare enum UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum {
    AccessDisabled = "access disabled",
    AccessEnabled = "access enabled"
}
/**
 * (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyLdapCredentials extends SpeakeasyBase {
    distinguishedName?: string;
    password?: string;
}
/**
 * The CA certificate used to sign the LDAP server's key.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate extends SpeakeasyBase {
    contents?: string;
}
export declare class UpdateNetworkWirelessSsidRequestBodyLdapServers extends SpeakeasyBase {
    host: string;
    port: number;
}
/**
 * The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyLdap extends SpeakeasyBase {
    baseDistinguishedName?: string;
    credentials?: UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
    serverCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
    servers?: UpdateNetworkWirelessSsidRequestBodyLdapServers[];
}
/**
 * The Client CA Certificate used to sign the client certificate.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate extends SpeakeasyBase {
    contents?: string;
}
/**
 * The current setting for certificate verification.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication extends SpeakeasyBase {
    clientRootCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
    enabled?: boolean;
    ocspResponderUrl?: string;
    useLdap?: boolean;
    useOcsp?: boolean;
}
/**
 * The current setting for password-based authentication.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadius extends SpeakeasyBase {
    cacheTimeout?: number;
    certificateAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
    passwordAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
}
/**
 * The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
**/
export declare class UpdateNetworkWirelessSsidRequestBodyOauth extends SpeakeasyBase {
    allowedDomains?: string[];
}
export declare class UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers extends SpeakeasyBase {
    host: string;
    port?: number;
    radsecEnabled?: boolean;
    secret?: string;
}
export declare enum UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum {
    FilterId = "Filter-Id",
    ReplyMessage = "Reply-Message",
    AirespaceAclName = "Airespace-ACL-Name",
    ArubaUserRole = "Aruba-User-Role"
}
export declare enum UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum {
    DenyAccess = "Deny access",
    AllowAccess = "Allow access"
}
export declare enum UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum {
    StrictPriorityOrder = "Strict priority order",
    RoundRobin = "Round robin"
}
export declare class UpdateNetworkWirelessSsidRequestBodyRadiusServers extends SpeakeasyBase {
    host: string;
    port?: number;
    radsecEnabled?: boolean;
    secret?: string;
}
export declare enum UpdateNetworkWirelessSsidRequestBodySplashPageEnum {
    None = "None",
    ClickThroughSplashPage = "Click-through splash page",
    Billing = "Billing",
    PasswordProtectedWithMerakiRadius = "Password-protected with Meraki RADIUS",
    PasswordProtectedWithCustomRadius = "Password-protected with custom RADIUS",
    PasswordProtectedWithActiveDirectory = "Password-protected with Active Directory",
    PasswordProtectedWithLdap = "Password-protected with LDAP",
    SmsAuthentication = "SMS authentication",
    SystemsManagerSentry = "Systems Manager Sentry",
    FacebookWiFi = "Facebook Wi-Fi",
    GoogleOAuth = "Google OAuth",
    SponsoredGuest = "Sponsored guest",
    CiscoIse = "Cisco ISE",
    GoogleAppsDomain = "Google Apps domain"
}
export declare enum UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum {
    Wpa1Only = "WPA1 only",
    Wpa1AndWpa2 = "WPA1 and WPA2",
    Wpa2Only = "WPA2 only",
    Wpa3TransitionMode = "WPA3 Transition Mode",
    Wpa3Only = "WPA3 only"
}
export declare class UpdateNetworkWirelessSsidRequestBody extends SpeakeasyBase {
    activeDirectory?: UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
    adultContentFilteringEnabled?: boolean;
    apTagsAndVlanIds?: UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[];
    authMode?: UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
    availabilityTags?: string[];
    availableOnAllAps?: boolean;
    bandSelection?: string;
    concentratorNetworkId?: string;
    defaultVlanId?: number;
    dnsRewrite?: UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
    dot11r?: UpdateNetworkWirelessSsidRequestBodyDot11r;
    dot11w?: UpdateNetworkWirelessSsidRequestBodyDot11w;
    enabled?: boolean;
    encryptionMode?: UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
    enterpriseAdminAccess?: UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
    ipAssignmentMode?: string;
    lanIsolationEnabled?: boolean;
    ldap?: UpdateNetworkWirelessSsidRequestBodyLdap;
    localRadius?: UpdateNetworkWirelessSsidRequestBodyLocalRadius;
    mandatoryDhcpEnabled?: boolean;
    minBitrate?: number;
    name?: string;
    oauth?: UpdateNetworkWirelessSsidRequestBodyOauth;
    perClientBandwidthLimitDown?: number;
    perClientBandwidthLimitUp?: number;
    perSsidBandwidthLimitDown?: number;
    perSsidBandwidthLimitUp?: number;
    psk?: string;
    radiusAccountingEnabled?: boolean;
    radiusAccountingInterimInterval?: number;
    radiusAccountingServers?: UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[];
    radiusAttributeForGroupPolicies?: UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
    radiusAuthenticationNasId?: string;
    radiusCalledStationId?: string;
    radiusCoaEnabled?: boolean;
    radiusFailoverPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
    radiusFallbackEnabled?: boolean;
    radiusGuestVlanEnabled?: boolean;
    radiusGuestVlanId?: number;
    radiusLoadBalancingPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
    radiusOverride?: boolean;
    radiusProxyEnabled?: boolean;
    radiusServerAttemptsLimit?: number;
    radiusServerTimeout?: number;
    radiusServers?: UpdateNetworkWirelessSsidRequestBodyRadiusServers[];
    radiusTestingEnabled?: boolean;
    splashGuestSponsorDomains?: string[];
    splashPage?: UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
    useVlanTagging?: boolean;
    visible?: boolean;
    vlanId?: number;
    walledGardenEnabled?: boolean;
    walledGardenRanges?: string[];
    wpaEncryptionMode?: UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;
}
export declare class UpdateNetworkWirelessSsidRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidPathParams;
    request?: UpdateNetworkWirelessSsidRequestBody;
}
export declare class UpdateNetworkWirelessSsidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsid200ApplicationJsonObject?: Map<string, any>;
}
