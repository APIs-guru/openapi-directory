from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials:
    r"""UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials
    (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
    """
    
    logon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logonName') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyActiveDirectory:
    r"""UpdateNetworkWirelessSsidRequestBodyActiveDirectory
    The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
    """
    
    credentials: Optional[UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds:
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    
class UpdateNetworkWirelessSsidRequestBodyAuthModeEnum(str, Enum):
    OPEN = "open"
    PSK = "psk"
    OPEN_WITH_RADIUS = "open-with-radius"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_MERAKI = "8021x-meraki"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS = "8021x-radius"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_GOOGLE = "8021x-google"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_LOCALRADIUS = "8021x-localradius"
    IPSK_WITH_RADIUS = "ipsk-with-radius"
    IPSK_WITHOUT_RADIUS = "ipsk-without-radius"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyDNSRewrite:
    r"""UpdateNetworkWirelessSsidRequestBodyDNSRewrite
    DNS servers rewrite settings
    """
    
    dns_custom_nameservers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsCustomNameservers') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyDot11r:
    r"""UpdateNetworkWirelessSsidRequestBodyDot11r
    The current setting for 802.11r
    """
    
    adaptive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adaptive') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyDot11w:
    r"""UpdateNetworkWirelessSsidRequestBodyDot11w
    The current setting for Protected Management Frames (802.11w).
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    
class UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum(str, Enum):
    WEP = "wep"
    WPA = "wpa"

class UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum(str, Enum):
    ACCESS_DISABLED = "access disabled"
    ACCESS_ENABLED = "access enabled"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdapCredentials:
    r"""UpdateNetworkWirelessSsidRequestBodyLdapCredentials
    (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
    """
    
    distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distinguishedName') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate:
    r"""UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate
    The CA certificate used to sign the LDAP server's key.
    """
    
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdapServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdap:
    r"""UpdateNetworkWirelessSsidRequestBodyLdap
    The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
    """
    
    base_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseDistinguishedName') }})
    credentials: Optional[UpdateNetworkWirelessSsidRequestBodyLdapCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    server_ca_certificate: Optional[UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCaCertificate') }})
    servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyLdapServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate:
    r"""UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate
    The Client CA Certificate used to sign the client certificate.
    """
    
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication:
    r"""UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication
    The current setting for certificate verification.
    """
    
    client_root_ca_certificate: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRootCaCertificate') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ocsp_responder_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ocspResponderUrl') }})
    use_ldap: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLdap') }})
    use_ocsp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useOcsp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication:
    r"""UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication
    The current setting for password-based authentication.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadius:
    r"""UpdateNetworkWirelessSsidRequestBodyLocalRadius
    The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
    """
    
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheTimeout') }})
    certificate_authentication: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthentication') }})
    password_authentication: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordAuthentication') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyOauth:
    r"""UpdateNetworkWirelessSsidRequestBodyOauth
    The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
    """
    
    allowed_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedDomains') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    radsec_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radsecEnabled') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
class UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum(str, Enum):
    FILTER_ID = "Filter-Id"
    REPLY_MESSAGE = "Reply-Message"
    AIRESPACE_ACL_NAME = "Airespace-ACL-Name"
    ARUBA_USER_ROLE = "Aruba-User-Role"

class UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum(str, Enum):
    DENY_ACCESS = "Deny access"
    ALLOW_ACCESS = "Allow access"

class UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum(str, Enum):
    STRICT_PRIORITY_ORDER = "Strict priority order"
    ROUND_ROBIN = "Round robin"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyRadiusServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    radsec_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radsecEnabled') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
class UpdateNetworkWirelessSsidRequestBodySplashPageEnum(str, Enum):
    NONE = "None"
    CLICK_THROUGH_SPLASH_PAGE = "Click-through splash page"
    BILLING = "Billing"
    PASSWORD_PROTECTED_WITH_MERAKI_RADIUS = "Password-protected with Meraki RADIUS"
    PASSWORD_PROTECTED_WITH_CUSTOM_RADIUS = "Password-protected with custom RADIUS"
    PASSWORD_PROTECTED_WITH_ACTIVE_DIRECTORY = "Password-protected with Active Directory"
    PASSWORD_PROTECTED_WITH_LDAP = "Password-protected with LDAP"
    SMS_AUTHENTICATION = "SMS authentication"
    SYSTEMS_MANAGER_SENTRY = "Systems Manager Sentry"
    FACEBOOK_WI_FI = "Facebook Wi-Fi"
    GOOGLE_O_AUTH = "Google OAuth"
    SPONSORED_GUEST = "Sponsored guest"
    CISCO_ISE = "Cisco ISE"
    GOOGLE_APPS_DOMAIN = "Google Apps domain"

class UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum(str, Enum):
    WPA1_ONLY = "WPA1 only"
    WPA1_AND_WPA2 = "WPA1 and WPA2"
    WPA2_ONLY = "WPA2 only"
    WPA3_TRANSITION_MODE = "WPA3 Transition Mode"
    WPA3_ONLY = "WPA3 only"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBody:
    active_directory: Optional[UpdateNetworkWirelessSsidRequestBodyActiveDirectory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectory') }})
    adult_content_filtering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adultContentFilteringEnabled') }})
    ap_tags_and_vlan_ids: Optional[List[UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apTagsAndVlanIds') }})
    auth_mode: Optional[UpdateNetworkWirelessSsidRequestBodyAuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMode') }})
    availability_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityTags') }})
    available_on_all_aps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableOnAllAps') }})
    band_selection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandSelection') }})
    concentrator_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concentratorNetworkId') }})
    default_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVlanId') }})
    dns_rewrite: Optional[UpdateNetworkWirelessSsidRequestBodyDNSRewrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsRewrite') }})
    dot11r: Optional[UpdateNetworkWirelessSsidRequestBodyDot11r] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dot11r') }})
    dot11w: Optional[UpdateNetworkWirelessSsidRequestBodyDot11w] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dot11w') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    encryption_mode: Optional[UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionMode') }})
    enterprise_admin_access: Optional[UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseAdminAccess') }})
    ip_assignment_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAssignmentMode') }})
    lan_isolation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIsolationEnabled') }})
    ldap: Optional[UpdateNetworkWirelessSsidRequestBodyLdap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap') }})
    local_radius: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadius] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localRadius') }})
    mandatory_dhcp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryDhcpEnabled') }})
    min_bitrate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oauth: Optional[UpdateNetworkWirelessSsidRequestBodyOauth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth') }})
    per_client_bandwidth_limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimitDown') }})
    per_client_bandwidth_limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimitUp') }})
    per_ssid_bandwidth_limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perSsidBandwidthLimitDown') }})
    per_ssid_bandwidth_limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perSsidBandwidthLimitUp') }})
    psk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psk') }})
    radius_accounting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingEnabled') }})
    radius_accounting_interim_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingInterimInterval') }})
    radius_accounting_servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingServers') }})
    radius_attribute_for_group_policies: Optional[UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAttributeForGroupPolicies') }})
    radius_authentication_nas_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAuthenticationNasId') }})
    radius_called_station_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusCalledStationId') }})
    radius_coa_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusCoaEnabled') }})
    radius_failover_policy: Optional[UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusFailoverPolicy') }})
    radius_fallback_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusFallbackEnabled') }})
    radius_guest_vlan_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusGuestVlanEnabled') }})
    radius_guest_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusGuestVlanId') }})
    radius_load_balancing_policy: Optional[UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusLoadBalancingPolicy') }})
    radius_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusOverride') }})
    radius_proxy_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusProxyEnabled') }})
    radius_server_attempts_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusServerAttemptsLimit') }})
    radius_server_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusServerTimeout') }})
    radius_servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyRadiusServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusServers') }})
    radius_testing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusTestingEnabled') }})
    splash_guest_sponsor_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashGuestSponsorDomains') }})
    splash_page: Optional[UpdateNetworkWirelessSsidRequestBodySplashPageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashPage') }})
    use_vlan_tagging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useVlanTagging') }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    walled_garden_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('walledGardenEnabled') }})
    walled_garden_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('walledGardenRanges') }})
    wpa_encryption_mode: Optional[UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpaEncryptionMode') }})
    

@dataclass
class UpdateNetworkWirelessSsidRequest:
    path_params: UpdateNetworkWirelessSsidPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
