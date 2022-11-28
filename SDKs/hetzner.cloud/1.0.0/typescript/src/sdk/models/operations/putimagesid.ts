import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutImagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PutImagesIdUpdateImageRequestTypeEnum {
    Snapshot = "snapshot"
}


export class PutImagesIdUpdateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PutImagesIdUpdateImageRequestTypeEnum;
}


// PutImagesId200ApplicationJsonImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PutImagesId200ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum PutImagesId200ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// PutImagesId200ApplicationJsonImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PutImagesId200ApplicationJsonImageProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutImagesId200ApplicationJsonImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum PutImagesId200ApplicationJsonImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class PutImagesId200ApplicationJsonImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: PutImagesId200ApplicationJsonImageCreatedFrom;

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
  osFlavor: PutImagesId200ApplicationJsonImageOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PutImagesId200ApplicationJsonImageProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PutImagesId200ApplicationJsonImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutImagesId200ApplicationJsonImageTypeEnum;
}


export class PutImagesId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PutImagesId200ApplicationJsonImage;
}


export class PutImagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutImagesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutImagesIdUpdateImageRequest;
}


export class PutImagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putImagesId200ApplicationJsonObject?: PutImagesId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
