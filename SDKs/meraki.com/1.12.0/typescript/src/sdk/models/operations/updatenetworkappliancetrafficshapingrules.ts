import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceTrafficShapingRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}


export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: string;
}


export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions })
  definitions: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[];

  @SpeakeasyMetadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;
}


export class UpdateNetworkApplianceTrafficShapingRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultRulesEnabled" })
  defaultRulesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceTrafficShapingRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceTrafficShapingRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingRulesRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
