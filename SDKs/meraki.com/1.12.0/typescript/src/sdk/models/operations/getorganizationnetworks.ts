import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationNetworksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationNetworksTagsFilterTypeEnum {
    WithAnyTags = "withAnyTags"
,    WithAllTags = "withAllTags"
}


export class GetOrganizationNetworksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=configTemplateId" })
  configTemplateId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=tags" })
  tags?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagsFilterType" })
  tagsFilterType?: GetOrganizationNetworksTagsFilterTypeEnum;
}


export class GetOrganizationNetworksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationNetworksPathParams;

  @Metadata()
  queryParams: GetOrganizationNetworksQueryParams;
}


export class GetOrganizationNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationNetworks200ApplicationJsonObject?: Map<string, any>;
}
