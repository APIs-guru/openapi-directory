import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnbindNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UnbindNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnbindNetworkPathParams;
}


export class UnbindNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unbindNetwork200ApplicationJsonObject?: Map<string, any>;
}
