package operations

type CreateNetworkGroupPolicyPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

// CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
// The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
type CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumIgnore         CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "ignore"
	CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumCustom         CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "custom"
)

// CreateNetworkGroupPolicyRequestBodyBandwidth
//
//	The bandwidth settings for clients bound to your group policy.
type CreateNetworkGroupPolicyRequestBodyBandwidth struct {
	BandwidthLimits *CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits `json:"bandwidthLimits,omitempty"`
	Settings        *CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum    `json:"settings,omitempty"`
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
	Description *string                                                                 `json:"description,omitempty"`
	Services    []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum `json:"services"`
	VlanID      string                                                                  `json:"vlanId"`
}

type CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumIgnore         CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "ignore"
	CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumCustom         CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "custom"
)

// CreateNetworkGroupPolicyRequestBodyBonjourForwarding
// The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
type CreateNetworkGroupPolicyRequestBodyBonjourForwarding struct {
	Rules    []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules       `json:"rules,omitempty"`
	Settings *CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum `json:"settings,omitempty"`
}

type CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumAppend         CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "append"
	CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride       CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "override"
)

// CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns
// Settings for allowed URL patterns
type CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns,omitempty"`
	Settings *CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum `json:"settings,omitempty"`
}

type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend         CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "append"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride       CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "override"
)

// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories
// Settings for blocked URL categories
type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories struct {
	Categories []string                                                                             `json:"categories,omitempty"`
	Settings   *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum `json:"settings,omitempty"`
}

type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum string

const (
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "network default"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumAppend         CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "append"
	CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumOverride       CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "override"
)

// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns
// Settings for blocked URL patterns
type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns struct {
	Patterns []string                                                                           `json:"patterns,omitempty"`
	Settings *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum `json:"settings,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodyContentFiltering
// The content filtering settings for your group policy
type CreateNetworkGroupPolicyRequestBodyContentFiltering struct {
	AllowedURLPatterns   *CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns   `json:"allowedUrlPatterns,omitempty"`
	BlockedURLCategories *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories `json:"blockedUrlCategories,omitempty"`
	BlockedURLPatterns   *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns   `json:"blockedUrlPatterns,omitempty"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules struct {
	Comment  *string `json:"comment,omitempty"`
	DestCidr string  `json:"destCidr"`
	DestPort *string `json:"destPort,omitempty"`
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
	Policy *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum `json:"policy,omitempty"`
	Type   *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum   `json:"type,omitempty"`
	Value  *string                                                                                `json:"value,omitempty"`
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

// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
// The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
//
//	An object describing the bandwidth settings for your rule.
type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits struct {
	BandwidthLimits *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits,omitempty"`
	Settings        *string                                                                                                                 `json:"settings,omitempty"`
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules struct {
	Definitions              []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions             `json:"definitions"`
	DscpTagValue             *int64                                                                                                   `json:"dscpTagValue,omitempty"`
	PcpTagValue              *int64                                                                                                   `json:"pcpTagValue,omitempty"`
	PerClientBandwidthLimits *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits,omitempty"`
	Priority                 *string                                                                                                  `json:"priority,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
//
//	The firewall and traffic shaping rules and settings for your policy.
type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping struct {
	L3FirewallRules     []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules     `json:"l3FirewallRules,omitempty"`
	L7FirewallRules     []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules     `json:"l7FirewallRules,omitempty"`
	Settings            *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum         `json:"settings,omitempty"`
	TrafficShapingRules []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules `json:"trafficShapingRules,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodySchedulingFriday
// The schedule object for Friday.
type CreateNetworkGroupPolicyRequestBodySchedulingFriday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodySchedulingMonday
// The schedule object for Monday.
type CreateNetworkGroupPolicyRequestBodySchedulingMonday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodySchedulingSaturday
// The schedule object for Saturday.
type CreateNetworkGroupPolicyRequestBodySchedulingSaturday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodySchedulingSunday
// The schedule object for Sunday.
type CreateNetworkGroupPolicyRequestBodySchedulingSunday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodySchedulingThursday
// The schedule object for Thursday.
type CreateNetworkGroupPolicyRequestBodySchedulingThursday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodySchedulingTuesday
// The schedule object for Tuesday.
type CreateNetworkGroupPolicyRequestBodySchedulingTuesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodySchedulingWednesday
// The schedule object for Wednesday.
type CreateNetworkGroupPolicyRequestBodySchedulingWednesday struct {
	Active *bool   `json:"active,omitempty"`
	From   *string `json:"from,omitempty"`
	To     *string `json:"to,omitempty"`
}

// CreateNetworkGroupPolicyRequestBodyScheduling
//
//	The schedule for the group policy. Schedules are applied to days of the week.
type CreateNetworkGroupPolicyRequestBodyScheduling struct {
	Enabled   *bool                                                   `json:"enabled,omitempty"`
	Friday    *CreateNetworkGroupPolicyRequestBodySchedulingFriday    `json:"friday,omitempty"`
	Monday    *CreateNetworkGroupPolicyRequestBodySchedulingMonday    `json:"monday,omitempty"`
	Saturday  *CreateNetworkGroupPolicyRequestBodySchedulingSaturday  `json:"saturday,omitempty"`
	Sunday    *CreateNetworkGroupPolicyRequestBodySchedulingSunday    `json:"sunday,omitempty"`
	Thursday  *CreateNetworkGroupPolicyRequestBodySchedulingThursday  `json:"thursday,omitempty"`
	Tuesday   *CreateNetworkGroupPolicyRequestBodySchedulingTuesday   `json:"tuesday,omitempty"`
	Wednesday *CreateNetworkGroupPolicyRequestBodySchedulingWednesday `json:"wednesday,omitempty"`
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

// CreateNetworkGroupPolicyRequestBodyVlanTagging
// The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
type CreateNetworkGroupPolicyRequestBodyVlanTagging struct {
	Settings *CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum `json:"settings,omitempty"`
	VlanID   *string                                                     `json:"vlanId,omitempty"`
}

type CreateNetworkGroupPolicyRequestBody struct {
	Bandwidth                 *CreateNetworkGroupPolicyRequestBodyBandwidth                 `json:"bandwidth,omitempty"`
	BonjourForwarding         *CreateNetworkGroupPolicyRequestBodyBonjourForwarding         `json:"bonjourForwarding,omitempty"`
	ContentFiltering          *CreateNetworkGroupPolicyRequestBodyContentFiltering          `json:"contentFiltering,omitempty"`
	FirewallAndTrafficShaping *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping `json:"firewallAndTrafficShaping,omitempty"`
	Name                      string                                                        `json:"name"`
	Scheduling                *CreateNetworkGroupPolicyRequestBodyScheduling                `json:"scheduling,omitempty"`
	SplashAuthSettings        *CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum    `json:"splashAuthSettings,omitempty"`
	VlanTagging               *CreateNetworkGroupPolicyRequestBodyVlanTagging               `json:"vlanTagging,omitempty"`
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
