import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnenrollNetworkSmDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UnenrollNetworkSmDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnenrollNetworkSmDevicePathParams;
}


export class UnenrollNetworkSmDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unenrollNetworkSmDevice200ApplicationJsonObject?: Map<string, any>;
}
