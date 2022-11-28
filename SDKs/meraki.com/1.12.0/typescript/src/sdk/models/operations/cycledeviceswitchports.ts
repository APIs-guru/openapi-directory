import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CycleDeviceSwitchPortsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class CycleDeviceSwitchPortsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string[];
}


export class CycleDeviceSwitchPortsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CycleDeviceSwitchPortsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CycleDeviceSwitchPortsRequestBody;
}


export class CycleDeviceSwitchPortsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cycleDeviceSwitchPorts200ApplicationJsonObject?: Map<string, any>;
}
