import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnenrollNetworkSmDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UnenrollNetworkSmDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnenrollNetworkSmDevicePathParams;
}


export class UnenrollNetworkSmDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unenrollNetworkSmDevice200ApplicationJsonObject?: Map<string, any>;
}
