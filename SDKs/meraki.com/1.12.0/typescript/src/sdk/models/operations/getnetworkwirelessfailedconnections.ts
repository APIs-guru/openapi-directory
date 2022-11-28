import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessFailedConnectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessFailedConnectionsBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetNetworkWirelessFailedConnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessFailedConnectionsBandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" })
  ssid?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" })
  vlan?: number;
}


export class GetNetworkWirelessFailedConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessFailedConnectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessFailedConnectionsQueryParams;
}


export class GetNetworkWirelessFailedConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessFailedConnections200ApplicationJsonObject?: Map<string, any>;
}
