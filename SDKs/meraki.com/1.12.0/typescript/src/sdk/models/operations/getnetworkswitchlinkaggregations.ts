import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchLinkAggregationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchLinkAggregationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchLinkAggregationsPathParams;
}


export class GetNetworkSwitchLinkAggregationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchLinkAggregations200ApplicationJsonObject?: Map<string, any>;
}
