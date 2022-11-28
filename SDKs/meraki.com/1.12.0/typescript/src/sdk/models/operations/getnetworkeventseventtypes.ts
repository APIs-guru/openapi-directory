import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkEventsEventTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkEventsEventTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkEventsEventTypesPathParams;
}


export class GetNetworkEventsEventTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkEventsEventTypes200ApplicationJsonObject?: Map<string, any>;
}
