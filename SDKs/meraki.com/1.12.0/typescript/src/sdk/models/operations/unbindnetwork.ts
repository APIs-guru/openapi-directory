import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnbindNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UnbindNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnbindNetworkPathParams;
}


export class UnbindNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unbindNetwork200ApplicationJsonObject?: Map<string, any>;
}
