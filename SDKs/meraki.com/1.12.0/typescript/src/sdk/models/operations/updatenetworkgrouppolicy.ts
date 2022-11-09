import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkGroupPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupPolicyId" })
  groupPolicyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
/** 
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}

export enum UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}


// UpdateNetworkGroupPolicyRequestBodyBandwidth
/** 
 *     The bandwidth settings for clients bound to your group policy.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;

  @Metadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
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


export class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=services" })
  services: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];

  @Metadata({ data: "json, name=vlanId" })
  vlanId: string;
}

export enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}


// UpdateNetworkGroupPolicyRequestBodyBonjourForwarding
/** 
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
export class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules })
  rules?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];

  @Metadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    NetworkDefault = "network default"
,    Append = "append"
,    Override = "override"
}


// UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
/** 
 * Settings for allowed URL patterns
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
  @Metadata({ data: "json, name=patterns" })
  patterns?: string[];

  @Metadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    NetworkDefault = "network default"
,    Append = "append"
,    Override = "override"
}


// UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
/** 
 * Settings for blocked URL categories
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}

export enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    NetworkDefault = "network default"
,    Append = "append"
,    Override = "override"
}


// UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
/** 
 * Settings for blocked URL patterns
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
  @Metadata({ data: "json, name=patterns" })
  patterns?: string[];

  @Metadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}


// UpdateNetworkGroupPolicyRequestBodyContentFiltering
/** 
 * The content filtering settings for your group policy
**/
export class UpdateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedUrlPatterns" })
  allowedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;

  @Metadata({ data: "json, name=blockedUrlCategories" })
  blockedUrlCategories?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;

  @Metadata({ data: "json, name=blockedUrlPatterns" })
  blockedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
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

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;

  @Metadata({ data: "json, name=type" })
  type?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}

export enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
,    LocalNet = "localNet"
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}


// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;

  @Metadata({ data: "json, name=settings" })
  settings?: string;
}


export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitions", elemType: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions })
  definitions: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];

  @Metadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @Metadata({ data: "json, name=pcpTagValue" })
  pcpTagValue?: number;

  @Metadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;

  @Metadata({ data: "json, name=priority" })
  priority?: string;
}


// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
/** 
 *     The firewall and traffic shaping rules and settings for your policy.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
  @Metadata({ data: "json, name=l3FirewallRules", elemType: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules })
  l3FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];

  @Metadata({ data: "json, name=l7FirewallRules", elemType: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules })
  l7FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];

  @Metadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;

  @Metadata({ data: "json, name=trafficShapingRules", elemType: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules })
  trafficShapingRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}


// UpdateNetworkGroupPolicyRequestBodySchedulingFriday
/** 
 * The schedule object for Friday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingMonday
/** 
 * The schedule object for Monday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingSaturday
/** 
 * The schedule object for Saturday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingSunday
/** 
 * The schedule object for Sunday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingThursday
/** 
 * The schedule object for Thursday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingTuesday
/** 
 * The schedule object for Tuesday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodySchedulingWednesday
/** 
 * The schedule object for Wednesday.
**/
export class UpdateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkGroupPolicyRequestBodyScheduling
/** 
 *     The schedule for the group policy. Schedules are applied to days of the week.
 * 
**/
export class UpdateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=friday" })
  friday?: UpdateNetworkGroupPolicyRequestBodySchedulingFriday;

  @Metadata({ data: "json, name=monday" })
  monday?: UpdateNetworkGroupPolicyRequestBodySchedulingMonday;

  @Metadata({ data: "json, name=saturday" })
  saturday?: UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;

  @Metadata({ data: "json, name=sunday" })
  sunday?: UpdateNetworkGroupPolicyRequestBodySchedulingSunday;

  @Metadata({ data: "json, name=thursday" })
  thursday?: UpdateNetworkGroupPolicyRequestBodySchedulingThursday;

  @Metadata({ data: "json, name=tuesday" })
  tuesday?: UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;

  @Metadata({ data: "json, name=wednesday" })
  wednesday?: UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
}

export enum UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    NetworkDefault = "network default"
,    Bypass = "bypass"
}

export enum UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    NetworkDefault = "network default"
,    Ignore = "ignore"
,    Custom = "custom"
}


// UpdateNetworkGroupPolicyRequestBodyVlanTagging
/** 
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
export class UpdateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings?: UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: string;
}


export class UpdateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth?: UpdateNetworkGroupPolicyRequestBodyBandwidth;

  @Metadata({ data: "json, name=bonjourForwarding" })
  bonjourForwarding?: UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;

  @Metadata({ data: "json, name=contentFiltering" })
  contentFiltering?: UpdateNetworkGroupPolicyRequestBodyContentFiltering;

  @Metadata({ data: "json, name=firewallAndTrafficShaping" })
  firewallAndTrafficShaping?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scheduling" })
  scheduling?: UpdateNetworkGroupPolicyRequestBodyScheduling;

  @Metadata({ data: "json, name=splashAuthSettings" })
  splashAuthSettings?: UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;

  @Metadata({ data: "json, name=vlanTagging" })
  vlanTagging?: UpdateNetworkGroupPolicyRequestBodyVlanTagging;
}


export class UpdateNetworkGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkGroupPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkGroupPolicyRequestBody;
}


export class UpdateNetworkGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkGroupPolicy200ApplicationJsonObject?: Map<string, any>;
}
