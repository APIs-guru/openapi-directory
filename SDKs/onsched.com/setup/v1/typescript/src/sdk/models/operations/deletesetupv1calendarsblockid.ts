import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1CalendarsBlockIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1CalendarsBlockIdPathParams;
}


export class DeleteSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
  @Metadata()
  calendarBlockViewModel?: shared.CalendarBlockViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
