import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1CalendarsIdRecoverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CalendarsIdRecoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1CalendarsIdRecoverPathParams;
}


export class PutSetupV1CalendarsIdRecoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleViewModel?: shared.ScheduleViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
