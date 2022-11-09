import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=wirelessProfileId" })
  wirelessProfileId: string;
}


export class GetNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCameraWirelessProfilePathParams;
}


export class GetNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
