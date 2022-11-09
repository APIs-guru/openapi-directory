import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmUserDeviceProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetNetworkSmUserDeviceProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmUserDeviceProfilesPathParams;
}


export class GetNetworkSmUserDeviceProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmUserDeviceProfiles200ApplicationJsonObject?: Map<string, any>;
}
