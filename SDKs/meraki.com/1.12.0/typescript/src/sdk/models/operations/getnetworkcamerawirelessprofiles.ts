import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCameraWirelessProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCameraWirelessProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCameraWirelessProfilesPathParams;
}


export class GetNetworkCameraWirelessProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
