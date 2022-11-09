import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1CalendarsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CalendarsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scheduleUpdateModel?: shared.ScheduleUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  scheduleUpdateModel1?: shared.ScheduleUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scheduleUpdateModel2?: shared.ScheduleUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  scheduleUpdateModel3?: shared.ScheduleUpdateModel;
}


export class PutSetupV1CalendarsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1CalendarsIdPathParams;

  @Metadata()
  request?: PutSetupV1CalendarsIdRequests;
}


export class PutSetupV1CalendarsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @Metadata()
  statusCode: number;
}
