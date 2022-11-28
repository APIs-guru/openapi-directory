import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1CalendarsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CalendarsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scheduleUpdateModel?: shared.ScheduleUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scheduleUpdateModel1?: shared.ScheduleUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scheduleUpdateModel2?: shared.ScheduleUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scheduleUpdateModel3?: shared.ScheduleUpdateModel;
}


export class PutSetupV1CalendarsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1CalendarsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1CalendarsIdRequests;
}


export class PutSetupV1CalendarsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
