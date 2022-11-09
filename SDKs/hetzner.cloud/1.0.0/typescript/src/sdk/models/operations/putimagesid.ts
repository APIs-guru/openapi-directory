import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutImagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PutImagesIdUpdateImageRequestTypeEnum {
    Snapshot = "snapshot"
}


export class PutImagesIdUpdateImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: PutImagesIdUpdateImageRequestTypeEnum;
}


export class PutImagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutImagesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutImagesIdUpdateImageRequest;
}


// PutImagesId200ApplicationJsonImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PutImagesId200ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum PutImagesId200ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// PutImagesId200ApplicationJsonImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PutImagesId200ApplicationJsonImageProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutImagesId200ApplicationJsonImageStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum PutImagesId200ApplicationJsonImageTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class PutImagesId200ApplicationJsonImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: PutImagesId200ApplicationJsonImageCreatedFrom;

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
  osFlavor: PutImagesId200ApplicationJsonImageOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: PutImagesId200ApplicationJsonImageProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: PutImagesId200ApplicationJsonImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: PutImagesId200ApplicationJsonImageTypeEnum;
}


export class PutImagesId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: PutImagesId200ApplicationJsonImage;
}


export class PutImagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putImagesId200ApplicationJsonObject?: PutImagesId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
