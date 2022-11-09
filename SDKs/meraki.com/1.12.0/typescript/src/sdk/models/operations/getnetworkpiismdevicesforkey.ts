import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkPiiSmDevicesForKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkPiiSmDevicesForKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bluetoothMac" })
  bluetoothMac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imei" })
  imei?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac" })
  mac?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetNetworkPiiSmDevicesForKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkPiiSmDevicesForKeyPathParams;

  @Metadata()
  queryParams: GetNetworkPiiSmDevicesForKeyQueryParams;
}


export class GetNetworkPiiSmDevicesForKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkPiiSmDevicesForKey200ApplicationJsonObject?: Map<string, any>;
}
