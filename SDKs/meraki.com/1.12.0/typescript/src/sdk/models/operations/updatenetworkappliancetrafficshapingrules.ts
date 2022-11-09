import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceTrafficShapingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
,    LocalNet = "localNet"
}


export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}


// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
/** 
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
/** 
 *     An object describing the bandwidth settings for your rule.
 * 
**/
export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

  @Metadata({ data: "json, name=settings" })
  settings?: string;
}


export class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitions", elemType: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions })
  definitions: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[];

  @Metadata({ data: "json, name=dscpTagValue" })
  dscpTagValue?: number;

  @Metadata({ data: "json, name=perClientBandwidthLimits" })
  perClientBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;

  @Metadata({ data: "json, name=priority" })
  priority?: string;
}


export class UpdateNetworkApplianceTrafficShapingRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultRulesEnabled" })
  defaultRulesEnabled?: boolean;

  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceTrafficShapingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceTrafficShapingRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingRulesRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
