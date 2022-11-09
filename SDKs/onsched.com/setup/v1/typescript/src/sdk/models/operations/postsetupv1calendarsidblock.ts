import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1CalendarsIdBlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1CalendarsIdBlockRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  calendarBlockInputModel?: shared.CalendarBlockInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  calendarBlockInputModel1?: shared.CalendarBlockInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  calendarBlockInputModel2?: shared.CalendarBlockInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  calendarBlockInputModel3?: shared.CalendarBlockInputModel;
}


export class PostSetupV1CalendarsIdBlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1CalendarsIdBlockPathParams;

  @Metadata()
  request?: PostSetupV1CalendarsIdBlockRequests;
}


export class PostSetupV1CalendarsIdBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
