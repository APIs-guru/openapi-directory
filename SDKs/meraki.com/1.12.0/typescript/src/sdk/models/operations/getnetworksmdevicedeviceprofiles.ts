import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceDeviceProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceDeviceProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceDeviceProfilesPathParams;
}


export class GetNetworkSmDeviceDeviceProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceDeviceProfiles200ApplicationJsonObject?: Map<string, any>;
}
