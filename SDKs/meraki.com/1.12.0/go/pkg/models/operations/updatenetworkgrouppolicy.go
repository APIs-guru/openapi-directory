package operations

type UpdateNetworkGroupPolicyPathParams struct {
	GroupPolicyID string `pathParam:"style=simple,explode=false,name=groupPolicyId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumIgnore         UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "ignore"
	UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumCustom         UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "custom"
)

type UpdateNetworkGroupPolicyRequestBodyBandwidth struct {
	BandwidthLimits *UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits `json:"bandwidthLimits"`
	Settings        *UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum    `json:"settings"`
}

type UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAllServices UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "All Services"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAirPlay     UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "AirPlay"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAfp         UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "AFP"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumBitTorrent  UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "BitTorrent"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumFtp         UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "FTP"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumIChat       UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "iChat"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumITunes      UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "iTunes"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumPrinters    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Printers"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSamba       UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Samba"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Scanners"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSSH         UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "SSH"
)

type UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules struct {
	Description *string                                                                 `json:"description"`
	Services    []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum `json:"services"`
	VlanID      string                                                                  `json:"vlanId"`
}

type UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumIgnore         UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "ignore"
	UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumCustom         UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "custom"
)

type UpdateNetworkGroupPolicyRequestBodyBonjourForwarding struct {
	Rules    []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules       `json:"rules"`
	Settings *UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum `json:"settings"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumAppend         UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "append"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride       UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "override"
)

type UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns"`
	Settings *UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum `json:"settings"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend         UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "append"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride       UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "override"
)

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories struct {
	Categories []string                                                                             `json:"categories"`
	Settings   *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum `json:"settings"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumAppend         UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "append"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumOverride       UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "override"
)

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns"`
	Settings *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum `json:"settings"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFiltering struct {
	AllowedURLPatterns   *UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns   `json:"allowedUrlPatterns"`
	BlockedURLCategories *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories `json:"blockedUrlCategories"`
	BlockedURLPatterns   *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns   `json:"blockedUrlPatterns"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules struct {
	Comment  *string `json:"comment"`
	DestCidr string  `json:"destCidr"`
	DestPort *string `json:"destPort"`
	Policy   string  `json:"policy"`
	Protocol string  `json:"protocol"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum = "deny"
)

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication         UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "application"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplicationCategory UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "applicationCategory"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumHost                UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "host"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort                UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "port"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumIPRange             UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "ipRange"
)

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules struct {
	Policy *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum `json:"policy"`
	Type   *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum   `json:"type"`
	Value  *string                                                                                `json:"value"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumIgnore         UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "ignore"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumCustom         UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "custom"
)

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication         UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "application"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "applicationCategory"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost                UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "host"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort                UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "port"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange             UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "ipRange"
	UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumLocalNet            UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "localNet"
)

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions struct {
	Type  UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum `json:"type"`
	Value string                                                                                             `json:"value"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits struct {
	BandwidthLimits *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits"`
	Settings        *string                                                                                                                 `json:"settings"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules struct {
	Definitions              []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                                                   `json:"dscpTagValue"`
	PcpTagValue              *int64                                                                                                   `json:"pcpTagValue"`
	PerClientBandwidthLimits *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits"`
	Priority                 *string                                                                                                  `json:"priority"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping struct {
	L3FirewallRules     []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules     `json:"l3FirewallRules"`
	L7FirewallRules     []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules     `json:"l7FirewallRules"`
	Settings            *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum         `json:"settings"`
	TrafficShapingRules []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules `json:"trafficShapingRules"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingFriday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingMonday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingSaturday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingSunday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingThursday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingTuesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingWednesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type UpdateNetworkGroupPolicyRequestBodyScheduling struct {
	Enabled   *bool                                                   `json:"enabled"`
	Friday    *UpdateNetworkGroupPolicyRequestBodySchedulingFriday    `json:"friday"`
	Monday    *UpdateNetworkGroupPolicyRequestBodySchedulingMonday    `json:"monday"`
	Saturday  *UpdateNetworkGroupPolicyRequestBodySchedulingSaturday  `json:"saturday"`
	Sunday    *UpdateNetworkGroupPolicyRequestBodySchedulingSunday    `json:"sunday"`
	Thursday  *UpdateNetworkGroupPolicyRequestBodySchedulingThursday  `json:"thursday"`
	Tuesday   *UpdateNetworkGroupPolicyRequestBodySchedulingTuesday   `json:"tuesday"`
	Wednesday *UpdateNetworkGroupPolicyRequestBodySchedulingWednesday `json:"wednesday"`
}

type UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass         UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = "bypass"
)

type UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumIgnore         UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "ignore"
	UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumCustom         UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "custom"
)

type UpdateNetworkGroupPolicyRequestBodyVlanTagging struct {
	Settings *UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum `json:"settings"`
	VlanID   *string                                                     `json:"vlanId"`
}

type UpdateNetworkGroupPolicyRequestBody struct {
	Bandwidth                 *UpdateNetworkGroupPolicyRequestBodyBandwidth                 `json:"bandwidth"`
	BonjourForwarding         *UpdateNetworkGroupPolicyRequestBodyBonjourForwarding         `json:"bonjourForwarding"`
	ContentFiltering          *UpdateNetworkGroupPolicyRequestBodyContentFiltering          `json:"contentFiltering"`
	FirewallAndTrafficShaping *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping `json:"firewallAndTrafficShaping"`
	Name                      *string                                                       `json:"name"`
	Scheduling                *UpdateNetworkGroupPolicyRequestBodyScheduling                `json:"scheduling"`
	SplashAuthSettings        *UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum    `json:"splashAuthSettings"`
	VlanTagging               *UpdateNetworkGroupPolicyRequestBodyVlanTagging               `json:"vlanTagging"`
}

type UpdateNetworkGroupPolicyRequest struct {
	PathParams UpdateNetworkGroupPolicyPathParams
	Request    *UpdateNetworkGroupPolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkGroupPolicyResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	UpdateNetworkGroupPolicy200ApplicationJSONObject map[string]interface{}
}
