import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1CalendarsBlockIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1CalendarsBlockIdPathParams;
}


export class DeleteSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendarBlockViewModel?: shared.CalendarBlockViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
