import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceCameraWirelessProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


// UpdateDeviceCameraWirelessProfilesRequestBodyIds
/** 
 * The ids of the wireless profile to assign to the given camera
**/
export class UpdateDeviceCameraWirelessProfilesRequestBodyIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary" })
  secondary?: string;
}


export class UpdateDeviceCameraWirelessProfilesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: UpdateDeviceCameraWirelessProfilesRequestBodyIds;
}


export class UpdateDeviceCameraWirelessProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceCameraWirelessProfilesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDeviceCameraWirelessProfilesRequestBody;
}


export class UpdateDeviceCameraWirelessProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
