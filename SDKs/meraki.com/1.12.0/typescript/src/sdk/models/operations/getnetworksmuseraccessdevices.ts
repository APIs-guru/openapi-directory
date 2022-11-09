import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmUserAccessDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmUserAccessDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkSmUserAccessDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmUserAccessDevicesPathParams;

  @Metadata()
  queryParams: GetNetworkSmUserAccessDevicesQueryParams;
}


export class GetNetworkSmUserAccessDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmUserAccessDevices200ApplicationJsonObject?: Map<string, any>;
}
