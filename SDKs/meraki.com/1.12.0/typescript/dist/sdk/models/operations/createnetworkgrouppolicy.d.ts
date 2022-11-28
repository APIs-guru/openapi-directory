import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkGroupPolicyPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
export declare class CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
export declare enum CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
/**
 *     The bandwidth settings for clients bound to your group policy.
 *
**/
export declare class CreateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
    bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
    settings?: CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}
export declare enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
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
export declare class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
    description?: string;
    services: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];
    vlanId: string;
}
export declare enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
/**
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
export declare class CreateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
    rules?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];
    settings?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}
export declare enum CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}
/**
 * Settings for allowed URL patterns
**/
export declare class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
    patterns?: string[];
    settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}
export declare enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}
/**
 * Settings for blocked URL categories
**/
export declare class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
    categories?: string[];
    settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}
export declare enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}
/**
 * Settings for blocked URL patterns
**/
export declare class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
    patterns?: string[];
    settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}
/**
 * The content filtering settings for your group policy
**/
export declare class CreateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
    allowedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
    blockedUrlCategories?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
    blockedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: string;
    protocol: string;
}
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
    policy?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
    type?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
    value?: string;
}
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
    type: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
    value: string;
}
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
    bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
    settings?: string;
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
    definitions: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];
    dscpTagValue?: number;
    pcpTagValue?: number;
    perClientBandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
    priority?: string;
}
/**
 *     The firewall and traffic shaping rules and settings for your policy.
 *
**/
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
    l3FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];
    l7FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];
    settings?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
    trafficShapingRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}
/**
 * The schedule object for Friday.
**/
export declare class CreateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Monday.
**/
export declare class CreateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Saturday.
**/
export declare class CreateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Sunday.
**/
export declare class CreateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Thursday.
**/
export declare class CreateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Tuesday.
**/
export declare class CreateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Wednesday.
**/
export declare class CreateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 *     The schedule for the group policy. Schedules are applied to days of the week.
 *
**/
export declare class CreateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
    enabled?: boolean;
    friday?: CreateNetworkGroupPolicyRequestBodySchedulingFriday;
    monday?: CreateNetworkGroupPolicyRequestBodySchedulingMonday;
    saturday?: CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
    sunday?: CreateNetworkGroupPolicyRequestBodySchedulingSunday;
    thursday?: CreateNetworkGroupPolicyRequestBodySchedulingThursday;
    tuesday?: CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
    wednesday?: CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
}
export declare enum CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    NetworkDefault = "network default",
    Bypass = "bypass"
}
export declare enum CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}
/**
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
export declare class CreateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
    settings?: CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
    vlanId?: string;
}
export declare class CreateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
    bandwidth?: CreateNetworkGroupPolicyRequestBodyBandwidth;
    bonjourForwarding?: CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
    contentFiltering?: CreateNetworkGroupPolicyRequestBodyContentFiltering;
    firewallAndTrafficShaping?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
    name: string;
    scheduling?: CreateNetworkGroupPolicyRequestBodyScheduling;
    splashAuthSettings?: CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
    vlanTagging?: CreateNetworkGroupPolicyRequestBodyVlanTagging;
}
export declare class CreateNetworkGroupPolicyRequest extends SpeakeasyBase {
    pathParams: CreateNetworkGroupPolicyPathParams;
    request: CreateNetworkGroupPolicyRequestBody;
}
export declare class CreateNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkGroupPolicy201ApplicationJsonObject?: Map<string, any>;
}
