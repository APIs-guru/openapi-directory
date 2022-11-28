import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkClientPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkClientPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: string;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}


export class UpdateNetworkClientPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkClientPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkClientPolicyRequestBody;
}


export class UpdateNetworkClientPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkClientPolicy200ApplicationJsonObject?: Map<string, any>;
}
