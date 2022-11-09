import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RefreshNetworkSmDeviceDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class RefreshNetworkSmDeviceDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RefreshNetworkSmDeviceDetailsPathParams;
}


export class RefreshNetworkSmDeviceDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
