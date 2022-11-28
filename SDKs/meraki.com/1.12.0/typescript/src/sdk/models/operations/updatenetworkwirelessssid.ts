import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


// UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials
/** 
 * (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
**/
export class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logonName" })
  logonName?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}


export class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}


// UpdateNetworkWirelessSsidRequestBodyActiveDirectory
/** 
 * The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
**/
export class UpdateNetworkWirelessSsidRequestBodyActiveDirectory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;

  @SpeakeasyMetadata({ data: "json, name=servers", elemType: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers })
  servers?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[];
}


export class UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: number;
}

export enum UpdateNetworkWirelessSsidRequestBodyAuthModeEnum {
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


// UpdateNetworkWirelessSsidRequestBodyDnsRewrite
/** 
 * DNS servers rewrite settings
**/
export class UpdateNetworkWirelessSsidRequestBodyDnsRewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyDot11r
/** 
 * The current setting for 802.11r
**/
export class UpdateNetworkWirelessSsidRequestBodyDot11r extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adaptive" })
  adaptive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyDot11w
/** 
 * The current setting for Protected Management Frames (802.11w).
**/
export class UpdateNetworkWirelessSsidRequestBodyDot11w extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}

export enum UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum {
    Wep = "wep",
    Wpa = "wpa"
}

export enum UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum {
    AccessDisabled = "access disabled",
    AccessEnabled = "access enabled"
}


// UpdateNetworkWirelessSsidRequestBodyLdapCredentials
/** 
 * (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
**/
export class UpdateNetworkWirelessSsidRequestBodyLdapCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinguishedName" })
  distinguishedName?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}


// UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate
/** 
 * The CA certificate used to sign the LDAP server's key.
**/
export class UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;
}


export class UpdateNetworkWirelessSsidRequestBodyLdapServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;
}


// UpdateNetworkWirelessSsidRequestBodyLdap
/** 
 * The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
**/
export class UpdateNetworkWirelessSsidRequestBodyLdap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseDistinguishedName" })
  baseDistinguishedName?: string;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: UpdateNetworkWirelessSsidRequestBodyLdapCredentials;

  @SpeakeasyMetadata({ data: "json, name=serverCaCertificate" })
  serverCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;

  @SpeakeasyMetadata({ data: "json, name=servers", elemType: UpdateNetworkWirelessSsidRequestBodyLdapServers })
  servers?: UpdateNetworkWirelessSsidRequestBodyLdapServers[];
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate
/** 
 * The Client CA Certificate used to sign the client certificate.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication
/** 
 * The current setting for certificate verification.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRootCaCertificate" })
  clientRootCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ocspResponderUrl" })
  ocspResponderUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=useLdap" })
  useLdap?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useOcsp" })
  useOcsp?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication
/** 
 * The current setting for password-based authentication.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadius
/** 
 * The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadius extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheTimeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=certificateAuthentication" })
  certificateAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;

  @SpeakeasyMetadata({ data: "json, name=passwordAuthentication" })
  passwordAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
}


// UpdateNetworkWirelessSsidRequestBodyOauth
/** 
 * The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
**/
export class UpdateNetworkWirelessSsidRequestBodyOauth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedDomains" })
  allowedDomains?: string[];
}


export class UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=radsecEnabled" })
  radsecEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}

export enum UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum {
    FilterId = "Filter-Id",
    ReplyMessage = "Reply-Message",
    AirespaceAclName = "Airespace-ACL-Name",
    ArubaUserRole = "Aruba-User-Role"
}

export enum UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum {
    DenyAccess = "Deny access",
    AllowAccess = "Allow access"
}

export enum UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum {
    StrictPriorityOrder = "Strict priority order",
    RoundRobin = "Round robin"
}


export class UpdateNetworkWirelessSsidRequestBodyRadiusServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=radsecEnabled" })
  radsecEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}

export enum UpdateNetworkWirelessSsidRequestBodySplashPageEnum {
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

export enum UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum {
    Wpa1Only = "WPA1 only",
    Wpa1AndWpa2 = "WPA1 and WPA2",
    Wpa2Only = "WPA2 only",
    Wpa3TransitionMode = "WPA3 Transition Mode",
    Wpa3Only = "WPA3 only"
}


export class UpdateNetworkWirelessSsidRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDirectory" })
  activeDirectory?: UpdateNetworkWirelessSsidRequestBodyActiveDirectory;

  @SpeakeasyMetadata({ data: "json, name=adultContentFilteringEnabled" })
  adultContentFilteringEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=apTagsAndVlanIds", elemType: UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds })
  apTagsAndVlanIds?: UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[];

  @SpeakeasyMetadata({ data: "json, name=authMode" })
  authMode?: UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=availabilityTags" })
  availabilityTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=availableOnAllAps" })
  availableOnAllAps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bandSelection" })
  bandSelection?: string;

  @SpeakeasyMetadata({ data: "json, name=concentratorNetworkId" })
  concentratorNetworkId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultVlanId" })
  defaultVlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=dnsRewrite" })
  dnsRewrite?: UpdateNetworkWirelessSsidRequestBodyDnsRewrite;

  @SpeakeasyMetadata({ data: "json, name=dot11r" })
  dot11r?: UpdateNetworkWirelessSsidRequestBodyDot11r;

  @SpeakeasyMetadata({ data: "json, name=dot11w" })
  dot11w?: UpdateNetworkWirelessSsidRequestBodyDot11w;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionMode" })
  encryptionMode?: UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=enterpriseAdminAccess" })
  enterpriseAdminAccess?: UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=ipAssignmentMode" })
  ipAssignmentMode?: string;

  @SpeakeasyMetadata({ data: "json, name=lanIsolationEnabled" })
  lanIsolationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ldap" })
  ldap?: UpdateNetworkWirelessSsidRequestBodyLdap;

  @SpeakeasyMetadata({ data: "json, name=localRadius" })
  localRadius?: UpdateNetworkWirelessSsidRequestBodyLocalRadius;

  @SpeakeasyMetadata({ data: "json, name=mandatoryDhcpEnabled" })
  mandatoryDhcpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minBitrate" })
  minBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth" })
  oauth?: UpdateNetworkWirelessSsidRequestBodyOauth;

  @SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimitDown" })
  perClientBandwidthLimitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimitUp" })
  perClientBandwidthLimitUp?: number;

  @SpeakeasyMetadata({ data: "json, name=perSsidBandwidthLimitDown" })
  perSsidBandwidthLimitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=perSsidBandwidthLimitUp" })
  perSsidBandwidthLimitUp?: number;

  @SpeakeasyMetadata({ data: "json, name=psk" })
  psk?: string;

  @SpeakeasyMetadata({ data: "json, name=radiusAccountingEnabled" })
  radiusAccountingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusAccountingInterimInterval" })
  radiusAccountingInterimInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=radiusAccountingServers", elemType: UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers })
  radiusAccountingServers?: UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[];

  @SpeakeasyMetadata({ data: "json, name=radiusAttributeForGroupPolicies" })
  radiusAttributeForGroupPolicies?: UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;

  @SpeakeasyMetadata({ data: "json, name=radiusAuthenticationNasId" })
  radiusAuthenticationNasId?: string;

  @SpeakeasyMetadata({ data: "json, name=radiusCalledStationId" })
  radiusCalledStationId?: string;

  @SpeakeasyMetadata({ data: "json, name=radiusCoaEnabled" })
  radiusCoaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusFailoverPolicy" })
  radiusFailoverPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=radiusFallbackEnabled" })
  radiusFallbackEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusGuestVlanEnabled" })
  radiusGuestVlanEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusGuestVlanId" })
  radiusGuestVlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=radiusLoadBalancingPolicy" })
  radiusLoadBalancingPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=radiusOverride" })
  radiusOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusProxyEnabled" })
  radiusProxyEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusServerAttemptsLimit" })
  radiusServerAttemptsLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=radiusServerTimeout" })
  radiusServerTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=radiusServers", elemType: UpdateNetworkWirelessSsidRequestBodyRadiusServers })
  radiusServers?: UpdateNetworkWirelessSsidRequestBodyRadiusServers[];

  @SpeakeasyMetadata({ data: "json, name=radiusTestingEnabled" })
  radiusTestingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=splashGuestSponsorDomains" })
  splashGuestSponsorDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=splashPage" })
  splashPage?: UpdateNetworkWirelessSsidRequestBodySplashPageEnum;

  @SpeakeasyMetadata({ data: "json, name=useVlanTagging" })
  useVlanTagging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=walledGardenEnabled" })
  walledGardenEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=walledGardenRanges" })
  walledGardenRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=wpaEncryptionMode" })
  wpaEncryptionMode?: UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;
}


export class UpdateNetworkWirelessSsidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidRequestBody;
}


export class UpdateNetworkWirelessSsidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsid200ApplicationJsonObject?: Map<string, any>;
}
