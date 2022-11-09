import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCellularGatewayLanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCellularGatewayLanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCellularGatewayLanPathParams;
}


export class GetDeviceCellularGatewayLanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCellularGatewayLan200ApplicationJsonObject?: Map<string, any>;
}
