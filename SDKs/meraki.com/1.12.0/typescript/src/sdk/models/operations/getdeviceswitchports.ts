import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchPortsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchPortsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchPortsPathParams;
}


export class GetDeviceSwitchPortsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchPorts200ApplicationJsonObject?: Map<string, any>;
}
