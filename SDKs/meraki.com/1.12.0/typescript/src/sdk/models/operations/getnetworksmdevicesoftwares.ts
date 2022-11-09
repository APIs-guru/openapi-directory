import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceSoftwaresPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceSoftwaresRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceSoftwaresPathParams;
}


export class GetNetworkSmDeviceSoftwaresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceSoftwares200ApplicationJsonObject?: Map<string, any>;
}
