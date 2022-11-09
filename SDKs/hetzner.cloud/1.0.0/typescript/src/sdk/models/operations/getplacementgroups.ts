import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPlacementGroupsSortEnum {
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

export enum GetPlacementGroupsTypeParameterTypeEnum {
    Spread = "spread"
}


export class GetPlacementGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPlacementGroupsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetPlacementGroupsTypeParameterTypeEnum;
}


export class GetPlacementGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlacementGroupsQueryParams;
}


export class GetPlacementGroupsPlacementGroupsResponseMetaPagination extends SpeakeasyBase {
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


export class GetPlacementGroupsPlacementGroupsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetPlacementGroupsPlacementGroupsResponseMetaPagination;
}

export enum GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class GetPlacementGroupsPlacementGroupsResponsePlacementGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=servers" })
  servers: number[];

  @Metadata({ data: "json, name=type" })
  type: GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum;
}


export class GetPlacementGroupsPlacementGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: GetPlacementGroupsPlacementGroupsResponseMeta;

  @Metadata({ data: "json, name=placement_groups", elemType: operations.GetPlacementGroupsPlacementGroupsResponsePlacementGroup })
  placementGroups: GetPlacementGroupsPlacementGroupsResponsePlacementGroup[];
}


export class GetPlacementGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  placementGroupsResponse?: GetPlacementGroupsPlacementGroupsResponse;

  @Metadata()
  statusCode: number;
}
