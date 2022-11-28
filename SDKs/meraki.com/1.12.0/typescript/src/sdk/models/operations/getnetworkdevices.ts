import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkDevicesPathParams;
}


export class GetNetworkDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkDevices200ApplicationJsonObject?: Map<string, any>;
}
