import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceWlanListsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceWlanListsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceWlanListsPathParams;
}


export class GetNetworkSmDeviceWlanListsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceWlanLists200ApplicationJsonObject?: Map<string, any>;
}
