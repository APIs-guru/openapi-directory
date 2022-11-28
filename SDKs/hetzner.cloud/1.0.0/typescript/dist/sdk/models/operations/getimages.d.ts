import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetImagesSortEnum {
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
export declare enum GetImagesStatusEnum {
    Available = "available",
    Creating = "creating"
}
export declare enum GetImagesTypeEnum {
    System = "system",
    Snapshot = "snapshot",
    Backup = "backup",
    App = "app"
}
export declare class GetImagesQueryParams extends SpeakeasyBase {
    boundTo?: string;
    includeDeprecated?: boolean;
    labelSelector?: string;
    name?: string;
    sort?: GetImagesSortEnum;
    status?: GetImagesStatusEnum;
    type?: GetImagesTypeEnum;
}
/**
 * Information about the Server the Image was created from
**/
export declare class GetImages200ApplicationJsonImagesCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum GetImages200ApplicationJsonImagesOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class GetImages200ApplicationJsonImagesProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetImages200ApplicationJsonImagesStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum GetImages200ApplicationJsonImagesTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class GetImages200ApplicationJsonImages extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: GetImages200ApplicationJsonImagesCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: GetImages200ApplicationJsonImagesOsFlavorEnum;
    osVersion: string;
    protection: GetImages200ApplicationJsonImagesProtection;
    rapidDeploy?: boolean;
    status: GetImages200ApplicationJsonImagesStatusEnum;
    type: GetImages200ApplicationJsonImagesTypeEnum;
}
export declare class GetImages200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetImages200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetImages200ApplicationJsonMetaPagination;
}
export declare class GetImages200ApplicationJson extends SpeakeasyBase {
    images: GetImages200ApplicationJsonImages[];
    meta?: GetImages200ApplicationJsonMeta;
}
export declare class GetImagesRequest extends SpeakeasyBase {
    queryParams: GetImagesQueryParams;
}
export declare class GetImagesResponse extends SpeakeasyBase {
    contentType: string;
    getImages200ApplicationJsonObject?: GetImages200ApplicationJson;
    statusCode: number;
}
