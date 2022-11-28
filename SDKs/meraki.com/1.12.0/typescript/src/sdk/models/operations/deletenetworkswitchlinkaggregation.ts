import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkAggregationId" })
  linkAggregationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNetworkSwitchLinkAggregationPathParams;
}


export class DeleteNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
