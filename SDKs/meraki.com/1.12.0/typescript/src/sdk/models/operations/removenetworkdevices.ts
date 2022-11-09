import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveNetworkDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class RemoveNetworkDevicesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=serial" })
  serial: string;
}


export class RemoveNetworkDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveNetworkDevicesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveNetworkDevicesRequestBody;
}


export class RemoveNetworkDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
