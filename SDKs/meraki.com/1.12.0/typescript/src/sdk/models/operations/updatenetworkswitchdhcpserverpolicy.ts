import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchDhcpServerPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum {
    Allow = "allow",
    Block = "block"
}


export class UpdateNetworkSwitchDhcpServerPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedServers" })
  allowedServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=blockedServers" })
  blockedServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=defaultPolicy" })
  defaultPolicy?: UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;
}


export class UpdateNetworkSwitchDhcpServerPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchDhcpServerPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchDhcpServerPolicyRequestBody;
}


export class UpdateNetworkSwitchDhcpServerPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchDhcpServerPolicy200ApplicationJsonObject?: Map<string, any>;
}
