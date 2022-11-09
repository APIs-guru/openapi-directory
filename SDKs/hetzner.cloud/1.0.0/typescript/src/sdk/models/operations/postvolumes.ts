import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostVolumesCreateVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=automount" })
  automount?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=server" })
  server?: number;

  @Metadata({ data: "json, name=size" })
  size: number;
}


export class PostVolumesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostVolumesCreateVolumeRequest;
}


// PostVolumes201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumes201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumes201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumes201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostVolumes201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostVolumes201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostVolumes201ApplicationJsonActionResources })
  resources: PostVolumes201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostVolumes201ApplicationJsonActionStatusEnum;
}


// PostVolumes201ApplicationJsonVolumeLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class PostVolumes201ApplicationJsonVolumeLocation extends SpeakeasyBase {
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


// PostVolumes201ApplicationJsonVolumeProtection
/** 
 * Protection configuration for the Resource
**/
export class PostVolumes201ApplicationJsonVolumeProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostVolumes201ApplicationJsonVolumeStatusEnum {
    Creating = "creating"
,    Available = "available"
}


export class PostVolumes201ApplicationJsonVolume extends SpeakeasyBase {
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
  location: PostVolumes201ApplicationJsonVolumeLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: PostVolumes201ApplicationJsonVolumeProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=status" })
  status: PostVolumes201ApplicationJsonVolumeStatusEnum;
}


export class PostVolumes201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostVolumes201ApplicationJsonAction;

  @Metadata({ data: "json, name=next_actions", elemType: operations.PostVolumes201ApplicationJsonAction })
  nextActions: PostVolumes201ApplicationJsonAction[];

  @Metadata({ data: "json, name=volume" })
  volume: PostVolumes201ApplicationJsonVolume;
}


export class PostVolumesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postVolumes201ApplicationJsonObject?: PostVolumes201ApplicationJson;

  @Metadata()
  statusCode: number;
}
