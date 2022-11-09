import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceLldpCdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceLldpCdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceLldpCdpPathParams;
}


export class GetDeviceLldpCdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceLldpCdp200ApplicationJsonObject?: Map<string, any>;
}
