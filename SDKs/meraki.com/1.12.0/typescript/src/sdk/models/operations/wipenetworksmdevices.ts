import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WipeNetworkSmDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class WipeNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=pin" })
  pin?: number;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=wifiMac" })
  wifiMac?: string;
}


export class WipeNetworkSmDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WipeNetworkSmDevicesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: WipeNetworkSmDevicesRequestBody;
}


export class WipeNetworkSmDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wipeNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
