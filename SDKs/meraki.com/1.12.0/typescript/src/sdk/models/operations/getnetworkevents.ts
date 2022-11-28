import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkEventsProductTypeEnum {
    Wireless = "wireless",
    Appliance = "appliance",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Camera = "camera",
    CellularGateway = "cellularGateway"
}


export class GetNetworkEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientIp" })
  clientIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientMac" })
  clientMac?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientName" })
  clientName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceMac" })
  deviceMac?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludedEventTypes" })
  excludedEventTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=includedEventTypes" })
  includedEventTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productType" })
  productType?: GetNetworkEventsProductTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=smDeviceMac" })
  smDeviceMac?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=smDeviceName" })
  smDeviceName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkEventsQueryParams;
}


export class GetNetworkEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkEvents200ApplicationJsonObject?: Map<string, any>;
}
