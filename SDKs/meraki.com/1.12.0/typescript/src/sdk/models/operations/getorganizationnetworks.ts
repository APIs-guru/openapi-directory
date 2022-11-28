import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationNetworksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationNetworksTagsFilterTypeEnum {
    WithAnyTags = "withAnyTags",
    WithAllTags = "withAllTags"
}


export class GetOrganizationNetworksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configTemplateId" })
  configTemplateId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagsFilterType" })
  tagsFilterType?: GetOrganizationNetworksTagsFilterTypeEnum;
}


export class GetOrganizationNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationNetworksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationNetworksQueryParams;
}


export class GetOrganizationNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationNetworks200ApplicationJsonObject?: Map<string, any>;
}
