import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientPolicyPathParams;
}


export class GetNetworkClientPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClientPolicy200ApplicationJsonObject?: Map<string, any>;
}
