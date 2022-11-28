import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkInsightApplicationHealthByTimePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkInsightApplicationHealthByTimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkInsightApplicationHealthByTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkInsightApplicationHealthByTimePathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkInsightApplicationHealthByTimeQueryParams;
}


export class GetNetworkInsightApplicationHealthByTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkInsightApplicationHealthByTime200ApplicationJsonObject?: Map<string, any>;
}
