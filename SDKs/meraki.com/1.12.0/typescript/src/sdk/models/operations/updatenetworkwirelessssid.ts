import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


// UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials
/** 
 * (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
**/
export class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=logonName" })
  logonName?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}


export class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}


// UpdateNetworkWirelessSsidRequestBodyActiveDirectory
/** 
 * The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
**/
export class UpdateNetworkWirelessSsidRequestBodyActiveDirectory extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials" })
  credentials?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;

  @Metadata({ data: "json, name=servers", elemType: operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers })
  servers?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[];
}


export class UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: number;
}

export enum UpdateNetworkWirelessSsidRequestBodyAuthModeEnum {
    Open = "open"
,    Psk = "psk"
,    OpenWithRadius = "open-with-radius"
,    EightThousandAndTwentyOnexMeraki = "8021x-meraki"
,    EightThousandAndTwentyOnexRadius = "8021x-radius"
,    EightThousandAndTwentyOnexGoogle = "8021x-google"
,    EightThousandAndTwentyOnexLocalradius = "8021x-localradius"
,    IpskWithRadius = "ipsk-with-radius"
,    IpskWithoutRadius = "ipsk-without-radius"
}


// UpdateNetworkWirelessSsidRequestBodyDnsRewrite
/** 
 * DNS servers rewrite settings
**/
export class UpdateNetworkWirelessSsidRequestBodyDnsRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyDot11r
/** 
 * The current setting for 802.11r
**/
export class UpdateNetworkWirelessSsidRequestBodyDot11r extends SpeakeasyBase {
  @Metadata({ data: "json, name=adaptive" })
  adaptive?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyDot11w
/** 
 * The current setting for Protected Management Frames (802.11w).
**/
export class UpdateNetworkWirelessSsidRequestBodyDot11w extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}

export enum UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum {
    Wep = "wep"
,    Wpa = "wpa"
}

export enum UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum {
    AccessDisabled = "access disabled"
,    AccessEnabled = "access enabled"
}


// UpdateNetworkWirelessSsidRequestBodyLdapCredentials
/** 
 * (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
**/
export class UpdateNetworkWirelessSsidRequestBodyLdapCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=distinguishedName" })
  distinguishedName?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}


// UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate
/** 
 * The CA certificate used to sign the LDAP server's key.
**/
export class UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;
}


export class UpdateNetworkWirelessSsidRequestBodyLdapServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;
}


// UpdateNetworkWirelessSsidRequestBodyLdap
/** 
 * The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
**/
export class UpdateNetworkWirelessSsidRequestBodyLdap extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseDistinguishedName" })
  baseDistinguishedName?: string;

  @Metadata({ data: "json, name=credentials" })
  credentials?: UpdateNetworkWirelessSsidRequestBodyLdapCredentials;

  @Metadata({ data: "json, name=serverCaCertificate" })
  serverCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;

  @Metadata({ data: "json, name=servers", elemType: operations.UpdateNetworkWirelessSsidRequestBodyLdapServers })
  servers?: UpdateNetworkWirelessSsidRequestBodyLdapServers[];
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate
/** 
 * The Client CA Certificate used to sign the client certificate.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication
/** 
 * The current setting for certificate verification.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRootCaCertificate" })
  clientRootCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=ocspResponderUrl" })
  ocspResponderUrl?: string;

  @Metadata({ data: "json, name=useLdap" })
  useLdap?: boolean;

  @Metadata({ data: "json, name=useOcsp" })
  useOcsp?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication
/** 
 * The current setting for password-based authentication.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidRequestBodyLocalRadius
/** 
 * The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
**/
export class UpdateNetworkWirelessSsidRequestBodyLocalRadius extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheTimeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=certificateAuthentication" })
  certificateAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;

  @Metadata({ data: "json, name=passwordAuthentication" })
  passwordAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
}


// UpdateNetworkWirelessSsidRequestBodyOauth
/** 
 * The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
**/
export class UpdateNetworkWirelessSsidRequestBodyOauth extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedDomains" })
  allowedDomains?: string[];
}


export class UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=radsecEnabled" })
  radsecEnabled?: boolean;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}

export enum UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum {
    FilterId = "Filter-Id"
,    ReplyMessage = "Reply-Message"
,    AirespaceAclName = "Airespace-ACL-Name"
,    ArubaUserRole = "Aruba-User-Role"
}

export enum UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum {
    DenyAccess = "Deny access"
,    AllowAccess = "Allow access"
}

export enum UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum {
    StrictPriorityOrder = "Strict priority order"
,    RoundRobin = "Round robin"
}


export class UpdateNetworkWirelessSsidRequestBodyRadiusServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=radsecEnabled" })
  radsecEnabled?: boolean;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}

export enum UpdateNetworkWirelessSsidRequestBodySplashPageEnum {
    None = "None"
,    ClickThroughSplashPage = "Click-through splash page"
,    Billing = "Billing"
,    PasswordProtectedWithMerakiRadius = "Password-protected with Meraki RADIUS"
,    PasswordProtectedWithCustomRadius = "Password-protected with custom RADIUS"
,    PasswordProtectedWithActiveDirectory = "Password-protected with Active Directory"
,    PasswordProtectedWithLdap = "Password-protected with LDAP"
,    SmsAuthentication = "SMS authentication"
,    SystemsManagerSentry = "Systems Manager Sentry"
,    FacebookWiFi = "Facebook Wi-Fi"
,    GoogleOAuth = "Google OAuth"
,    SponsoredGuest = "Sponsored guest"
,    CiscoIse = "Cisco ISE"
,    GoogleAppsDomain = "Google Apps domain"
}

export enum UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum {
    Wpa1Only = "WPA1 only"
,    Wpa1AndWpa2 = "WPA1 and WPA2"
,    Wpa2Only = "WPA2 only"
,    Wpa3TransitionMode = "WPA3 Transition Mode"
,    Wpa3Only = "WPA3 only"
}


export class UpdateNetworkWirelessSsidRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDirectory" })
  activeDirectory?: UpdateNetworkWirelessSsidRequestBodyActiveDirectory;

  @Metadata({ data: "json, name=adultContentFilteringEnabled" })
  adultContentFilteringEnabled?: boolean;

  @Metadata({ data: "json, name=apTagsAndVlanIds", elemType: operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds })
  apTagsAndVlanIds?: UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[];

  @Metadata({ data: "json, name=authMode" })
  authMode?: UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;

  @Metadata({ data: "json, name=availabilityTags" })
  availabilityTags?: string[];

  @Metadata({ data: "json, name=availableOnAllAps" })
  availableOnAllAps?: boolean;

  @Metadata({ data: "json, name=bandSelection" })
  bandSelection?: string;

  @Metadata({ data: "json, name=concentratorNetworkId" })
  concentratorNetworkId?: string;

  @Metadata({ data: "json, name=defaultVlanId" })
  defaultVlanId?: number;

  @Metadata({ data: "json, name=dnsRewrite" })
  dnsRewrite?: UpdateNetworkWirelessSsidRequestBodyDnsRewrite;

  @Metadata({ data: "json, name=dot11r" })
  dot11r?: UpdateNetworkWirelessSsidRequestBodyDot11r;

  @Metadata({ data: "json, name=dot11w" })
  dot11w?: UpdateNetworkWirelessSsidRequestBodyDot11w;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=encryptionMode" })
  encryptionMode?: UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;

  @Metadata({ data: "json, name=enterpriseAdminAccess" })
  enterpriseAdminAccess?: UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;

  @Metadata({ data: "json, name=ipAssignmentMode" })
  ipAssignmentMode?: string;

  @Metadata({ data: "json, name=lanIsolationEnabled" })
  lanIsolationEnabled?: boolean;

  @Metadata({ data: "json, name=ldap" })
  ldap?: UpdateNetworkWirelessSsidRequestBodyLdap;

  @Metadata({ data: "json, name=localRadius" })
  localRadius?: UpdateNetworkWirelessSsidRequestBodyLocalRadius;

  @Metadata({ data: "json, name=mandatoryDhcpEnabled" })
  mandatoryDhcpEnabled?: boolean;

  @Metadata({ data: "json, name=minBitrate" })
  minBitrate?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oauth" })
  oauth?: UpdateNetworkWirelessSsidRequestBodyOauth;

  @Metadata({ data: "json, name=perClientBandwidthLimitDown" })
  perClientBandwidthLimitDown?: number;

  @Metadata({ data: "json, name=perClientBandwidthLimitUp" })
  perClientBandwidthLimitUp?: number;

  @Metadata({ data: "json, name=perSsidBandwidthLimitDown" })
  perSsidBandwidthLimitDown?: number;

  @Metadata({ data: "json, name=perSsidBandwidthLimitUp" })
  perSsidBandwidthLimitUp?: number;

  @Metadata({ data: "json, name=psk" })
  psk?: string;

  @Metadata({ data: "json, name=radiusAccountingEnabled" })
  radiusAccountingEnabled?: boolean;

  @Metadata({ data: "json, name=radiusAccountingInterimInterval" })
  radiusAccountingInterimInterval?: number;

  @Metadata({ data: "json, name=radiusAccountingServers", elemType: operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers })
  radiusAccountingServers?: UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[];

  @Metadata({ data: "json, name=radiusAttributeForGroupPolicies" })
  radiusAttributeForGroupPolicies?: UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;

  @Metadata({ data: "json, name=radiusAuthenticationNasId" })
  radiusAuthenticationNasId?: string;

  @Metadata({ data: "json, name=radiusCalledStationId" })
  radiusCalledStationId?: string;

  @Metadata({ data: "json, name=radiusCoaEnabled" })
  radiusCoaEnabled?: boolean;

  @Metadata({ data: "json, name=radiusFailoverPolicy" })
  radiusFailoverPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;

  @Metadata({ data: "json, name=radiusFallbackEnabled" })
  radiusFallbackEnabled?: boolean;

  @Metadata({ data: "json, name=radiusGuestVlanEnabled" })
  radiusGuestVlanEnabled?: boolean;

  @Metadata({ data: "json, name=radiusGuestVlanId" })
  radiusGuestVlanId?: number;

  @Metadata({ data: "json, name=radiusLoadBalancingPolicy" })
  radiusLoadBalancingPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;

  @Metadata({ data: "json, name=radiusOverride" })
  radiusOverride?: boolean;

  @Metadata({ data: "json, name=radiusProxyEnabled" })
  radiusProxyEnabled?: boolean;

  @Metadata({ data: "json, name=radiusServerAttemptsLimit" })
  radiusServerAttemptsLimit?: number;

  @Metadata({ data: "json, name=radiusServerTimeout" })
  radiusServerTimeout?: number;

  @Metadata({ data: "json, name=radiusServers", elemType: operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers })
  radiusServers?: UpdateNetworkWirelessSsidRequestBodyRadiusServers[];

  @Metadata({ data: "json, name=radiusTestingEnabled" })
  radiusTestingEnabled?: boolean;

  @Metadata({ data: "json, name=splashGuestSponsorDomains" })
  splashGuestSponsorDomains?: string[];

  @Metadata({ data: "json, name=splashPage" })
  splashPage?: UpdateNetworkWirelessSsidRequestBodySplashPageEnum;

  @Metadata({ data: "json, name=useVlanTagging" })
  useVlanTagging?: boolean;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: number;

  @Metadata({ data: "json, name=walledGardenEnabled" })
  walledGardenEnabled?: boolean;

  @Metadata({ data: "json, name=walledGardenRanges" })
  walledGardenRanges?: string[];

  @Metadata({ data: "json, name=wpaEncryptionMode" })
  wpaEncryptionMode?: UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;
}


export class UpdateNetworkWirelessSsidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidRequestBody;
}


export class UpdateNetworkWirelessSsidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsid200ApplicationJsonObject?: Map<string, any>;
}
