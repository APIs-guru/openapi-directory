import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientPathParams;
}


export class GetNetworkClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClient200ApplicationJsonObject?: Map<string, any>;
}
