import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceManagementInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceManagementInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceManagementInterfacePathParams;
}


export class GetDeviceManagementInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
