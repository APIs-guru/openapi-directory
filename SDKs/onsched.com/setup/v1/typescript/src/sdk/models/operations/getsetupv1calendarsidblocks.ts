import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1CalendarsIdBlocksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CalendarsIdBlocksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CalendarsIdBlocksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1CalendarsIdBlocksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1CalendarsIdBlocksQueryParams;
}


export class GetSetupV1CalendarsIdBlocksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendarBlockListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
