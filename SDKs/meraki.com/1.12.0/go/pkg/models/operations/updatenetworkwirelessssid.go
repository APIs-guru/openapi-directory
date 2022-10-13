package operations

type UpdateNetworkWirelessSsidPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials struct {
	LogonName *string `json:"logonName"`
	Password  *string `json:"password"`
}

type UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers struct {
	Host string `json:"host"`
	Port *int64 `json:"port"`
}

type UpdateNetworkWirelessSsidRequestBodyActiveDirectory struct {
	Credentials *UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials `json:"credentials"`
	Servers     []UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers    `json:"servers"`
}

type UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds struct {
	Tags   []string `json:"tags"`
	VlanID *int64   `json:"vlanId"`
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

type UpdateNetworkWirelessSsidRequestBodyDNSRewrite struct {
	DNSCustomNameservers []string `json:"dnsCustomNameservers"`
	Enabled              *bool    `json:"enabled"`
}

type UpdateNetworkWirelessSsidRequestBodyDot11r struct {
	Adaptive *bool `json:"adaptive"`
	Enabled  *bool `json:"enabled"`
}

type UpdateNetworkWirelessSsidRequestBodyDot11w struct {
	Enabled  *bool `json:"enabled"`
	Required *bool `json:"required"`
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

type UpdateNetworkWirelessSsidRequestBodyLdapCredentials struct {
	DistinguishedName *string `json:"distinguishedName"`
	Password          *string `json:"password"`
}

type UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate struct {
	Contents *string `json:"contents"`
}

type UpdateNetworkWirelessSsidRequestBodyLdapServers struct {
	Host string `json:"host"`
	Port int64  `json:"port"`
}

type UpdateNetworkWirelessSsidRequestBodyLdap struct {
	BaseDistinguishedName *string                                                      `json:"baseDistinguishedName"`
	Credentials           *UpdateNetworkWirelessSsidRequestBodyLdapCredentials         `json:"credentials"`
	ServerCaCertificate   *UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate `json:"serverCaCertificate"`
	Servers               []UpdateNetworkWirelessSsidRequestBodyLdapServers            `json:"servers"`
}

type UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate struct {
	Contents *string `json:"contents"`
}

type UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication struct {
	ClientRootCaCertificate *UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate `json:"clientRootCaCertificate"`
	Enabled                 *bool                                                                                            `json:"enabled"`
	OcspResponderURL        *string                                                                                          `json:"ocspResponderUrl"`
	UseLdap                 *bool                                                                                            `json:"useLdap"`
	UseOcsp                 *bool                                                                                            `json:"useOcsp"`
}

type UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication struct {
	Enabled *bool `json:"enabled"`
}

type UpdateNetworkWirelessSsidRequestBodyLocalRadius struct {
	CacheTimeout              *int64                                                                    `json:"cacheTimeout"`
	CertificateAuthentication *UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication `json:"certificateAuthentication"`
	PasswordAuthentication    *UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication    `json:"passwordAuthentication"`
}

type UpdateNetworkWirelessSsidRequestBodyOauth struct {
	AllowedDomains []string `json:"allowedDomains"`
}

type UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers struct {
	Host          string  `json:"host"`
	Port          *int64  `json:"port"`
	RadsecEnabled *bool   `json:"radsecEnabled"`
	Secret        *string `json:"secret"`
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
	Port          *int64  `json:"port"`
	RadsecEnabled *bool   `json:"radsecEnabled"`
	Secret        *string `json:"secret"`
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
	ActiveDirectory                 *UpdateNetworkWirelessSsidRequestBodyActiveDirectory                     `json:"activeDirectory"`
	AdultContentFilteringEnabled    *bool                                                                    `json:"adultContentFilteringEnabled"`
	ApTagsAndVlanIds                []UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds                   `json:"apTagsAndVlanIds"`
	AuthMode                        *UpdateNetworkWirelessSsidRequestBodyAuthModeEnum                        `json:"authMode"`
	AvailabilityTags                []string                                                                 `json:"availabilityTags"`
	AvailableOnAllAps               *bool                                                                    `json:"availableOnAllAps"`
	BandSelection                   *string                                                                  `json:"bandSelection"`
	ConcentratorNetworkID           *string                                                                  `json:"concentratorNetworkId"`
	DefaultVlanID                   *int64                                                                   `json:"defaultVlanId"`
	DNSRewrite                      *UpdateNetworkWirelessSsidRequestBodyDNSRewrite                          `json:"dnsRewrite"`
	Dot11r                          *UpdateNetworkWirelessSsidRequestBodyDot11r                              `json:"dot11r"`
	Dot11w                          *UpdateNetworkWirelessSsidRequestBodyDot11w                              `json:"dot11w"`
	Enabled                         *bool                                                                    `json:"enabled"`
	EncryptionMode                  *UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum                  `json:"encryptionMode"`
	EnterpriseAdminAccess           *UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum           `json:"enterpriseAdminAccess"`
	IPAssignmentMode                *string                                                                  `json:"ipAssignmentMode"`
	LanIsolationEnabled             *bool                                                                    `json:"lanIsolationEnabled"`
	Ldap                            *UpdateNetworkWirelessSsidRequestBodyLdap                                `json:"ldap"`
	LocalRadius                     *UpdateNetworkWirelessSsidRequestBodyLocalRadius                         `json:"localRadius"`
	MandatoryDhcpEnabled            *bool                                                                    `json:"mandatoryDhcpEnabled"`
	MinBitrate                      *float32                                                                 `json:"minBitrate"`
	Name                            *string                                                                  `json:"name"`
	Oauth                           *UpdateNetworkWirelessSsidRequestBodyOauth                               `json:"oauth"`
	PerClientBandwidthLimitDown     *int64                                                                   `json:"perClientBandwidthLimitDown"`
	PerClientBandwidthLimitUp       *int64                                                                   `json:"perClientBandwidthLimitUp"`
	PerSsidBandwidthLimitDown       *int64                                                                   `json:"perSsidBandwidthLimitDown"`
	PerSsidBandwidthLimitUp         *int64                                                                   `json:"perSsidBandwidthLimitUp"`
	Psk                             *string                                                                  `json:"psk"`
	RadiusAccountingEnabled         *bool                                                                    `json:"radiusAccountingEnabled"`
	RadiusAccountingInterimInterval *int64                                                                   `json:"radiusAccountingInterimInterval"`
	RadiusAccountingServers         []UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers            `json:"radiusAccountingServers"`
	RadiusAttributeForGroupPolicies *UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum `json:"radiusAttributeForGroupPolicies"`
	RadiusAuthenticationNasID       *string                                                                  `json:"radiusAuthenticationNasId"`
	RadiusCalledStationID           *string                                                                  `json:"radiusCalledStationId"`
	RadiusCoaEnabled                *bool                                                                    `json:"radiusCoaEnabled"`
	RadiusFailoverPolicy            *UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum            `json:"radiusFailoverPolicy"`
	RadiusFallbackEnabled           *bool                                                                    `json:"radiusFallbackEnabled"`
	RadiusGuestVlanEnabled          *bool                                                                    `json:"radiusGuestVlanEnabled"`
	RadiusGuestVlanID               *int64                                                                   `json:"radiusGuestVlanId"`
	RadiusLoadBalancingPolicy       *UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum       `json:"radiusLoadBalancingPolicy"`
	RadiusOverride                  *bool                                                                    `json:"radiusOverride"`
	RadiusProxyEnabled              *bool                                                                    `json:"radiusProxyEnabled"`
	RadiusServerAttemptsLimit       *int64                                                                   `json:"radiusServerAttemptsLimit"`
	RadiusServerTimeout             *int64                                                                   `json:"radiusServerTimeout"`
	RadiusServers                   []UpdateNetworkWirelessSsidRequestBodyRadiusServers                      `json:"radiusServers"`
	RadiusTestingEnabled            *bool                                                                    `json:"radiusTestingEnabled"`
	SplashGuestSponsorDomains       []string                                                                 `json:"splashGuestSponsorDomains"`
	SplashPage                      *UpdateNetworkWirelessSsidRequestBodySplashPageEnum                      `json:"splashPage"`
	UseVlanTagging                  *bool                                                                    `json:"useVlanTagging"`
	Visible                         *bool                                                                    `json:"visible"`
	VlanID                          *int64                                                                   `json:"vlanId"`
	WalledGardenEnabled             *bool                                                                    `json:"walledGardenEnabled"`
	WalledGardenRanges              []string                                                                 `json:"walledGardenRanges"`
	WpaEncryptionMode               *UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum               `json:"wpaEncryptionMode"`
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
