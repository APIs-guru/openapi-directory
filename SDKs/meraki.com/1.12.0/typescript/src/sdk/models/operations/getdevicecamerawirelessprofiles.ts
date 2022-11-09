import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraWirelessProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraWirelessProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraWirelessProfilesPathParams;
}


export class GetDeviceCameraWirelessProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
