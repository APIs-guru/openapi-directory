import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum {
    Connectivity = "connectivity"
,    Balanced = "balanced"
,    Security = "security"
}

export enum UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum {
    Prevention = "prevention"
,    Detection = "detection"
,    Disabled = "disabled"
}


// UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks
/** 
 * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
**/
export class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedCidr" })
  excludedCidr?: string[];

  @Metadata({ data: "json, name=includedCidr" })
  includedCidr?: string[];

  @Metadata({ data: "json, name=useDefault" })
  useDefault?: boolean;
}


export class UpdateNetworkApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=idsRulesets" })
  idsRulesets?: UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;

  @Metadata({ data: "json, name=mode" })
  mode?: UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;

  @Metadata({ data: "json, name=protectedNetworks" })
  protectedNetworks?: UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
}


export class UpdateNetworkApplianceSecurityIntrusionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceSecurityIntrusionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceSecurityIntrusionRequestBody;
}


export class UpdateNetworkApplianceSecurityIntrusionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}
