import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceClientSecurityEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkApplianceClientSecurityEventsSortOrderEnum {
    Ascending = "ascending"
,    Descending = "descending"
}


export class GetNetworkApplianceClientSecurityEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetNetworkApplianceClientSecurityEventsSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkApplianceClientSecurityEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceClientSecurityEventsPathParams;

  @Metadata()
  queryParams: GetNetworkApplianceClientSecurityEventsQueryParams;
}


export class GetNetworkApplianceClientSecurityEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceClientSecurityEvents200ApplicationJsonObject?: Map<string, any>;
}
