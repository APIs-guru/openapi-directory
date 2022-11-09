import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClaimNetworkDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class ClaimNetworkDevicesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=serials" })
  serials: string[];
}


export class ClaimNetworkDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClaimNetworkDevicesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ClaimNetworkDevicesRequestBody;
}


export class ClaimNetworkDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
