import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetImagesSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Name = "name"
,    NameAsc = "name:asc"
,    NameDesc = "name:desc"
,    Created = "created"
,    CreatedAsc = "created:asc"
,    CreatedDesc = "created:desc"
}

export enum GetImagesStatusEnum {
    Available = "available"
,    Creating = "creating"
}

export enum GetImagesTypeEnum {
    System = "system"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    App = "app"
}


export class GetImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bound_to" })
  boundTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_deprecated" })
  includeDeprecated?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetImagesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetImagesStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetImagesTypeEnum;
}


export class GetImagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetImagesQueryParams;
}


// GetImages200ApplicationJsonImagesCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetImages200ApplicationJsonImagesCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum GetImages200ApplicationJsonImagesOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// GetImages200ApplicationJsonImagesProtection
/** 
 * Protection configuration for the Resource
**/
export class GetImages200ApplicationJsonImagesProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetImages200ApplicationJsonImagesStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum GetImages200ApplicationJsonImagesTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class GetImages200ApplicationJsonImages extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: GetImages200ApplicationJsonImagesCreatedFrom;

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
  osFlavor: GetImages200ApplicationJsonImagesOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetImages200ApplicationJsonImagesProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: GetImages200ApplicationJsonImagesStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: GetImages200ApplicationJsonImagesTypeEnum;
}


export class GetImages200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_page" })
  lastPage: number;

  @Metadata({ data: "json, name=next_page" })
  nextPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=previous_page" })
  previousPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetImages200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetImages200ApplicationJsonMetaPagination;
}


export class GetImages200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=images", elemType: operations.GetImages200ApplicationJsonImages })
  images: GetImages200ApplicationJsonImages[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetImages200ApplicationJsonMeta;
}


export class GetImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getImages200ApplicationJsonObject?: GetImages200ApplicationJson;

  @Metadata()
  statusCode: number;
}
