import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceCameraWirelessProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


// UpdateDeviceCameraWirelessProfilesRequestBodyIds
/** 
 * The ids of the wireless profile to assign to the given camera
**/
export class UpdateDeviceCameraWirelessProfilesRequestBodyIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=primary" })
  primary?: string;

  @Metadata({ data: "json, name=secondary" })
  secondary?: string;
}


export class UpdateDeviceCameraWirelessProfilesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: UpdateDeviceCameraWirelessProfilesRequestBodyIds;
}


export class UpdateDeviceCameraWirelessProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceCameraWirelessProfilesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDeviceCameraWirelessProfilesRequestBody;
}


export class UpdateDeviceCameraWirelessProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
