import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCameraWirelessProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCameraWirelessProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCameraWirelessProfilesPathParams;
}


export class GetNetworkCameraWirelessProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
