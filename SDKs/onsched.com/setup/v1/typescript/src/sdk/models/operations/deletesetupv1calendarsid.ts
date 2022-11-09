import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1CalendarsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1CalendarsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1CalendarsIdPathParams;
}


export class DeleteSetupV1CalendarsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @Metadata()
  statusCode: number;
}
