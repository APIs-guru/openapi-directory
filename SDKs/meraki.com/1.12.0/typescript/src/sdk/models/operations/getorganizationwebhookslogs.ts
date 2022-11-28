import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationWebhooksLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationWebhooksLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;
}


export class GetOrganizationWebhooksLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationWebhooksLogsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationWebhooksLogsQueryParams;
}


export class GetOrganizationWebhooksLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationWebhooksLogs200ApplicationJsonObject?: Map<string, any>;
}
