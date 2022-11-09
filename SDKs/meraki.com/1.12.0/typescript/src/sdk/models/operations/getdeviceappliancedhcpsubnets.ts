import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceApplianceDhcpSubnetsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceApplianceDhcpSubnetsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceApplianceDhcpSubnetsPathParams;
}


export class GetDeviceApplianceDhcpSubnetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceApplianceDhcpSubnets200ApplicationJsonObject?: Map<string, any>;
}
