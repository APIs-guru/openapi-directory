import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetVolumesSortEnum {
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

export enum GetVolumesStatusEnum {
    Available = "available"
,    Creating = "creating"
}


export class GetVolumesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVolumesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetVolumesStatusEnum;
}


export class GetVolumesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVolumesQueryParams;
}


export class GetVolumes200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetVolumes200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetVolumes200ApplicationJsonMetaPagination;
}


// GetVolumes200ApplicationJsonVolumesLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class GetVolumes200ApplicationJsonVolumesLocation extends SpeakeasyBase {
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


// GetVolumes200ApplicationJsonVolumesProtection
/** 
 * Protection configuration for the Resource
**/
export class GetVolumes200ApplicationJsonVolumesProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetVolumes200ApplicationJsonVolumesStatusEnum {
    Creating = "creating"
,    Available = "available"
}


export class GetVolumes200ApplicationJsonVolumes extends SpeakeasyBase {
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
  location: GetVolumes200ApplicationJsonVolumesLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetVolumes200ApplicationJsonVolumesProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=status" })
  status: GetVolumes200ApplicationJsonVolumesStatusEnum;
}


export class GetVolumes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: GetVolumes200ApplicationJsonMeta;

  @Metadata({ data: "json, name=volumes", elemType: operations.GetVolumes200ApplicationJsonVolumes })
  volumes: GetVolumes200ApplicationJsonVolumes[];
}


export class GetVolumesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getVolumes200ApplicationJsonObject?: GetVolumes200ApplicationJson;

  @Metadata()
  statusCode: number;
}
