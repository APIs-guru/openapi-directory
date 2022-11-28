import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutVolumesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


// PutVolumesIdUpdateVolumeRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PutVolumesIdUpdateVolumeRequestLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


export class PutVolumesIdUpdateVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: PutVolumesIdUpdateVolumeRequestLabels;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// PutVolumesId200ApplicationJsonVolumeLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class PutVolumesId200ApplicationJsonVolumeLocation extends SpeakeasyBase {
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


// PutVolumesId200ApplicationJsonVolumeProtection
/** 
 * Protection configuration for the Resource
**/
export class PutVolumesId200ApplicationJsonVolumeProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutVolumesId200ApplicationJsonVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}


export class PutVolumesId200ApplicationJsonVolume extends SpeakeasyBase {
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
  location: PutVolumesId200ApplicationJsonVolumeLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PutVolumesId200ApplicationJsonVolumeProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PutVolumesId200ApplicationJsonVolumeStatusEnum;
}


export class PutVolumesId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: PutVolumesId200ApplicationJsonVolume;
}


export class PutVolumesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVolumesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutVolumesIdUpdateVolumeRequest;
}


export class PutVolumesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putVolumesId200ApplicationJsonObject?: PutVolumesId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
