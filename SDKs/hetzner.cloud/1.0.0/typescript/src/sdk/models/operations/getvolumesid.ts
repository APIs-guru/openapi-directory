import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVolumesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetVolumesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVolumesIdPathParams;
}


// GetVolumesId200ApplicationJsonVolumeLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class GetVolumesId200ApplicationJsonVolumeLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=latitude" })
  latitude: number;

  @Metadata({ data: "json, name=longitude" })
  longitude: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetVolumesId200ApplicationJsonVolumeProtection
/** 
 * Protection configuration for the Resource
**/
export class GetVolumesId200ApplicationJsonVolumeProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetVolumesId200ApplicationJsonVolumeStatusEnum {
    Creating = "creating"
,    Available = "available"
}


export class GetVolumesId200ApplicationJsonVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=format" })
  format: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=linux_device" })
  linuxDevice: string;

  @Metadata({ data: "json, name=location" })
  location: GetVolumesId200ApplicationJsonVolumeLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetVolumesId200ApplicationJsonVolumeProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=status" })
  status: GetVolumesId200ApplicationJsonVolumeStatusEnum;
}


export class GetVolumesId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=volume" })
  volume: GetVolumesId200ApplicationJsonVolume;
}


export class GetVolumesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getVolumesId200ApplicationJsonObject?: GetVolumesId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
