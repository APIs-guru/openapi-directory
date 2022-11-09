import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkGroupPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
/** 
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
export class CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}

export enum CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}


// CreateNetworkGroupPolicyRequestBodyBandwidth
/** 
 *     The bandwidth settings for clients bound to your group policy.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;

  @Metadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
    AllServices = "All Services"
,    AirPlay = "AirPlay"
,    Afp = "AFP"
,    BitTorrent = "BitTorrent"
,    Ftp = "FTP"
,    IChat = "iChat"
,    ITunes = "iTunes"
,    Printers = "Printers"
,    Samba = "Samba"
,    Scanners = "Scanners"
,    Ssh = "SSH"
}


export class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=services" })
  services: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];

  @Metadata({ data: "json, name=vlanId" })
  vlanId: string;
}

export enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}


// CreateNetworkGroupPolicyRequestBodyBonjourForwarding
/** 
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
export class CreateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules })
  rules?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];

  @Metadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    NetworkDefault = "network default"
,    Append = "append"
,    Override = "override"
}


// CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
/** 
 * Settings for allowed URL patterns
**/
export class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
  @Metadata({ data: "json, name=patterns" })
  patterns?: string[];

  @Metadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    NetworkDefault = "network default"
,    Append = "append"
,    Override = "override"
}


// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
/** 
 * Settings for blocked URL categories
**/
export class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}

export enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    NetworkDefault = "network default"
,    Append = "append"
,    Override = "override"
}


// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
/** 
 * Settings for blocked URL patterns
**/
export class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
  @Metadata({ data: "json, name=patterns" })
  patterns?: string[];

  @Metadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}


// CreateNetworkGroupPolicyRequestBodyContentFiltering
/** 
 * The content filtering settings for your group policy
**/
export class CreateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedUrlPatterns" })
  allowedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;

  @Metadata({ data: "json, name=blockedUrlCategories" })
  blockedUrlCategories?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;

  @Metadata({ data: "json, name=blockedUrlPatterns" })
  blockedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=destCidr" })
  destCidr: string;

  @Metadata({ data: "json, name=destPort" })
  destPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: string;
}

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;

  @Metadata({ data: "json, name=type" })
  type?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}

export enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
,    LocalNet = "localNet"
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}


// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;

  @Metadata({ data: "json, name=settings" })
  settings?: string;
}


export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitions", elemType: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions })
  definitions: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];

  @Metadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @Metadata({ data: "json, name=pcpTagValue" })
  pcpTagValue?: number;

  @Metadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;

  @Metadata({ data: "json, name=priority" })
  priority?: string;
}


// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
/** 
 *     The firewall and traffic shaping rules and settings for your policy.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
  @Metadata({ data: "json, name=l3FirewallRules", elemType: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules })
  l3FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];

  @Metadata({ data: "json, name=l7FirewallRules", elemType: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules })
  l7FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];

  @Metadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;

  @Metadata({ data: "json, name=trafficShapingRules", elemType: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules })
  trafficShapingRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}


// CreateNetworkGroupPolicyRequestBodySchedulingFriday
/** 
 * The schedule object for Friday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingMonday
/** 
 * The schedule object for Monday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingSaturday
/** 
 * The schedule object for Saturday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingSunday
/** 
 * The schedule object for Sunday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingThursday
/** 
 * The schedule object for Thursday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingTuesday
/** 
 * The schedule object for Tuesday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodySchedulingWednesday
/** 
 * The schedule object for Wednesday.
**/
export class CreateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkGroupPolicyRequestBodyScheduling
/** 
 *     The schedule for the group policy. Schedules are applied to days of the week.
 * 
**/
export class CreateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=friday" })
  friday?: CreateNetworkGroupPolicyRequestBodySchedulingFriday;

  @Metadata({ data: "json, name=monday" })
  monday?: CreateNetworkGroupPolicyRequestBodySchedulingMonday;

  @Metadata({ data: "json, name=saturday" })
  saturday?: CreateNetworkGroupPolicyRequestBodySchedulingSaturday;

  @Metadata({ data: "json, name=sunday" })
  sunday?: CreateNetworkGroupPolicyRequestBodySchedulingSunday;

  @Metadata({ data: "json, name=thursday" })
  thursday?: CreateNetworkGroupPolicyRequestBodySchedulingThursday;

  @Metadata({ data: "json, name=tuesday" })
  tuesday?: CreateNetworkGroupPolicyRequestBodySchedulingTuesday;

  @Metadata({ data: "json, name=wednesday" })
  wednesday?: CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
}

export enum CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    NetworkDefault = "network default"
,    Bypass = "bypass"
}

export enum CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}


// CreateNetworkGroupPolicyRequestBodyVlanTagging
/** 
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
export class CreateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings?: CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: string;
}


export class CreateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth?: CreateNetworkGroupPolicyRequestBodyBandwidth;

  @Metadata({ data: "json, name=bonjourForwarding" })
  bonjourForwarding?: CreateNetworkGroupPolicyRequestBodyBonjourForwarding;

  @Metadata({ data: "json, name=contentFiltering" })
  contentFiltering?: CreateNetworkGroupPolicyRequestBodyContentFiltering;

  @Metadata({ data: "json, name=firewallAndTrafficShaping" })
  firewallAndTrafficShaping?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=scheduling" })
  scheduling?: CreateNetworkGroupPolicyRequestBodyScheduling;

  @Metadata({ data: "json, name=splashAuthSettings" })
  splashAuthSettings?: CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;

  @Metadata({ data: "json, name=vlanTagging" })
  vlanTagging?: CreateNetworkGroupPolicyRequestBodyVlanTagging;
}


export class CreateNetworkGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkGroupPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkGroupPolicyRequestBody;
}


export class CreateNetworkGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkGroupPolicy201ApplicationJsonObject?: Map<string, any>;
}
