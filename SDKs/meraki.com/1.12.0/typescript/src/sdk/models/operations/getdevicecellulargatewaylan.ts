import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCellularGatewayLanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCellularGatewayLanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCellularGatewayLanPathParams;
}


export class GetDeviceCellularGatewayLanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCellularGatewayLan200ApplicationJsonObject?: Map<string, any>;
}
