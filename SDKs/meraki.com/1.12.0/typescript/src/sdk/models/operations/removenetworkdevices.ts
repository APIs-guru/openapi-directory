import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveNetworkDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class RemoveNetworkDevicesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;
}


export class RemoveNetworkDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveNetworkDevicesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveNetworkDevicesRequestBody;
}


export class RemoveNetworkDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
