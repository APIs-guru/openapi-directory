import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceAppliancePerformancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceAppliancePerformanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceAppliancePerformancePathParams;
}


export class GetDeviceAppliancePerformanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceAppliancePerformance200ApplicationJsonObject?: Map<string, any>;
}
