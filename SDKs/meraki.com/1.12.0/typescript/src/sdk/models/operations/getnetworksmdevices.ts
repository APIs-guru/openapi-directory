import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=scope" })
  scope?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=serials" })
  serials?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=wifiMacs" })
  wifiMacs?: string[];
}


export class GetNetworkSmDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDevicesPathParams;

  @Metadata()
  queryParams: GetNetworkSmDevicesQueryParams;
}


export class GetNetworkSmDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
