import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkGroupPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupPolicyId" })
  groupPolicyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
/** 
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}

export enum UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}


// UpdateNetworkGroupPolicyRequestBodyBandwidth
/** 
 *     The bandwidth settings for clients bound to your group policy.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
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


export class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId: string;
}

export enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}


// UpdateNetworkGroupPolicyRequestBodyBonjourForwarding
/** 
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
export class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules })
  rules?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}


// UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
/** 
 * Settings for allowed URL patterns
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}


// UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
/** 
 * Settings for blocked URL categories
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}


// UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
/** 
 * Settings for blocked URL patterns
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}


// UpdateNetworkGroupPolicyRequestBodyContentFiltering
/** 
 * The content filtering settings for your group policy
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedUrlPatterns" })
  allowedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;

  @SpeakeasyMetadata({ data: "json, name=blockedUrlCategories" })
  blockedUrlCategories?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;

  @SpeakeasyMetadata({ data: "json, name=blockedUrlPatterns" })
  blockedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destCidr" })
  destCidr: string;

  @SpeakeasyMetadata({ data: "json, name=destPort" })
  destPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: string;
}

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: string;
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions })
  definitions: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];

  @SpeakeasyMetadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @SpeakeasyMetadata({ data: "json, name=pcpTagValue" })
  pcpTagValue?: number;

  @SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;
}


// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
/** 
 *     The firewall and traffic shaping rules and settings for your policy.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=l3FirewallRules", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules })
  l3FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];

  @SpeakeasyMetadata({ data: "json, name=l7FirewallRules", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules })
  l7FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficShapingRules", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules })
  trafficShapingRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}


// UpdateNetworkGroupPolicyRequestBodySchedulingFriday
/** 
 * The schedule object for Friday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingMonday
/** 
 * The schedule object for Monday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingSaturday
/** 
 * The schedule object for Saturday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingSunday
/** 
 * The schedule object for Sunday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingThursday
/** 
 * The schedule object for Thursday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingTuesday
/** 
 * The schedule object for Tuesday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingWednesday
/** 
 * The schedule object for Wednesday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodyScheduling
/** 
 *     The schedule for the group policy. Schedules are applied to days of the week.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=friday" })
  friday?: UpdateNetworkGroupPolicyRequestBodySchedulingFriday;

  @SpeakeasyMetadata({ data: "json, name=monday" })
  monday?: UpdateNetworkGroupPolicyRequestBodySchedulingMonday;

  @SpeakeasyMetadata({ data: "json, name=saturday" })
  saturday?: UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;

  @SpeakeasyMetadata({ data: "json, name=sunday" })
  sunday?: UpdateNetworkGroupPolicyRequestBodySchedulingSunday;

  @SpeakeasyMetadata({ data: "json, name=thursday" })
  thursday?: UpdateNetworkGroupPolicyRequestBodySchedulingThursday;

  @SpeakeasyMetadata({ data: "json, name=tuesday" })
  tuesday?: UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;

  @SpeakeasyMetadata({ data: "json, name=wednesday" })
  wednesday?: UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
}

export enum UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    NetworkDefault = "network default",
    Bypass = "bypass"
}

export enum UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}


// UpdateNetworkGroupPolicyRequestBodyVlanTagging
/** 
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
export class UpdateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: string;
}


export class UpdateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth?: UpdateNetworkGroupPolicyRequestBodyBandwidth;

  @SpeakeasyMetadata({ data: "json, name=bonjourForwarding" })
  bonjourForwarding?: UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;

  @SpeakeasyMetadata({ data: "json, name=contentFiltering" })
  contentFiltering?: UpdateNetworkGroupPolicyRequestBodyContentFiltering;

  @SpeakeasyMetadata({ data: "json, name=firewallAndTrafficShaping" })
  firewallAndTrafficShaping?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduling" })
  scheduling?: UpdateNetworkGroupPolicyRequestBodyScheduling;

  @SpeakeasyMetadata({ data: "json, name=splashAuthSettings" })
  splashAuthSettings?: UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=vlanTagging" })
  vlanTagging?: UpdateNetworkGroupPolicyRequestBodyVlanTagging;
}


export class UpdateNetworkGroupPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkGroupPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkGroupPolicyRequestBody;
}


export class UpdateNetworkGroupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkGroupPolicy200ApplicationJsonObject?: Map<string, any>;
}
