import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=wirelessProfileId" })
  wirelessProfileId: string;
}


export class DeleteNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkCameraWirelessProfilePathParams;
}


export class DeleteNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
