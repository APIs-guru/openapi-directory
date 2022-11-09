import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MoveNetworkSmDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class MoveNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=newNetwork" })
  newNetwork: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string[];

  @Metadata({ data: "json, name=serials" })
  serials?: string[];

  @Metadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class MoveNetworkSmDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MoveNetworkSmDevicesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: MoveNetworkSmDevicesRequestBody;
}


export class MoveNetworkSmDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  moveNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
