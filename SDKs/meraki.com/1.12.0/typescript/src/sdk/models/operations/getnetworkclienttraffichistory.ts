import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientTrafficHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientTrafficHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkClientTrafficHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientTrafficHistoryPathParams;

  @Metadata()
  queryParams: GetNetworkClientTrafficHistoryQueryParams;
}


export class GetNetworkClientTrafficHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClientTrafficHistory200ApplicationJsonObject?: Map<string, any>;
}
