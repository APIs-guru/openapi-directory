import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkEventsEventTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkEventsEventTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkEventsEventTypesPathParams;
}


export class GetNetworkEventsEventTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkEventsEventTypes200ApplicationJsonObject?: Map<string, any>;
}
