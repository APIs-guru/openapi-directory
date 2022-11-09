import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkClientPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkClientPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: string;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}


export class UpdateNetworkClientPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkClientPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkClientPolicyRequestBody;
}


export class UpdateNetworkClientPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkClientPolicy200ApplicationJsonObject?: Map<string, any>;
}
