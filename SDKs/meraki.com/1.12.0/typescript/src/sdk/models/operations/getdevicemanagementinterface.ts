import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceManagementInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceManagementInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceManagementInterfacePathParams;
}


export class GetDeviceManagementInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
