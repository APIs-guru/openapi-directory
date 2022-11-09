import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1CalendarsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CalendarsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1CalendarsQueryParams;
}


export class GetSetupV1CalendarsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
