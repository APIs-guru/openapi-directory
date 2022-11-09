import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rfProfileId" })
  rfProfileId: string;
}


export class DeleteNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkWirelessRfProfilePathParams;
}


export class DeleteNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
