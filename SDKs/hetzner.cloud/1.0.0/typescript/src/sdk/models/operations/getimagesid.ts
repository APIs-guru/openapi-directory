import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetImagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetImagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImagesIdPathParams;
}


// GetImagesId200ApplicationJsonImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetImagesId200ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum GetImagesId200ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// GetImagesId200ApplicationJsonImageProtection
/** 
 * Protection configuration for the Resource
**/
export class GetImagesId200ApplicationJsonImageProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetImagesId200ApplicationJsonImageStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum GetImagesId200ApplicationJsonImageTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class GetImagesId200ApplicationJsonImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: GetImagesId200ApplicationJsonImageCreatedFrom;

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
  osFlavor: GetImagesId200ApplicationJsonImageOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetImagesId200ApplicationJsonImageProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: GetImagesId200ApplicationJsonImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: GetImagesId200ApplicationJsonImageTypeEnum;
}


export class GetImagesId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: GetImagesId200ApplicationJsonImage;
}


export class GetImagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getImagesId200ApplicationJsonObject?: GetImagesId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
