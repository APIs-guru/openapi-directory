import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SplitNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class SplitNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SplitNetworkPathParams;
}


export class SplitNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  splitNetwork200ApplicationJsonObject?: Map<string, any>;
}
