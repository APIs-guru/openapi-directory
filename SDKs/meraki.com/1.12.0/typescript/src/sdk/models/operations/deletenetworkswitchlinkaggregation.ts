import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSwitchLinkAggregationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linkAggregationId" })
  linkAggregationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSwitchLinkAggregationPathParams;
}


export class DeleteNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
