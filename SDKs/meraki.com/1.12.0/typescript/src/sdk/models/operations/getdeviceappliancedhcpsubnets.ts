import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceApplianceDhcpSubnetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceApplianceDhcpSubnetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceApplianceDhcpSubnetsPathParams;
}


export class GetDeviceApplianceDhcpSubnetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceApplianceDhcpSubnets200ApplicationJsonObject?: Map<string, any>;
}
