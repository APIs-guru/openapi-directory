import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsCreateImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostServersIdActionsCreateImageCreateImageRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PostServersIdActionsCreateImageCreateImageRequestLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelkey" })
  labelkey?: string;
}

export enum PostServersIdActionsCreateImageCreateImageRequestTypeEnum {
    Snapshot = "snapshot"
,    Backup = "backup"
}


export class PostServersIdActionsCreateImageCreateImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: PostServersIdActionsCreateImageCreateImageRequestLabels;

  @Metadata({ data: "json, name=type" })
  type?: PostServersIdActionsCreateImageCreateImageRequestTypeEnum;
}


export class PostServersIdActionsCreateImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsCreateImagePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsCreateImageCreateImageRequest;
}


// PostServersIdActionsCreateImage201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsCreateImage201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsCreateImage201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsCreateImage201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsCreateImage201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsCreateImage201ApplicationJsonActionResources })
  resources: PostServersIdActionsCreateImage201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum;
}


// PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// PostServersIdActionsCreateImage201ApplicationJsonImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PostServersIdActionsCreateImage201ApplicationJsonImageProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class PostServersIdActionsCreateImage201ApplicationJsonImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom;

  @Metadata({ data: "json, name=deleted" })
  deleted: string;

  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disk_size" })
  diskSize: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=image_size" })
  imageSize: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=os_flavor" })
  osFlavor: PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: PostServersIdActionsCreateImage201ApplicationJsonImageProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum;
}


export class PostServersIdActionsCreateImage201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: PostServersIdActionsCreateImage201ApplicationJsonAction;

  @Metadata({ data: "json, name=image" })
  image?: PostServersIdActionsCreateImage201ApplicationJsonImage;
}


export class PostServersIdActionsCreateImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postServersIdActionsCreateImage201ApplicationJsonObject?: PostServersIdActionsCreateImage201ApplicationJson;

  @Metadata()
  statusCode: number;
}
