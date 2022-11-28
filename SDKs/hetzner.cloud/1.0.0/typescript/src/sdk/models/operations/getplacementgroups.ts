import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPlacementGroupsSortEnum {
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

export enum GetPlacementGroupsTypeParameterTypeEnum {
    Spread = "spread"
}


export class GetPlacementGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPlacementGroupsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetPlacementGroupsTypeParameterTypeEnum;
}


export class GetPlacementGroupsPlacementGroupsResponseMetaPagination extends SpeakeasyBase {
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


export class GetPlacementGroupsPlacementGroupsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetPlacementGroupsPlacementGroupsResponseMetaPagination;
}

export enum GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class GetPlacementGroupsPlacementGroupsResponsePlacementGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: number[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum;
}


export class GetPlacementGroupsPlacementGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetPlacementGroupsPlacementGroupsResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=placement_groups", elemType: GetPlacementGroupsPlacementGroupsResponsePlacementGroup })
  placementGroups: GetPlacementGroupsPlacementGroupsResponsePlacementGroup[];
}


export class GetPlacementGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlacementGroupsQueryParams;
}


export class GetPlacementGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  placementGroupsResponse?: GetPlacementGroupsPlacementGroupsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
