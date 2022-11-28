import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum {
    Connectivity = "connectivity",
    Balanced = "balanced",
    Security = "security"
}

export enum UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum {
    Prevention = "prevention",
    Detection = "detection",
    Disabled = "disabled"
}


// UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks
/** 
 * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
**/
export class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedCidr" })
  excludedCidr?: string[];

  @SpeakeasyMetadata({ data: "json, name=includedCidr" })
  includedCidr?: string[];

  @SpeakeasyMetadata({ data: "json, name=useDefault" })
  useDefault?: boolean;
}


export class UpdateNetworkApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idsRulesets" })
  idsRulesets?: UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=protectedNetworks" })
  protectedNetworks?: UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
}


export class UpdateNetworkApplianceSecurityIntrusionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceSecurityIntrusionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceSecurityIntrusionRequestBody;
}


export class UpdateNetworkApplianceSecurityIntrusionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}
