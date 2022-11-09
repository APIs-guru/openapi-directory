import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientsUsageHistoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientsUsageHistoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=clients" })
  clients: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ssidNumber" })
  ssidNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkClientsUsageHistoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientsUsageHistoriesPathParams;

  @Metadata()
  queryParams: GetNetworkClientsUsageHistoriesQueryParams;
}


export class GetNetworkClientsUsageHistoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClientsUsageHistories200ApplicationJsonObject?: Map<string, any>;
}
