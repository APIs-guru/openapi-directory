import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationUplinksStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationUplinksStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=iccids" })
  iccids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=networkIds" })
  networkIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=serials" })
  serials?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetOrganizationUplinksStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationUplinksStatusesPathParams;

  @Metadata()
  queryParams: GetOrganizationUplinksStatusesQueryParams;
}


export class GetOrganizationUplinksStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationUplinksStatuses200ApplicationJsonObject?: Map<string, any>;
}
