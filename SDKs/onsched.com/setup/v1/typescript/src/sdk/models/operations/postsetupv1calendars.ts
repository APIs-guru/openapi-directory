import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1CalendarsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scheduleInputModel?: shared.ScheduleInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scheduleInputModel1?: shared.ScheduleInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scheduleInputModel2?: shared.ScheduleInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scheduleInputModel3?: shared.ScheduleInputModel;
}


export class PostSetupV1CalendarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1CalendarsRequests;
}


export class PostSetupV1CalendarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
