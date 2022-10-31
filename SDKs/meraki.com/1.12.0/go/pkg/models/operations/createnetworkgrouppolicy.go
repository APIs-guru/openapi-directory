package operations



type CreateNetworkGroupPolicyPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits struct {
    LimitDown *int64 `json:"limitDown,omitempty"`
    LimitUp *int64 `json:"limitUp,omitempty"`
    
}


type CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumIgnore CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "ignore"
CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumCustom CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = "custom"
)


type CreateNetworkGroupPolicyRequestBodyBandwidth struct {
    BandwidthLimits *CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits `json:"bandwidthLimits,omitempty"`
    Settings *CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum `json:"settings,omitempty"`
    
}


type CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum string

const (
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAllServices CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "All Services"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAirPlay CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "AirPlay"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAfp CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "AFP"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumBitTorrent CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "BitTorrent"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumFtp CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "FTP"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumIChat CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "iChat"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumITunes CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "iTunes"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumPrinters CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Printers"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSamba CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Samba"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "Scanners"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSSH CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = "SSH"
)


type CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules struct {
    Description *string `json:"description,omitempty"`
    Services []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum `json:"services"`
    VlanID string `json:"vlanId"`
    
}


type CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumIgnore CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "ignore"
CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumCustom CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = "custom"
)


type CreateNetworkGroupPolicyRequestBodyBonjourForwarding struct {
    Rules []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules `json:"rules,omitempty"`
    Settings *CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum `json:"settings,omitempty"`
    
}


type CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumAppend CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "append"
CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum = "override"
)


type CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns struct {
    Patterns []string `json:"patterns,omitempty"`
    Settings *CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum `json:"settings,omitempty"`
    
}


type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "append"
CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum = "override"
)


type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories struct {
    Categories []string `json:"categories,omitempty"`
    Settings *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum `json:"settings,omitempty"`
    
}


type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumAppend CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "append"
CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumOverride CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum = "override"
)


type CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns struct {
    Patterns []string `json:"patterns,omitempty"`
    Settings *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum `json:"settings,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodyContentFiltering struct {
    AllowedURLPatterns *CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns `json:"allowedUrlPatterns,omitempty"`
    BlockedURLCategories *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories `json:"blockedUrlCategories,omitempty"`
    BlockedURLPatterns *CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns `json:"blockedUrlPatterns,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules struct {
    Comment *string `json:"comment,omitempty"`
    DestCidr string `json:"destCidr"`
    DestPort *string `json:"destPort,omitempty"`
    Policy string `json:"policy"`
    Protocol string `json:"protocol"`
    
}


type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum string

const (
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum = "deny"
)



type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum string

const (
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "application"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplicationCategory CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "applicationCategory"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumHost CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "host"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "port"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumIPRange CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = "ipRange"
)


type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules struct {
    Policy *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum `json:"policy,omitempty"`
    Type *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}


type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumIgnore CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "ignore"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumCustom CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = "custom"
)



type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum string

const (
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "application"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "applicationCategory"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "host"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "port"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "ipRange"
CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumLocalNet CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = "localNet"
)


type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions struct {
    Type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum `json:"type"`
    Value string `json:"value"`
    
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits struct {
    LimitDown *int64 `json:"limitDown,omitempty"`
    LimitUp *int64 `json:"limitUp,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits struct {
    BandwidthLimits *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits `json:"bandwidthLimits,omitempty"`
    Settings *string `json:"settings,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules struct {
    Definitions []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions `json:"definitions"`
    DscpTagValue *int64 `json:"dscpTagValue,omitempty"`
    PcpTagValue *int64 `json:"pcpTagValue,omitempty"`
    PerClientBandwidthLimits *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits `json:"perClientBandwidthLimits,omitempty"`
    Priority *string `json:"priority,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping struct {
    L3FirewallRules []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules `json:"l3FirewallRules,omitempty"`
    L7FirewallRules []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules `json:"l7FirewallRules,omitempty"`
    Settings *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum `json:"settings,omitempty"`
    TrafficShapingRules []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules `json:"trafficShapingRules,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodySchedulingFriday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodySchedulingMonday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodySchedulingSaturday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodySchedulingSunday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodySchedulingThursday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodySchedulingTuesday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodySchedulingWednesday struct {
    Active *bool `json:"active,omitempty"`
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBodyScheduling struct {
    Enabled *bool `json:"enabled,omitempty"`
    Friday *CreateNetworkGroupPolicyRequestBodySchedulingFriday `json:"friday,omitempty"`
    Monday *CreateNetworkGroupPolicyRequestBodySchedulingMonday `json:"monday,omitempty"`
    Saturday *CreateNetworkGroupPolicyRequestBodySchedulingSaturday `json:"saturday,omitempty"`
    Sunday *CreateNetworkGroupPolicyRequestBodySchedulingSunday `json:"sunday,omitempty"`
    Thursday *CreateNetworkGroupPolicyRequestBodySchedulingThursday `json:"thursday,omitempty"`
    Tuesday *CreateNetworkGroupPolicyRequestBodySchedulingTuesday `json:"tuesday,omitempty"`
    Wednesday *CreateNetworkGroupPolicyRequestBodySchedulingWednesday `json:"wednesday,omitempty"`
    
}


type CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = "bypass"
)



type CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum string

const (
    CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumNetworkDefault CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "network default"
CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumIgnore CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "ignore"
CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumCustom CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = "custom"
)


type CreateNetworkGroupPolicyRequestBodyVlanTagging struct {
    Settings *CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum `json:"settings,omitempty"`
    VlanID *string `json:"vlanId,omitempty"`
    
}

type CreateNetworkGroupPolicyRequestBody struct {
    Bandwidth *CreateNetworkGroupPolicyRequestBodyBandwidth `json:"bandwidth,omitempty"`
    BonjourForwarding *CreateNetworkGroupPolicyRequestBodyBonjourForwarding `json:"bonjourForwarding,omitempty"`
    ContentFiltering *CreateNetworkGroupPolicyRequestBodyContentFiltering `json:"contentFiltering,omitempty"`
    FirewallAndTrafficShaping *CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping `json:"firewallAndTrafficShaping,omitempty"`
    Name string `json:"name"`
    Scheduling *CreateNetworkGroupPolicyRequestBodyScheduling `json:"scheduling,omitempty"`
    SplashAuthSettings *CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum `json:"splashAuthSettings,omitempty"`
    VlanTagging *CreateNetworkGroupPolicyRequestBodyVlanTagging `json:"vlanTagging,omitempty"`
    
}

type CreateNetworkGroupPolicyRequest struct {
    PathParams CreateNetworkGroupPolicyPathParams 
    Request CreateNetworkGroupPolicyRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkGroupPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkGroupPolicy201ApplicationJSONObject map[string]interface{} 
    
}

