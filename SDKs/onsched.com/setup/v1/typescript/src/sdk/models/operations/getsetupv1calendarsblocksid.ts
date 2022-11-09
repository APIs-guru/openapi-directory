import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CalendarsBlocksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CalendarsBlocksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CalendarsBlocksIdPathParams;
}


export class GetSetupV1CalendarsBlocksIdResponse extends SpeakeasyBase {
  @Metadata()
  calendarBlockViewModel?: shared.CalendarBlockViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
