import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkGroupPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
/** 
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
export class CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}

export enum CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}


// CreateNetworkGroupPolicyRequestBodyBandwidth
/** 
 *     The bandwidth settings for clients bound to your group policy.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
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


export class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId: string;
}

export enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}


// CreateNetworkGroupPolicyRequestBodyBonjourForwarding
/** 
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
export class CreateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules })
  rules?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}


// CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
/** 
 * Settings for allowed URL patterns
**/
export class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}


// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
/** 
 * Settings for blocked URL categories
**/
export class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    NetworkDefault = "network default",
    Append = "append",
    Override = "override"
}


// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
/** 
 * Settings for blocked URL patterns
**/
export class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}


// CreateNetworkGroupPolicyRequestBodyContentFiltering
/** 
 * The content filtering settings for your group policy
**/
export class CreateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedUrlPatterns" })
  allowedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;

  @SpeakeasyMetadata({ data: "json, name=blockedUrlCategories" })
  blockedUrlCategories?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;

  @SpeakeasyMetadata({ data: "json, name=blockedUrlPatterns" })
  blockedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
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

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: string;
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions })
  definitions: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];

  @SpeakeasyMetadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @SpeakeasyMetadata({ data: "json, name=pcpTagValue" })
  pcpTagValue?: number;

  @SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;
}


// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
/** 
 *     The firewall and traffic shaping rules and settings for your policy.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=l3FirewallRules", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules })
  l3FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];

  @SpeakeasyMetadata({ data: "json, name=l7FirewallRules", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules })
  l7FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficShapingRules", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules })
  trafficShapingRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}


// CreateNetworkGroupPolicyRequestBodySchedulingFriday
/** 
 * The schedule object for Friday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingMonday
/** 
 * The schedule object for Monday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingSaturday
/** 
 * The schedule object for Saturday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingSunday
/** 
 * The schedule object for Sunday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingThursday
/** 
 * The schedule object for Thursday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingTuesday
/** 
 * The schedule object for Tuesday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingWednesday
/** 
 * The schedule object for Wednesday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodyScheduling
/** 
 *     The schedule for the group policy. Schedules are applied to days of the week.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=friday" })
  friday?: CreateNetworkGroupPolicyRequestBodySchedulingFriday;

  @SpeakeasyMetadata({ data: "json, name=monday" })
  monday?: CreateNetworkGroupPolicyRequestBodySchedulingMonday;

  @SpeakeasyMetadata({ data: "json, name=saturday" })
  saturday?: CreateNetworkGroupPolicyRequestBodySchedulingSaturday;

  @SpeakeasyMetadata({ data: "json, name=sunday" })
  sunday?: CreateNetworkGroupPolicyRequestBodySchedulingSunday;

  @SpeakeasyMetadata({ data: "json, name=thursday" })
  thursday?: CreateNetworkGroupPolicyRequestBodySchedulingThursday;

  @SpeakeasyMetadata({ data: "json, name=tuesday" })
  tuesday?: CreateNetworkGroupPolicyRequestBodySchedulingTuesday;

  @SpeakeasyMetadata({ data: "json, name=wednesday" })
  wednesday?: CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
}

export enum CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    NetworkDefault = "network default",
    Bypass = "bypass"
}

export enum CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    NetworkDefault = "network default",
    Ignore = "ignore",
    Custom = "custom"
}


// CreateNetworkGroupPolicyRequestBodyVlanTagging
/** 
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
export class CreateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: string;
}


export class CreateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth?: CreateNetworkGroupPolicyRequestBodyBandwidth;

  @SpeakeasyMetadata({ data: "json, name=bonjourForwarding" })
  bonjourForwarding?: CreateNetworkGroupPolicyRequestBodyBonjourForwarding;

  @SpeakeasyMetadata({ data: "json, name=contentFiltering" })
  contentFiltering?: CreateNetworkGroupPolicyRequestBodyContentFiltering;

  @SpeakeasyMetadata({ data: "json, name=firewallAndTrafficShaping" })
  firewallAndTrafficShaping?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scheduling" })
  scheduling?: CreateNetworkGroupPolicyRequestBodyScheduling;

  @SpeakeasyMetadata({ data: "json, name=splashAuthSettings" })
  splashAuthSettings?: CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=vlanTagging" })
  vlanTagging?: CreateNetworkGroupPolicyRequestBodyVlanTagging;
}


export class CreateNetworkGroupPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkGroupPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkGroupPolicyRequestBody;
}


export class CreateNetworkGroupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkGroupPolicy201ApplicationJsonObject?: Map<string, any>;
}
