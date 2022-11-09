import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LockNetworkSmDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class LockNetworkSmDevicesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=pin" })
  pin?: number;

  @Metadata({ data: "json, name=scope" })
  scope?: string[];

  @Metadata({ data: "json, name=serials" })
  serials?: string[];

  @Metadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class LockNetworkSmDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LockNetworkSmDevicesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: LockNetworkSmDevicesRequestBody;
}


export class LockNetworkSmDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  lockNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
