import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetImagesSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}

export enum GetImagesStatusEnum {
    Available = "available",
    Creating = "creating"
}

export enum GetImagesTypeEnum {
    System = "system",
    Snapshot = "snapshot",
    Backup = "backup",
    App = "app"
}


export class GetImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bound_to" })
  boundTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_deprecated" })
  includeDeprecated?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetImagesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetImagesStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetImagesTypeEnum;
}


// GetImages200ApplicationJsonImagesCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetImages200ApplicationJsonImagesCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum GetImages200ApplicationJsonImagesOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// GetImages200ApplicationJsonImagesProtection
/** 
 * Protection configuration for the Resource
**/
export class GetImages200ApplicationJsonImagesProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetImages200ApplicationJsonImagesStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum GetImages200ApplicationJsonImagesTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class GetImages200ApplicationJsonImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: GetImages200ApplicationJsonImagesCreatedFrom;

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
  osFlavor: GetImages200ApplicationJsonImagesOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetImages200ApplicationJsonImagesProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetImages200ApplicationJsonImagesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetImages200ApplicationJsonImagesTypeEnum;
}


export class GetImages200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage: number;

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page" })
  previousPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetImages200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetImages200ApplicationJsonMetaPagination;
}


export class GetImages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: GetImages200ApplicationJsonImages })
  images: GetImages200ApplicationJsonImages[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetImages200ApplicationJsonMeta;
}


export class GetImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetImagesQueryParams;
}


export class GetImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getImages200ApplicationJsonObject?: GetImages200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
