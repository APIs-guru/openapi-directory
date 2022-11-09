import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkPathParams;
}


export class GetNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetwork200ApplicationJsonObject?: Map<string, any>;
}
