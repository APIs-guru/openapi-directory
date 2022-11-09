import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkEventsProductTypeEnum {
    Wireless = "wireless"
,    Appliance = "appliance"
,    Switch = "switch"
,    SystemsManager = "systemsManager"
,    Camera = "camera"
,    CellularGateway = "cellularGateway"
}


export class GetNetworkEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=clientIp" })
  clientIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientMac" })
  clientMac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientName" })
  clientName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceMac" })
  deviceMac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=excludedEventTypes" })
  excludedEventTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=includedEventTypes" })
  includedEventTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=productType" })
  productType?: GetNetworkEventsProductTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=smDeviceMac" })
  smDeviceMac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=smDeviceName" })
  smDeviceName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkEventsPathParams;

  @Metadata()
  queryParams: GetNetworkEventsQueryParams;
}


export class GetNetworkEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkEvents200ApplicationJsonObject?: Map<string, any>;
}
