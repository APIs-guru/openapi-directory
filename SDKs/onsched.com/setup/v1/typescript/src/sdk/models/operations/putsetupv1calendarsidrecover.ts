import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1CalendarsIdRecoverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CalendarsIdRecoverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1CalendarsIdRecoverPathParams;
}


export class PutSetupV1CalendarsIdRecoverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @Metadata()
  statusCode: number;
}
