import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsCreateImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostServersIdActionsCreateImageCreateImageRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PostServersIdActionsCreateImageCreateImageRequestLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelkey" })
  labelkey?: string;
}

export enum PostServersIdActionsCreateImageCreateImageRequestTypeEnum {
    Snapshot = "snapshot",
    Backup = "backup"
}


export class PostServersIdActionsCreateImageCreateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: PostServersIdActionsCreateImageCreateImageRequestLabels;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostServersIdActionsCreateImageCreateImageRequestTypeEnum;
}


// PostServersIdActionsCreateImage201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsCreateImage201ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsCreateImage201ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsCreateImage201ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsCreateImage201ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsCreateImage201ApplicationJsonActionResources })
  resources: PostServersIdActionsCreateImage201ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum;
}


// PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// PostServersIdActionsCreateImage201ApplicationJsonImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PostServersIdActionsCreateImage201ApplicationJsonImageProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class PostServersIdActionsCreateImage201ApplicationJsonImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: string;

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disk_size" })
  diskSize: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=image_size" })
  imageSize: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=os_flavor" })
  osFlavor: PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PostServersIdActionsCreateImage201ApplicationJsonImageProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum;
}


export class PostServersIdActionsCreateImage201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PostServersIdActionsCreateImage201ApplicationJsonAction;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PostServersIdActionsCreateImage201ApplicationJsonImage;
}


export class PostServersIdActionsCreateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsCreateImagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsCreateImageCreateImageRequest;
}


export class PostServersIdActionsCreateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postServersIdActionsCreateImage201ApplicationJsonObject?: PostServersIdActionsCreateImage201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
