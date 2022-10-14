package operations

type UpdateNetworkGroupPolicyPathParams struct {
	GroupPolicyID string `pathParam:"style=simple,explode=false,name=groupPolicyId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumIgnore         UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "ignore"
	UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumCustom         UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "custom"
)

type UpdateNetworkGroupPolicyRequestBodyBandwidth struct {
	BandwidthLimits *UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits `json:"bandwidthLimits,omitempty"`
	Settings        *UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum    `json:"settings,omitempty"`
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
	Description *string                                                                 `json:"description,omitempty"`
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
	Rules    []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules       `json:"rules,omitempty"`
	Settings *UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum `json:"settings,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumAppend         UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "append"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride       UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "override"
)

type UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns,omitempty"`
	Settings *UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum `json:"settings,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend         UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "append"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride       UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "override"
)

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories struct {
	Categories []string                                                                             `json:"categories,omitempty"`
	Settings   *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum `json:"settings,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum string

const (
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "network default"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumAppend         UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "append"
	UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumOverride       UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "override"
)

type UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns,omitempty"`
	Settings *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum `json:"settings,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyContentFiltering struct {
	AllowedURLPatterns   *UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns   `json:"allowedUrlPatterns,omitempty"`
	BlockedURLCategories *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories `json:"blockedUrlCategories,omitempty"`
	BlockedURLPatterns   *UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns   `json:"blockedUrlPatterns,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules struct {
	Comment  *string `json:"comment,omitempty"`
	DestCidr string  `json:"destCidr"`
	DestPort *string `json:"destPort,omitempty"`
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
	Policy *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum `json:"policy,omitempty"`
	Type   *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum   `json:"type,omitempty"`
	Value  *string                                                                                `json:"value,omitempty"`
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
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits struct {
	BandwidthLimits *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits,omitempty"`
	Settings        *string                                                                                                                 `json:"settings,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules struct {
	Definitions              []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                                                   `json:"dscpTagValue,omitempty"`
	PcpTagValue              *int64                                                                                                   `json:"pcpTagValue,omitempty"`
	PerClientBandwidthLimits *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits,omitempty"`
	Priority                 *string                                                                                                  `json:"priority,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping struct {
	L3FirewallRules     []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules     `json:"l3FirewallRules,omitempty"`
	L7FirewallRules     []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules     `json:"l7FirewallRules,omitempty"`
	Settings            *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum         `json:"settings,omitempty"`
	TrafficShapingRules []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules `json:"trafficShapingRules,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingFriday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingMonday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingSaturday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingSunday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingThursday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingTuesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodySchedulingWednesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBodyScheduling struct {
	Enabled   *bool                                                   `json:"enabled,omitempty"`
	Friday    *UpdateNetworkGroupPolicyRequestBodySchedulingFriday    `json:"friday,omitempty"`
	Monday    *UpdateNetworkGroupPolicyRequestBodySchedulingMonday    `json:"monday,omitempty"`
	Saturday  *UpdateNetworkGroupPolicyRequestBodySchedulingSaturday  `json:"saturday,omitempty"`
	Sunday    *UpdateNetworkGroupPolicyRequestBodySchedulingSunday    `json:"sunday,omitempty"`
	Thursday  *UpdateNetworkGroupPolicyRequestBodySchedulingThursday  `json:"thursday,omitempty"`
	Tuesday   *UpdateNetworkGroupPolicyRequestBodySchedulingTuesday   `json:"tuesday,omitempty"`
	Wednesday *UpdateNetworkGroupPolicyRequestBodySchedulingWednesday `json:"wednesday,omitempty"`
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
	Settings *UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum `json:"settings,omitempty"`
	VlanID   *string                                                     `json:"vlanId,omitempty"`
}

type UpdateNetworkGroupPolicyRequestBody struct {
	Bandwidth                 *UpdateNetworkGroupPolicyRequestBodyBandwidth                 `json:"bandwidth,omitempty"`
	BonjourForwarding         *UpdateNetworkGroupPolicyRequestBodyBonjourForwarding         `json:"bonjourForwarding,omitempty"`
	ContentFiltering          *UpdateNetworkGroupPolicyRequestBodyContentFiltering          `json:"contentFiltering,omitempty"`
	FirewallAndTrafficShaping *UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping `json:"firewallAndTrafficShaping,omitempty"`
	Name                      *string                                                       `json:"name,omitempty"`
	Scheduling                *UpdateNetworkGroupPolicyRequestBodyScheduling                `json:"scheduling,omitempty"`
	SplashAuthSettings        *UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum    `json:"splashAuthSettings,omitempty"`
	VlanTagging               *UpdateNetworkGroupPolicyRequestBodyVlanTagging               `json:"vlanTagging,omitempty"`
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
