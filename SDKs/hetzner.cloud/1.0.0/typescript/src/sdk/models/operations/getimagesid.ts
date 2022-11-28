import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetImagesId200ApplicationJsonImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetImagesId200ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum GetImagesId200ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// GetImagesId200ApplicationJsonImageProtection
/** 
 * Protection configuration for the Resource
**/
export class GetImagesId200ApplicationJsonImageProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetImagesId200ApplicationJsonImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum GetImagesId200ApplicationJsonImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class GetImagesId200ApplicationJsonImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: GetImagesId200ApplicationJsonImageCreatedFrom;

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
  osFlavor: GetImagesId200ApplicationJsonImageOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetImagesId200ApplicationJsonImageProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetImagesId200ApplicationJsonImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetImagesId200ApplicationJsonImageTypeEnum;
}


export class GetImagesId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GetImagesId200ApplicationJsonImage;
}


export class GetImagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagesIdPathParams;
}


export class GetImagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getImagesId200ApplicationJsonObject?: GetImagesId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
