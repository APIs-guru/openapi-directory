import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceCertsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceCertsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceCertsPathParams;
}


export class GetNetworkSmDeviceCertsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceCerts200ApplicationJsonObject?: Map<string, any>;
}
