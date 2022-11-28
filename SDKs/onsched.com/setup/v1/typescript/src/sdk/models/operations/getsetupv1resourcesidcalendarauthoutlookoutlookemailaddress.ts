import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outlookEmailAddress" })
  outlookEmailAddress: string;
}


export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams;
}


export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendarAuthViewModel?: shared.CalendarAuthViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
