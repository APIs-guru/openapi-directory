import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LockNetworkSmDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class LockNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin?: number;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string[];

  @SpeakeasyMetadata({ data: "json, name=serials" })
  serials?: string[];

  @SpeakeasyMetadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class LockNetworkSmDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LockNetworkSmDevicesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: LockNetworkSmDevicesRequestBody;
}


export class LockNetworkSmDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  lockNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
