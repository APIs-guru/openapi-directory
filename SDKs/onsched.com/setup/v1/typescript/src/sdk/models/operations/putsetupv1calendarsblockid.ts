import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1CalendarsBlockIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CalendarsBlockIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  calendarBlockInputModel?: shared.CalendarBlockInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  calendarBlockInputModel1?: shared.CalendarBlockInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  calendarBlockInputModel2?: shared.CalendarBlockInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  calendarBlockInputModel3?: shared.CalendarBlockInputModel;
}


export class PutSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1CalendarsBlockIdPathParams;

  @Metadata()
  request?: PutSetupV1CalendarsBlockIdRequests;
}


export class PutSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
  @Metadata()
  calendarBlockViewModel?: shared.CalendarBlockViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
