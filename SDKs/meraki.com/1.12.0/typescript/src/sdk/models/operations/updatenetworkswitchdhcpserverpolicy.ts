import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchDhcpServerPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum {
    Allow = "allow"
,    Block = "block"
}


export class UpdateNetworkSwitchDhcpServerPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedServers" })
  allowedServers?: string[];

  @Metadata({ data: "json, name=blockedServers" })
  blockedServers?: string[];

  @Metadata({ data: "json, name=defaultPolicy" })
  defaultPolicy?: UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;
}


export class UpdateNetworkSwitchDhcpServerPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchDhcpServerPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchDhcpServerPolicyRequestBody;
}


export class UpdateNetworkSwitchDhcpServerPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchDhcpServerPolicy200ApplicationJsonObject?: Map<string, any>;
}
