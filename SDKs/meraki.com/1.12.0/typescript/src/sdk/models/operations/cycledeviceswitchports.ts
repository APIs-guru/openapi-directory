import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CycleDeviceSwitchPortsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class CycleDeviceSwitchPortsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ports" })
  ports: string[];
}


export class CycleDeviceSwitchPortsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CycleDeviceSwitchPortsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CycleDeviceSwitchPortsRequestBody;
}


export class CycleDeviceSwitchPortsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cycleDeviceSwitchPorts200ApplicationJsonObject?: Map<string, any>;
}
