import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CalendarsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CalendarsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CalendarsIdPathParams;
}


export class GetSetupV1CalendarsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @Metadata()
  statusCode: number;
}
