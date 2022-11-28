import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RefreshNetworkSmDeviceDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class RefreshNetworkSmDeviceDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RefreshNetworkSmDeviceDetailsPathParams;
}


export class RefreshNetworkSmDeviceDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
