import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkPiiRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestId" })
  requestId: string;
}


export class GetNetworkPiiRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkPiiRequestPathParams;
}


export class GetNetworkPiiRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkPiiRequest200ApplicationJsonObject?: Map<string, any>;
}
