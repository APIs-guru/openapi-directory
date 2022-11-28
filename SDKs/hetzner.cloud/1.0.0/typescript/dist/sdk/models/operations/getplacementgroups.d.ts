import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPlacementGroupsSortEnum {
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
export declare enum GetPlacementGroupsTypeParameterTypeEnum {
    Spread = "spread"
}
export declare class GetPlacementGroupsQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
    sort?: GetPlacementGroupsSortEnum;
    type?: GetPlacementGroupsTypeParameterTypeEnum;
}
export declare class GetPlacementGroupsPlacementGroupsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetPlacementGroupsPlacementGroupsResponseMeta extends SpeakeasyBase {
    pagination: GetPlacementGroupsPlacementGroupsResponseMetaPagination;
}
export declare enum GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class GetPlacementGroupsPlacementGroupsResponsePlacementGroup extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum;
}
export declare class GetPlacementGroupsPlacementGroupsResponse extends SpeakeasyBase {
    meta?: GetPlacementGroupsPlacementGroupsResponseMeta;
    placementGroups: GetPlacementGroupsPlacementGroupsResponsePlacementGroup[];
}
export declare class GetPlacementGroupsRequest extends SpeakeasyBase {
    queryParams: GetPlacementGroupsQueryParams;
}
export declare class GetPlacementGroupsResponse extends SpeakeasyBase {
    contentType: string;
    placementGroupsResponse?: GetPlacementGroupsPlacementGroupsResponse;
    statusCode: number;
}
