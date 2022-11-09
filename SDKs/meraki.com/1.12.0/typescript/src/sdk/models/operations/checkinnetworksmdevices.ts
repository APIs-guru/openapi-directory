import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckinNetworkSmDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CheckinNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=scope" })
  scope?: string[];

  @Metadata({ data: "json, name=serials" })
  serials?: string[];

  @Metadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class CheckinNetworkSmDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckinNetworkSmDevicesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CheckinNetworkSmDevicesRequestBody;
}


export class CheckinNetworkSmDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkinNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
