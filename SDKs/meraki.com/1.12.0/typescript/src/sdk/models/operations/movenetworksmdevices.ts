import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MoveNetworkSmDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class MoveNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=newNetwork" })
  newNetwork: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string[];

  @SpeakeasyMetadata({ data: "json, name=serials" })
  serials?: string[];

  @SpeakeasyMetadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class MoveNetworkSmDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MoveNetworkSmDevicesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: MoveNetworkSmDevicesRequestBody;
}


export class MoveNetworkSmDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  moveNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
