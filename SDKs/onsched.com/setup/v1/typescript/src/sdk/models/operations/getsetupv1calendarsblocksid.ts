import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1CalendarsBlocksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CalendarsBlocksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1CalendarsBlocksIdPathParams;
}


export class GetSetupV1CalendarsBlocksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendarBlockViewModel?: shared.CalendarBlockViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
