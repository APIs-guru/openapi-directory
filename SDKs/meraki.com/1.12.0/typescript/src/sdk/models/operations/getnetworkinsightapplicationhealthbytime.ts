import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkInsightApplicationHealthByTimePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkInsightApplicationHealthByTimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkInsightApplicationHealthByTimeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkInsightApplicationHealthByTimePathParams;

  @Metadata()
  queryParams: GetNetworkInsightApplicationHealthByTimeQueryParams;
}


export class GetNetworkInsightApplicationHealthByTimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkInsightApplicationHealthByTime200ApplicationJsonObject?: Map<string, any>;
}
