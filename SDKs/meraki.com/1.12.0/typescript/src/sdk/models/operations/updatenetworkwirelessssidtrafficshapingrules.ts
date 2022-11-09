import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidTrafficShapingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
,    LocalNet = "localNet"
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}


// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

  @Metadata({ data: "json, name=settings" })
  settings?: string;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitions", elemType: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions })
  definitions: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[];

  @Metadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @Metadata({ data: "json, name=pcpTagValue" })
  pcpTagValue?: number;

  @Metadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultRulesEnabled" })
  defaultRulesEnabled?: boolean;

  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[];

  @Metadata({ data: "json, name=trafficShapingEnabled" })
  trafficShapingEnabled?: boolean;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidTrafficShapingRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
