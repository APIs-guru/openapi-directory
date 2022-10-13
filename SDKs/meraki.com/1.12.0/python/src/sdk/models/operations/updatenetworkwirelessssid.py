from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials:
    logon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logonName' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyActiveDirectory:
    credentials: Optional[UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds:
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    
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
    dns_custom_nameservers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsCustomNameservers' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyDot11r:
    adaptive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adaptive' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyDot11w:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    
class UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum(str, Enum):
    WEP = "wep"
    WPA = "wpa"

class UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum(str, Enum):
    ACCESS_DISABLED = "access disabled"
    ACCESS_ENABLED = "access enabled"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdapCredentials:
    distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distinguishedName' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdapServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLdap:
    base_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseDistinguishedName' }})
    credentials: Optional[UpdateNetworkWirelessSsidRequestBodyLdapCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    server_ca_certificate: Optional[UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCaCertificate' }})
    servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyLdapServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication:
    client_root_ca_certificate: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRootCaCertificate' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ocsp_responder_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ocspResponderUrl' }})
    use_ldap: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLdap' }})
    use_ocsp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useOcsp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyLocalRadius:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheTimeout' }})
    certificate_authentication: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAuthentication' }})
    password_authentication: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordAuthentication' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyOauth:
    allowed_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedDomains' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    radsec_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radsecEnabled' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
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
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    radsec_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radsecEnabled' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
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
    active_directory: Optional[UpdateNetworkWirelessSsidRequestBodyActiveDirectory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDirectory' }})
    adult_content_filtering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adultContentFilteringEnabled' }})
    ap_tags_and_vlan_ids: Optional[List[UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apTagsAndVlanIds' }})
    auth_mode: Optional[UpdateNetworkWirelessSsidRequestBodyAuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMode' }})
    availability_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityTags' }})
    available_on_all_aps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableOnAllAps' }})
    band_selection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandSelection' }})
    concentrator_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concentratorNetworkId' }})
    default_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVlanId' }})
    dns_rewrite: Optional[UpdateNetworkWirelessSsidRequestBodyDNSRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsRewrite' }})
    dot11r: Optional[UpdateNetworkWirelessSsidRequestBodyDot11r] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dot11r' }})
    dot11w: Optional[UpdateNetworkWirelessSsidRequestBodyDot11w] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dot11w' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    encryption_mode: Optional[UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionMode' }})
    enterprise_admin_access: Optional[UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterpriseAdminAccess' }})
    ip_assignment_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAssignmentMode' }})
    lan_isolation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lanIsolationEnabled' }})
    ldap: Optional[UpdateNetworkWirelessSsidRequestBodyLdap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap' }})
    local_radius: Optional[UpdateNetworkWirelessSsidRequestBodyLocalRadius] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localRadius' }})
    mandatory_dhcp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandatoryDhcpEnabled' }})
    min_bitrate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBitrate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oauth: Optional[UpdateNetworkWirelessSsidRequestBodyOauth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth' }})
    per_client_bandwidth_limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perClientBandwidthLimitDown' }})
    per_client_bandwidth_limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perClientBandwidthLimitUp' }})
    per_ssid_bandwidth_limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perSsidBandwidthLimitDown' }})
    per_ssid_bandwidth_limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perSsidBandwidthLimitUp' }})
    psk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psk' }})
    radius_accounting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAccountingEnabled' }})
    radius_accounting_interim_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAccountingInterimInterval' }})
    radius_accounting_servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAccountingServers' }})
    radius_attribute_for_group_policies: Optional[UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAttributeForGroupPolicies' }})
    radius_authentication_nas_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAuthenticationNasId' }})
    radius_called_station_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusCalledStationId' }})
    radius_coa_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusCoaEnabled' }})
    radius_failover_policy: Optional[UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusFailoverPolicy' }})
    radius_fallback_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusFallbackEnabled' }})
    radius_guest_vlan_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusGuestVlanEnabled' }})
    radius_guest_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusGuestVlanId' }})
    radius_load_balancing_policy: Optional[UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusLoadBalancingPolicy' }})
    radius_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusOverride' }})
    radius_proxy_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusProxyEnabled' }})
    radius_server_attempts_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusServerAttemptsLimit' }})
    radius_server_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusServerTimeout' }})
    radius_servers: Optional[List[UpdateNetworkWirelessSsidRequestBodyRadiusServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusServers' }})
    radius_testing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusTestingEnabled' }})
    splash_guest_sponsor_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashGuestSponsorDomains' }})
    splash_page: Optional[UpdateNetworkWirelessSsidRequestBodySplashPageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashPage' }})
    use_vlan_tagging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useVlanTagging' }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visible' }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    walled_garden_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'walledGardenEnabled' }})
    walled_garden_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'walledGardenRanges' }})
    wpa_encryption_mode: Optional[UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpaEncryptionMode' }})
    

@dataclass
class UpdateNetworkWirelessSsidRequest:
    path_params: UpdateNetworkWirelessSsidPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
