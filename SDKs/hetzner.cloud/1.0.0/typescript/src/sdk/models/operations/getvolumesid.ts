import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVolumesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetVolumesId200ApplicationJsonVolumeLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class GetVolumesId200ApplicationJsonVolumeLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetVolumesId200ApplicationJsonVolumeProtection
/** 
 * Protection configuration for the Resource
**/
export class GetVolumesId200ApplicationJsonVolumeProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetVolumesId200ApplicationJsonVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}


export class GetVolumesId200ApplicationJsonVolume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linux_device" })
  linuxDevice: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetVolumesId200ApplicationJsonVolumeLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetVolumesId200ApplicationJsonVolumeProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetVolumesId200ApplicationJsonVolumeStatusEnum;
}


export class GetVolumesId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: GetVolumesId200ApplicationJsonVolume;
}


export class GetVolumesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVolumesIdPathParams;
}


export class GetVolumesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getVolumesId200ApplicationJsonObject?: GetVolumesId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
