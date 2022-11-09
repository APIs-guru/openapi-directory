import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceAppliancePerformancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceAppliancePerformanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceAppliancePerformancePathParams;
}


export class GetDeviceAppliancePerformanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceAppliancePerformance200ApplicationJsonObject?: Map<string, any>;
}
