import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostVolumesCreateVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automount" })
  automount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}


// PostVolumes201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumes201ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumes201ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumes201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostVolumes201ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostVolumes201ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumes201ApplicationJsonActionResources })
  resources: PostVolumes201ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostVolumes201ApplicationJsonActionStatusEnum;
}


// PostVolumes201ApplicationJsonVolumeLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class PostVolumes201ApplicationJsonVolumeLocation extends SpeakeasyBase {
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


// PostVolumes201ApplicationJsonVolumeProtection
/** 
 * Protection configuration for the Resource
**/
export class PostVolumes201ApplicationJsonVolumeProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostVolumes201ApplicationJsonVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}


export class PostVolumes201ApplicationJsonVolume extends SpeakeasyBase {
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
  location: PostVolumes201ApplicationJsonVolumeLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PostVolumes201ApplicationJsonVolumeProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostVolumes201ApplicationJsonVolumeStatusEnum;
}


export class PostVolumes201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostVolumes201ApplicationJsonAction;

  @SpeakeasyMetadata({ data: "json, name=next_actions", elemType: PostVolumes201ApplicationJsonAction })
  nextActions: PostVolumes201ApplicationJsonAction[];

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: PostVolumes201ApplicationJsonVolume;
}


export class PostVolumesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostVolumesCreateVolumeRequest;
}


export class PostVolumesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postVolumes201ApplicationJsonObject?: PostVolumes201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
