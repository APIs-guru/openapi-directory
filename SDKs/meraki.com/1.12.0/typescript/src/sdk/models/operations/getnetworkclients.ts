import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkClientsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkClientsRecentDeviceConnectionsEnum {
    Wired = "Wired",
    Wireless = "Wireless"
}

export enum GetNetworkClientsStatusesEnum {
    Online = "Online",
    Offline = "Offline"
}


export class GetNetworkClientsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip6" })
  ip6?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip6Local" })
  ip6Local?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac" })
  mac?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=recentDeviceConnections" })
  recentDeviceConnections?: GetNetworkClientsRecentDeviceConnectionsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=statuses" })
  statuses?: GetNetworkClientsStatusesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkClientsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkClientsQueryParams;
}


export class GetNetworkClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkClients200ApplicationJsonObject?: Map<string, any>;
}
