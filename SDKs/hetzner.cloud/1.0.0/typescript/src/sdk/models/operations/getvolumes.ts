import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetVolumesSortEnum {
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

export enum GetVolumesStatusEnum {
    Available = "available",
    Creating = "creating"
}


export class GetVolumesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVolumesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetVolumesStatusEnum;
}


export class GetVolumes200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetVolumes200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetVolumes200ApplicationJsonMetaPagination;
}


// GetVolumes200ApplicationJsonVolumesLocation
/** 
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export class GetVolumes200ApplicationJsonVolumesLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetVolumes200ApplicationJsonVolumesProtection
/** 
 * Protection configuration for the Resource
**/
export class GetVolumes200ApplicationJsonVolumesProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetVolumes200ApplicationJsonVolumesStatusEnum {
    Creating = "creating",
    Available = "available"
}


export class GetVolumes200ApplicationJsonVolumes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linux_device" })
  linuxDevice: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetVolumes200ApplicationJsonVolumesLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetVolumes200ApplicationJsonVolumesProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetVolumes200ApplicationJsonVolumesStatusEnum;
}


export class GetVolumes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetVolumes200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: GetVolumes200ApplicationJsonVolumes })
  volumes: GetVolumes200ApplicationJsonVolumes[];
}


export class GetVolumesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVolumesQueryParams;
}


export class GetVolumesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getVolumes200ApplicationJsonObject?: GetVolumes200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
