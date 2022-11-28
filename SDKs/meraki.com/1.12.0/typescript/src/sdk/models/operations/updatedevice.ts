import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=floorPlanId" })
  floorPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "json, name=moveMapMarker" })
  moveMapMarker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=switchProfileId" })
  switchProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDevicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceRequestBody;
}


export class UpdateDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDevice200ApplicationJsonObject?: Map<string, any>;
}
