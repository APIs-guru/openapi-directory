import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SplitNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class SplitNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SplitNetworkPathParams;
}


export class SplitNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  splitNetwork200ApplicationJsonObject?: Map<string, any>;
}
