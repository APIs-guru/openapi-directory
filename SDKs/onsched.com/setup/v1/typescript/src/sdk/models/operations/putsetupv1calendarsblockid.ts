import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1CalendarsBlockIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CalendarsBlockIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  calendarBlockInputModel?: shared.CalendarBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  calendarBlockInputModel1?: shared.CalendarBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  calendarBlockInputModel2?: shared.CalendarBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  calendarBlockInputModel3?: shared.CalendarBlockInputModel;
}


export class PutSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1CalendarsBlockIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1CalendarsBlockIdRequests;
}


export class PutSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendarBlockViewModel?: shared.CalendarBlockViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
