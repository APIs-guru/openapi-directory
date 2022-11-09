import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=outlookEmailAddress" })
  outlookEmailAddress: string;
}


export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams;

  @Metadata()
  queryParams: GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams;
}


export class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse extends SpeakeasyBase {
  @Metadata()
  calendarAuthViewModel?: shared.CalendarAuthViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
