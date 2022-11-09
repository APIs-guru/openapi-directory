import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=googleEmailAddress" })
  googleEmailAddress: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;
}


export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams;

  @Metadata()
  queryParams: GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams;
}


export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse extends SpeakeasyBase {
  @Metadata()
  calendarAuthViewModel?: shared.CalendarAuthViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
