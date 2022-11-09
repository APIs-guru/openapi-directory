import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkBluetoothClientsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkBluetoothClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeConnectivityHistory" })
  includeConnectivityHistory?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkBluetoothClientsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkBluetoothClientsPathParams;

  @Metadata()
  queryParams: GetNetworkBluetoothClientsQueryParams;
}


export class GetNetworkBluetoothClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkBluetoothClients200ApplicationJsonObject?: Map<string, any>;
}
