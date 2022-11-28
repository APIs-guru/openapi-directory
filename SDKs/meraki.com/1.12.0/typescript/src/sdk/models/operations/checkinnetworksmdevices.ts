import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckinNetworkSmDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CheckinNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string[];

  @SpeakeasyMetadata({ data: "json, name=serials" })
  serials?: string[];

  @SpeakeasyMetadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class CheckinNetworkSmDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckinNetworkSmDevicesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CheckinNetworkSmDevicesRequestBody;
}


export class CheckinNetworkSmDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkinNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
