import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetVolumesSortEnum {
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
export declare enum GetVolumesStatusEnum {
    Available = "available",
    Creating = "creating"
}
export declare class GetVolumesQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
    sort?: GetVolumesSortEnum;
    status?: GetVolumesStatusEnum;
}
export declare class GetVolumes200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetVolumes200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetVolumes200ApplicationJsonMetaPagination;
}
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export declare class GetVolumes200ApplicationJsonVolumesLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
/**
 * Protection configuration for the Resource
**/
export declare class GetVolumes200ApplicationJsonVolumesProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetVolumes200ApplicationJsonVolumesStatusEnum {
    Creating = "creating",
    Available = "available"
}
export declare class GetVolumes200ApplicationJsonVolumes extends SpeakeasyBase {
    created: string;
    format: string;
    id: number;
    labels: Map<string, string>;
    linuxDevice: string;
    location: GetVolumes200ApplicationJsonVolumesLocation;
    name: string;
    protection: GetVolumes200ApplicationJsonVolumesProtection;
    server: number;
    size: number;
    status: GetVolumes200ApplicationJsonVolumesStatusEnum;
}
export declare class GetVolumes200ApplicationJson extends SpeakeasyBase {
    meta?: GetVolumes200ApplicationJsonMeta;
    volumes: GetVolumes200ApplicationJsonVolumes[];
}
export declare class GetVolumesRequest extends SpeakeasyBase {
    queryParams: GetVolumesQueryParams;
}
export declare class GetVolumesResponse extends SpeakeasyBase {
    contentType: string;
    getVolumes200ApplicationJsonObject?: GetVolumes200ApplicationJson;
    statusCode: number;
}
