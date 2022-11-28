import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClaimNetworkDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class ClaimNetworkDevicesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serials" })
  serials: string[];
}


export class ClaimNetworkDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClaimNetworkDevicesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ClaimNetworkDevicesRequestBody;
}


export class ClaimNetworkDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
