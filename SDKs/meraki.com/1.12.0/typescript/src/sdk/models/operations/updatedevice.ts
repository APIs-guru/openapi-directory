import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=floorPlanId" })
  floorPlanId?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;

  @Metadata({ data: "json, name=moveMapMarker" })
  moveMapMarker?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=switchProfileId" })
  switchProfileId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDevicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceRequestBody;
}


export class UpdateDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDevice200ApplicationJsonObject?: Map<string, any>;
}
