import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCameraSchedulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCameraSchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCameraSchedulesPathParams;
}


export class GetNetworkCameraSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCameraSchedules200ApplicationJsonObject?: Map<string, any>;
}
