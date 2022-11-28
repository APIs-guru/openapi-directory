import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidTrafficShapingRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: string;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions })
  definitions: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[];

  @SpeakeasyMetadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @SpeakeasyMetadata({ data: "json, name=pcpTagValue" })
  pcpTagValue?: number;

  @SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultRulesEnabled" })
  defaultRulesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[];

  @SpeakeasyMetadata({ data: "json, name=trafficShapingEnabled" })
  trafficShapingEnabled?: boolean;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidTrafficShapingRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
}


export class UpdateNetworkWirelessSsidTrafficShapingRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
