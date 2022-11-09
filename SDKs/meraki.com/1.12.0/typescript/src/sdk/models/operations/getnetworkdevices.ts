import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkDevicesPathParams;
}


export class GetNetworkDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkDevices200ApplicationJsonObject?: Map<string, any>;
}
