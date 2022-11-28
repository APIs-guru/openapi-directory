import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wirelessProfileId" })
  wirelessProfileId: string;
}


export class GetNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCameraWirelessProfilePathParams;
}


export class GetNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
