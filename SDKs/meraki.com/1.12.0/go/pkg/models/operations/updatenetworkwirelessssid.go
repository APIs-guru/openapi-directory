package operations

type UpdateNetworkWirelessSsidPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

// UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials
// (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
type UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials struct {
	LogonName *string `json:"logonName,omitempty"`
	Password  *string `json:"password,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers struct {
	Host string `json:"host"`
	Port *int64 `json:"port,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyActiveDirectory
// The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
type UpdateNetworkWirelessSsidRequestBodyActiveDirectory struct {
	Credentials *UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials `json:"credentials,omitempty"`
	Servers     []UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers    `json:"servers,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds struct {
	Tags   []string `json:"tags,omitempty"`
	VlanID *int64   `json:"vlanId,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodyAuthModeEnum string

const (
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumOpen                                  UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "open"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumPsk                                   UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "psk"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumOpenWithRadius                        UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "open-with-radius"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexMeraki      UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "8021x-meraki"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexRadius      UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "8021x-radius"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexGoogle      UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "8021x-google"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexLocalradius UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "8021x-localradius"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumIpskWithRadius                        UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "ipsk-with-radius"
	UpdateNetworkWirelessSsidRequestBodyAuthModeEnumIpskWithoutRadius                     UpdateNetworkWirelessSsidRequestBodyAuthModeEnum = "ipsk-without-radius"
)

// UpdateNetworkWirelessSsidRequestBodyDNSRewrite
// DNS servers rewrite settings
type UpdateNetworkWirelessSsidRequestBodyDNSRewrite struct {
	DNSCustomNameservers []string `json:"dnsCustomNameservers,omitempty"`
	Enabled              *bool    `json:"enabled,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyDot11r
// The current setting for 802.11r
type UpdateNetworkWirelessSsidRequestBodyDot11r struct {
	Adaptive *bool `json:"adaptive,omitempty"`
	Enabled  *bool `json:"enabled,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyDot11w
// The current setting for Protected Management Frames (802.11w).
type UpdateNetworkWirelessSsidRequestBodyDot11w struct {
	Enabled  *bool `json:"enabled,omitempty"`
	Required *bool `json:"required,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum string

const (
	UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnumWep UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum = "wep"
	UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnumWpa UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum = "wpa"
)

type UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum string

const (
	UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnumAccessDisabled UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum = "access disabled"
	UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnumAccessEnabled  UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum = "access enabled"
)

// UpdateNetworkWirelessSsidRequestBodyLdapCredentials
// (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
type UpdateNetworkWirelessSsidRequestBodyLdapCredentials struct {
	DistinguishedName *string `json:"distinguishedName,omitempty"`
	Password          *string `json:"password,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate
// The CA certificate used to sign the LDAP server's key.
type UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate struct {
	Contents *string `json:"contents,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodyLdapServers struct {
	Host string `json:"host"`
	Port int64  `json:"port"`
}

// UpdateNetworkWirelessSsidRequestBodyLdap
// The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
type UpdateNetworkWirelessSsidRequestBodyLdap struct {
	BaseDistinguishedName *string                                                      `json:"baseDistinguishedName,omitempty"`
	Credentials           *UpdateNetworkWirelessSsidRequestBodyLdapCredentials         `json:"credentials,omitempty"`
	ServerCaCertificate   *UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate `json:"serverCaCertificate,omitempty"`
	Servers               []UpdateNetworkWirelessSsidRequestBodyLdapServers            `json:"servers,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate
// The Client CA Certificate used to sign the client certificate.
type UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate struct {
	Contents *string `json:"contents,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication
// The current setting for certificate verification.
type UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication struct {
	ClientRootCaCertificate *UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate `json:"clientRootCaCertificate,omitempty"`
	Enabled                 *bool                                                                                            `json:"enabled,omitempty"`
	OcspResponderURL        *string                                                                                          `json:"ocspResponderUrl,omitempty"`
	UseLdap                 *bool                                                                                            `json:"useLdap,omitempty"`
	UseOcsp                 *bool                                                                                            `json:"useOcsp,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication
// The current setting for password-based authentication.
type UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication struct {
	Enabled *bool `json:"enabled,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyLocalRadius
// The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
type UpdateNetworkWirelessSsidRequestBodyLocalRadius struct {
	CacheTimeout              *int64                                                                    `json:"cacheTimeout,omitempty"`
	CertificateAuthentication *UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication `json:"certificateAuthentication,omitempty"`
	PasswordAuthentication    *UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication    `json:"passwordAuthentication,omitempty"`
}

// UpdateNetworkWirelessSsidRequestBodyOauth
// The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
type UpdateNetworkWirelessSsidRequestBodyOauth struct {
	AllowedDomains []string `json:"allowedDomains,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers struct {
	Host          string  `json:"host"`
	Port          *int64  `json:"port,omitempty"`
	RadsecEnabled *bool   `json:"radsecEnabled,omitempty"`
	Secret        *string `json:"secret,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum string

const (
	UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnumFilterID         UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum = "Filter-Id"
	UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnumReplyMessage     UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum = "Reply-Message"
	UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnumAirespaceACLName UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum = "Airespace-ACL-Name"
	UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnumArubaUserRole    UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum = "Aruba-User-Role"
)

type UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum string

const (
	UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnumDenyAccess  UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum = "Deny access"
	UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnumAllowAccess UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum = "Allow access"
)

type UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum string

const (
	UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnumStrictPriorityOrder UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum = "Strict priority order"
	UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnumRoundRobin          UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum = "Round robin"
)

type UpdateNetworkWirelessSsidRequestBodyRadiusServers struct {
	Host          string  `json:"host"`
	Port          *int64  `json:"port,omitempty"`
	RadsecEnabled *bool   `json:"radsecEnabled,omitempty"`
	Secret        *string `json:"secret,omitempty"`
}

type UpdateNetworkWirelessSsidRequestBodySplashPageEnum string

const (
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumNone                                 UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "None"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumClickThroughSplashPage               UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Click-through splash page"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumBilling                              UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Billing"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumPasswordProtectedWithMerakiRadius    UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Password-protected with Meraki RADIUS"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumPasswordProtectedWithCustomRadius    UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Password-protected with custom RADIUS"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumPasswordProtectedWithActiveDirectory UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Password-protected with Active Directory"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumPasswordProtectedWithLdap            UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Password-protected with LDAP"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumSmsAuthentication                    UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "SMS authentication"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumSystemsManagerSentry                 UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Systems Manager Sentry"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumFacebookWiFi                         UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Facebook Wi-Fi"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumGoogleOAuth                          UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Google OAuth"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumSponsoredGuest                       UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Sponsored guest"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumCiscoIse                             UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Cisco ISE"
	UpdateNetworkWirelessSsidRequestBodySplashPageEnumGoogleAppsDomain                     UpdateNetworkWirelessSsidRequestBodySplashPageEnum = "Google Apps domain"
)

type UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum string

const (
	UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa1Only           UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum = "WPA1 only"
	UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa1AndWpa2        UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum = "WPA1 and WPA2"
	UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa2Only           UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum = "WPA2 only"
	UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa3TransitionMode UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum = "WPA3 Transition Mode"
	UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa3Only           UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum = "WPA3 only"
)

type UpdateNetworkWirelessSsidRequestBody struct {
	ActiveDirectory                 *UpdateNetworkWirelessSsidRequestBodyActiveDirectory                     `json:"activeDirectory,omitempty"`
	AdultContentFilteringEnabled    *bool                                                                    `json:"adultContentFilteringEnabled,omitempty"`
	ApTagsAndVlanIds                []UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds                   `json:"apTagsAndVlanIds,omitempty"`
	AuthMode                        *UpdateNetworkWirelessSsidRequestBodyAuthModeEnum                        `json:"authMode,omitempty"`
	AvailabilityTags                []string                                                                 `json:"availabilityTags,omitempty"`
	AvailableOnAllAps               *bool                                                                    `json:"availableOnAllAps,omitempty"`
	BandSelection                   *string                                                                  `json:"bandSelection,omitempty"`
	ConcentratorNetworkID           *string                                                                  `json:"concentratorNetworkId,omitempty"`
	DefaultVlanID                   *int64                                                                   `json:"defaultVlanId,omitempty"`
	DNSRewrite                      *UpdateNetworkWirelessSsidRequestBodyDNSRewrite                          `json:"dnsRewrite,omitempty"`
	Dot11r                          *UpdateNetworkWirelessSsidRequestBodyDot11r                              `json:"dot11r,omitempty"`
	Dot11w                          *UpdateNetworkWirelessSsidRequestBodyDot11w                              `json:"dot11w,omitempty"`
	Enabled                         *bool                                                                    `json:"enabled,omitempty"`
	EncryptionMode                  *UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum                  `json:"encryptionMode,omitempty"`
	EnterpriseAdminAccess           *UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum           `json:"enterpriseAdminAccess,omitempty"`
	IPAssignmentMode                *string                                                                  `json:"ipAssignmentMode,omitempty"`
	LanIsolationEnabled             *bool                                                                    `json:"lanIsolationEnabled,omitempty"`
	Ldap                            *UpdateNetworkWirelessSsidRequestBodyLdap                                `json:"ldap,omitempty"`
	LocalRadius                     *UpdateNetworkWirelessSsidRequestBodyLocalRadius                         `json:"localRadius,omitempty"`
	MandatoryDhcpEnabled            *bool                                                                    `json:"mandatoryDhcpEnabled,omitempty"`
	MinBitrate                      *float32                                                                 `json:"minBitrate,omitempty"`
	Name                            *string                                                                  `json:"name,omitempty"`
	Oauth                           *UpdateNetworkWirelessSsidRequestBodyOauth                               `json:"oauth,omitempty"`
	PerClientBandwidthLimitDown     *int64                                                                   `json:"perClientBandwidthLimitDown,omitempty"`
	PerClientBandwidthLimitUp       *int64                                                                   `json:"perClientBandwidthLimitUp,omitempty"`
	PerSsidBandwidthLimitDown       *int64                                                                   `json:"perSsidBandwidthLimitDown,omitempty"`
	PerSsidBandwidthLimitUp         *int64                                                                   `json:"perSsidBandwidthLimitUp,omitempty"`
	Psk                             *string                                                                  `json:"psk,omitempty"`
	RadiusAccountingEnabled         *bool                                                                    `json:"radiusAccountingEnabled,omitempty"`
	RadiusAccountingInterimInterval *int64                                                                   `json:"radiusAccountingInterimInterval,omitempty"`
	RadiusAccountingServers         []UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers            `json:"radiusAccountingServers,omitempty"`
	RadiusAttributeForGroupPolicies *UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum `json:"radiusAttributeForGroupPolicies,omitempty"`
	RadiusAuthenticationNasID       *string                                                                  `json:"radiusAuthenticationNasId,omitempty"`
	RadiusCalledStationID           *string                                                                  `json:"radiusCalledStationId,omitempty"`
	RadiusCoaEnabled                *bool                                                                    `json:"radiusCoaEnabled,omitempty"`
	RadiusFailoverPolicy            *UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum            `json:"radiusFailoverPolicy,omitempty"`
	RadiusFallbackEnabled           *bool                                                                    `json:"radiusFallbackEnabled,omitempty"`
	RadiusGuestVlanEnabled          *bool                                                                    `json:"radiusGuestVlanEnabled,omitempty"`
	RadiusGuestVlanID               *int64                                                                   `json:"radiusGuestVlanId,omitempty"`
	RadiusLoadBalancingPolicy       *UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum       `json:"radiusLoadBalancingPolicy,omitempty"`
	RadiusOverride                  *bool                                                                    `json:"radiusOverride,omitempty"`
	RadiusProxyEnabled              *bool                                                                    `json:"radiusProxyEnabled,omitempty"`
	RadiusServerAttemptsLimit       *int64                                                                   `json:"radiusServerAttemptsLimit,omitempty"`
	RadiusServerTimeout             *int64                                                                   `json:"radiusServerTimeout,omitempty"`
	RadiusServers                   []UpdateNetworkWirelessSsidRequestBodyRadiusServers                      `json:"radiusServers,omitempty"`
	RadiusTestingEnabled            *bool                                                                    `json:"radiusTestingEnabled,omitempty"`
	SplashGuestSponsorDomains       []string                                                                 `json:"splashGuestSponsorDomains,omitempty"`
	SplashPage                      *UpdateNetworkWirelessSsidRequestBodySplashPageEnum                      `json:"splashPage,omitempty"`
	UseVlanTagging                  *bool                                                                    `json:"useVlanTagging,omitempty"`
	Visible                         *bool                                                                    `json:"visible,omitempty"`
	VlanID                          *int64                                                                   `json:"vlanId,omitempty"`
	WalledGardenEnabled             *bool                                                                    `json:"walledGardenEnabled,omitempty"`
	WalledGardenRanges              []string                                                                 `json:"walledGardenRanges,omitempty"`
	WpaEncryptionMode               *UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum               `json:"wpaEncryptionMode,omitempty"`
}

type UpdateNetworkWirelessSsidRequest struct {
	PathParams UpdateNetworkWirelessSsidPathParams
	Request    *UpdateNetworkWirelessSsidRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSsidResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	UpdateNetworkWirelessSsid200ApplicationJSONObject map[string]interface{}
}
