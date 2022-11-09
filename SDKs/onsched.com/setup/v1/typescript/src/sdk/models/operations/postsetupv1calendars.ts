import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1CalendarsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scheduleInputModel?: shared.ScheduleInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  scheduleInputModel1?: shared.ScheduleInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scheduleInputModel2?: shared.ScheduleInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  scheduleInputModel3?: shared.ScheduleInputModel;
}


export class PostSetupV1CalendarsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1CalendarsRequests;
}


export class PostSetupV1CalendarsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @Metadata()
  statusCode: number;
}
