import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationApplianceSecurityEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationApplianceSecurityEventsSortOrderEnum {
    Ascending = "ascending"
,    Descending = "descending"
}


export class GetOrganizationApplianceSecurityEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetOrganizationApplianceSecurityEventsSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetOrganizationApplianceSecurityEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationApplianceSecurityEventsPathParams;

  @Metadata()
  queryParams: GetOrganizationApplianceSecurityEventsQueryParams;
}


export class GetOrganizationApplianceSecurityEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationApplianceSecurityEvents200ApplicationJsonObject?: Map<string, any>;
}
