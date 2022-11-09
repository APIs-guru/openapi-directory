import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkClientsRecentDeviceConnectionsEnum {
    Wired = "Wired"
,    Wireless = "Wireless"
}

export enum GetNetworkClientsStatusesEnum {
    Online = "Online"
,    Offline = "Offline"
}


export class GetNetworkClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip6" })
  ip6?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip6Local" })
  ip6Local?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac" })
  mac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=os" })
  os?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=recentDeviceConnections" })
  recentDeviceConnections?: GetNetworkClientsRecentDeviceConnectionsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=statuses" })
  statuses?: GetNetworkClientsStatusesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkClientsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientsPathParams;

  @Metadata()
  queryParams: GetNetworkClientsQueryParams;
}


export class GetNetworkClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClients200ApplicationJsonObject?: Map<string, any>;
}
