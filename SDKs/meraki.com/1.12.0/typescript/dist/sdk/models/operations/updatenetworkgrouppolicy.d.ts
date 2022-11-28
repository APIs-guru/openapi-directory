import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkGroupPolicyPathParams extends SpeakeasyBase {
    groupPolicyId: string;
    networkId: string;
}
/**
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
export declare class UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
/**
 *     The bandwidth settings for clients bound to your group policy.
 *
**/
export declare class UpdateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
    bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
    settings?: UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
    AllServices = "All Services",
    AirPlay = "AirPlay",
    Afp = "AFP",
    BitTorrent = "BitTorrent",
    Ftp = "FTP",
    IChat = "iChat",
    ITunes = "iTunes",
    Printers = "Printers",
    Samba = "Samba",
    Scanners = "Scanners",
    Ssh = "SSH"
}
export declare class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
    description?: string;
    services: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];
    vlanId: string;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
/**
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
export declare class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
    rules?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];
    settings?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}
/**
 * Settings for allowed URL patterns
**/
export declare class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
    patterns?: string[];
    settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}
/**
 * Settings for blocked URL categories
**/
export declare class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
    categories?: string[];
    settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}
/**
 * Settings for blocked URL patterns
**/
export declare class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
    patterns?: string[];
    settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}
/**
 * The content filtering settings for your group policy
**/
export declare class UpdateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
    allowedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
    blockedUrlCategories?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
    blockedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: string;
    protocol: string;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
    policy?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
    type?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
    value?: string;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
    type: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
    value: string;
}
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
    bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
    settings?: string;
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
    definitions: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];
    dscpTagValue?: number;
    pcpTagValue?: number;
    perClientBandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
    priority?: string;
}
/**
 *     The firewall and traffic shaping rules and settings for your policy.
 *
**/
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
    l3FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];
    l7FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];
    settings?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
    trafficShapingRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}
/**
 * The schedule object for Friday.
**/
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Monday.
**/
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Saturday.
**/
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Sunday.
**/
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Thursday.
**/
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Tuesday.
**/
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Wednesday.
**/
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 *     The schedule for the group policy. Schedules are applied to days of the week.
 *
**/
export declare class UpdateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
    enabled?: boolean;
    friday?: UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
    monday?: UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
    saturday?: UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
    sunday?: UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
    thursday?: UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
    tuesday?: UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
    wednesday?: UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
}
export declare enum UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    NetworkDefault = "network default",
    Bypass = "bypass"
}
export declare enum UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
/**
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
export declare class UpdateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
    settings?: UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
    vlanId?: string;
}
export declare class UpdateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
    bandwidth?: UpdateNetworkGroupPolicyRequestBodyBandwidth;
    bonjourForwarding?: UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
    contentFiltering?: UpdateNetworkGroupPolicyRequestBodyContentFiltering;
    firewallAndTrafficShaping?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
    name?: string;
    scheduling?: UpdateNetworkGroupPolicyRequestBodyScheduling;
    splashAuthSettings?: UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
    vlanTagging?: UpdateNetworkGroupPolicyRequestBodyVlanTagging;
}
export declare class UpdateNetworkGroupPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkGroupPolicyPathParams;
    request?: UpdateNetworkGroupPolicyRequestBody;
}
export declare class UpdateNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkGroupPolicy200ApplicationJsonObject?: Map<string, any>;
}
