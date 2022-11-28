import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rfProfileId" })
  rfProfileId: string;
}


export class DeleteNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNetworkWirelessRfProfilePathParams;
}


export class DeleteNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
