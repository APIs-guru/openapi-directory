import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WipeNetworkSmDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class WipeNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin?: number;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=wifiMac" })
  wifiMac?: string;
}


export class WipeNetworkSmDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WipeNetworkSmDevicesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: WipeNetworkSmDevicesRequestBody;
}


export class WipeNetworkSmDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wipeNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
