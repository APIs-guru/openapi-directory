import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutVolumesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


// PutVolumesIdUpdateVolumeRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PutVolumesIdUpdateVolumeRequestLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


export class PutVolumesIdUpdateVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: PutVolumesIdUpdateVolumeRequestLabels;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class PutVolumesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutVolumesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutVolumesIdUpdateVolumeRequest;
}


// PutVolumesId200ApplicationJsonVolumeLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class PutVolumesId200ApplicationJsonVolumeLocation extends SpeakeasyBase {
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


// PutVolumesId200ApplicationJsonVolumeProtection
/** 
 * Protection configuration for the Resource
**/
export class PutVolumesId200ApplicationJsonVolumeProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutVolumesId200ApplicationJsonVolumeStatusEnum {
    Creating = "creating"
,    Available = "available"
}


export class PutVolumesId200ApplicationJsonVolume extends SpeakeasyBase {
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
  location: PutVolumesId200ApplicationJsonVolumeLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: PutVolumesId200ApplicationJsonVolumeProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=status" })
  status: PutVolumesId200ApplicationJsonVolumeStatusEnum;
}


export class PutVolumesId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=volume" })
  volume: PutVolumesId200ApplicationJsonVolume;
}


export class PutVolumesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putVolumesId200ApplicationJsonObject?: PutVolumesId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
