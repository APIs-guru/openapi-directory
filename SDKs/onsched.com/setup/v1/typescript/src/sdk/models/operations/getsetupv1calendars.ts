import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1CalendarsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CalendarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetupV1CalendarsQueryParams;
}


export class GetSetupV1CalendarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
