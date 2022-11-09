import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchRoutingStaticRoutesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchRoutingStaticRoutesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchRoutingStaticRoutesPathParams;
}


export class GetDeviceSwitchRoutingStaticRoutesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchRoutingStaticRoutes200ApplicationJsonObject?: Map<string, any>;
}
