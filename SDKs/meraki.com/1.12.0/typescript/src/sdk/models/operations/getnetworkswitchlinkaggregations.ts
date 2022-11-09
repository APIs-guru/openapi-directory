import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchLinkAggregationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchLinkAggregationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchLinkAggregationsPathParams;
}


export class GetNetworkSwitchLinkAggregationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchLinkAggregations200ApplicationJsonObject?: Map<string, any>;
}
