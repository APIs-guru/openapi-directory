import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1CalendarsIdBlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1CalendarsIdBlockRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  calendarBlockInputModel?: shared.CalendarBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  calendarBlockInputModel1?: shared.CalendarBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  calendarBlockInputModel2?: shared.CalendarBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  calendarBlockInputModel3?: shared.CalendarBlockInputModel;
}


export class PostSetupV1CalendarsIdBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1CalendarsIdBlockPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1CalendarsIdBlockRequests;
}


export class PostSetupV1CalendarsIdBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
