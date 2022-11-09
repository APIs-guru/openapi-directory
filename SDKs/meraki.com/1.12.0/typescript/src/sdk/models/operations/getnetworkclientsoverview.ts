import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientsOverviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientsOverviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkClientsOverviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientsOverviewPathParams;

  @Metadata()
  queryParams: GetNetworkClientsOverviewQueryParams;
}


export class GetNetworkClientsOverviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClientsOverview200ApplicationJsonObject?: Map<string, any>;
}
