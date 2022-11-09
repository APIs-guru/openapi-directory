import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCameraSchedulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCameraSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCameraSchedulesPathParams;
}


export class GetNetworkCameraSchedulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCameraSchedules200ApplicationJsonObject?: Map<string, any>;
}
