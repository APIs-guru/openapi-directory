import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceSecurityCentersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceSecurityCentersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceSecurityCentersPathParams;
}


export class GetNetworkSmDeviceSecurityCentersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceSecurityCenters200ApplicationJsonObject?: Map<string, any>;
}
