package operations

type CreateNetworkGroupPolicyPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumIgnore         CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "ignore"
	CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumCustom         CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "custom"
)

type CreateNetworkGroupPolicyRequestBodyBandwidth struct {
	BandwidthLimits *CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits `json:"bandwidthLimits"`
	Settings        *CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum    `json:"settings"`
}

type CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum string

const (
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAllServices CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "All Services"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAirPlay     CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "AirPlay"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAfp         CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "AFP"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumBitTorrent  CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "BitTorrent"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumFtp         CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "FTP"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumIChat       CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "iChat"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumITunes      CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "iTunes"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumPrinters    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Printers"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSamba       CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Samba"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Scanners"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSSH         CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "SSH"
)

type CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules struct {
	Description *string                                                                 `json:"description"`
	Services    []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum `json:"services"`
	VlanID      string                                                                  `json:"vlanId"`
}

type CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumIgnore         CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "ignore"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumCustom         CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "custom"
)

type CreateNetworkGroupPolicyRequestBodyBonjourForwarding struct {
	Rules    []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules       `json:"rules"`
	Settings *CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum `json:"settings"`
}

type CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumAppend         CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "append"
	CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride       CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "override"
)

type CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns"`
	Settings *CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum `json:"settings"`
}

type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend         CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "append"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride       CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "override"
)

type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories struct {
	Categories []string                                                                             `json:"categories"`
	Settings   *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum `json:"settings"`
}

type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumAppend         CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "append"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumOverride       CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "override"
)

type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns"`
	Settings *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum `json:"settings"`
}

type CreateNetworkGroupPolicyRequestBodyContentFiltering struct {
	AllowedURLPatterns   *CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns   `json:"allowedUrlPatterns"`
	BlockedURLCategories *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories `json:"blockedUrlCategories"`
	BlockedURLPatterns   *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns   `json:"blockedUrlPatterns"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules struct {
	Comment  *string `json:"comment"`
	DestCidr string  `json:"destCidr"`
	DestPort *string `json:"destPort"`
	Policy   string  `json:"policy"`
	Protocol string  `json:"protocol"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum string

const (
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum = "deny"
)

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum string

const (
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication         CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "application"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplicationCategory CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "applicationCategory"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumHost                CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "host"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort                CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "port"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumIPRange             CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "ipRange"
)

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules struct {
	Policy *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum `json:"policy"`
	Type   *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum   `json:"type"`
	Value  *string                                                                                `json:"value"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumIgnore         CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "ignore"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumCustom         CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "custom"
)

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum string

const (
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication         CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "application"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "applicationCategory"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost                CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "host"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort                CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "port"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange             CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "ipRange"
	CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumLocalNet            CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "localNet"
)

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions struct {
	Type  CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum `json:"type"`
	Value string                                                                                             `json:"value"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown"`
	LimitUp   *int64 `json:"limitUp"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits struct {
	BandwidthLimits *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits"`
	Settings        *string                                                                                                                 `json:"settings"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules struct {
	Definitions              []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                                                   `json:"dscpTagValue"`
	PcpTagValue              *int64                                                                                                   `json:"pcpTagValue"`
	PerClientBandwidthLimits *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits"`
	Priority                 *string                                                                                                  `json:"priority"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping struct {
	L3FirewallRules     []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules     `json:"l3FirewallRules"`
	L7FirewallRules     []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules     `json:"l7FirewallRules"`
	Settings            *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum         `json:"settings"`
	TrafficShapingRules []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules `json:"trafficShapingRules"`
}

type CreateNetworkGroupPolicyRequestBodySchedulingFriday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkGroupPolicyRequestBodySchedulingMonday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkGroupPolicyRequestBodySchedulingSaturday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkGroupPolicyRequestBodySchedulingSunday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkGroupPolicyRequestBodySchedulingThursday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkGroupPolicyRequestBodySchedulingTuesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkGroupPolicyRequestBodySchedulingWednesday struct {
	Active *bool   `json:"active"`
	From   *string `json:"from"`
	To     *string `json:"to"`
}

type CreateNetworkGroupPolicyRequestBodyScheduling struct {
	Enabled   *bool                                                   `json:"enabled"`
	Friday    *CreateNetworkGroupPolicyRequestBodySchedulingFriday    `json:"friday"`
	Monday    *CreateNetworkGroupPolicyRequestBodySchedulingMonday    `json:"monday"`
	Saturday  *CreateNetworkGroupPolicyRequestBodySchedulingSaturday  `json:"saturday"`
	Sunday    *CreateNetworkGroupPolicyRequestBodySchedulingSunday    `json:"sunday"`
	Thursday  *CreateNetworkGroupPolicyRequestBodySchedulingThursday  `json:"thursday"`
	Tuesday   *CreateNetworkGroupPolicyRequestBodySchedulingTuesday   `json:"tuesday"`
	Wednesday *CreateNetworkGroupPolicyRequestBodySchedulingWednesday `json:"wednesday"`
}

type CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass         CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = "bypass"
)

type CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumIgnore         CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "ignore"
	CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumCustom         CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "custom"
)

type CreateNetworkGroupPolicyRequestBodyVlanTagging struct {
	Settings *CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum `json:"settings"`
	VlanID   *string                                                     `json:"vlanId"`
}

type CreateNetworkGroupPolicyRequestBody struct {
	Bandwidth                 *CreateNetworkGroupPolicyRequestBodyBandwidth                 `json:"bandwidth"`
	BonjourForwarding         *CreateNetworkGroupPolicyRequestBodyBonjourForwarding         `json:"bonjourForwarding"`
	ContentFiltering          *CreateNetworkGroupPolicyRequestBodyContentFiltering          `json:"contentFiltering"`
	FirewallAndTrafficShaping *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping `json:"firewallAndTrafficShaping"`
	Name                      string                                                        `json:"name"`
	Scheduling                *CreateNetworkGroupPolicyRequestBodyScheduling                `json:"scheduling"`
	SplashAuthSettings        *CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum    `json:"splashAuthSettings"`
	VlanTagging               *CreateNetworkGroupPolicyRequestBodyVlanTagging               `json:"vlanTagging"`
}

type CreateNetworkGroupPolicyRequest struct {
	PathParams CreateNetworkGroupPolicyPathParams
	Request    CreateNetworkGroupPolicyRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkGroupPolicyResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	CreateNetworkGroupPolicy201ApplicationJSONObject map[string]interface{}
}
