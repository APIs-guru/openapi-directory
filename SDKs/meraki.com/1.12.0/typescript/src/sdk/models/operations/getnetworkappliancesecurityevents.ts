import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceSecurityEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkApplianceSecurityEventsSortOrderEnum {
    Ascending = "ascending"
,    Descending = "descending"
}


export class GetNetworkApplianceSecurityEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetNetworkApplianceSecurityEventsSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkApplianceSecurityEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceSecurityEventsPathParams;

  @Metadata()
  queryParams: GetNetworkApplianceSecurityEventsQueryParams;
}


export class GetNetworkApplianceSecurityEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceSecurityEvents200ApplicationJsonObject?: Map<string, any>;
}
