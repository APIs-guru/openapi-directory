import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1CalendarsIdBlocksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CalendarsIdBlocksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CalendarsIdBlocksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CalendarsIdBlocksPathParams;

  @Metadata()
  queryParams: GetSetupV1CalendarsIdBlocksQueryParams;
}


export class GetSetupV1CalendarsIdBlocksResponse extends SpeakeasyBase {
  @Metadata()
  calendarBlockListViewModel?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
