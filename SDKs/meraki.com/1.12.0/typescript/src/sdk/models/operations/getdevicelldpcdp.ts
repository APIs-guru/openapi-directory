import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceLldpCdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceLldpCdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceLldpCdpPathParams;
}


export class GetDeviceLldpCdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceLldpCdp200ApplicationJsonObject?: Map<string, any>;
}
