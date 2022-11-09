import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceNetworkAdaptersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceNetworkAdaptersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceNetworkAdaptersPathParams;
}


export class GetNetworkSmDeviceNetworkAdaptersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceNetworkAdapters200ApplicationJsonObject?: Map<string, any>;
}
