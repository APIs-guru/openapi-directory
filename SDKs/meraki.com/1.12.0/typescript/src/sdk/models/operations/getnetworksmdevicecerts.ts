import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSmDeviceCertsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceCertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSmDeviceCertsPathParams;
}


export class GetNetworkSmDeviceCertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSmDeviceCerts200ApplicationJsonObject?: Map<string, any>;
}
