import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=googleEmailAddress" })
  googleEmailAddress: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;
}


export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams;
}


export class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendarAuthViewModel?: shared.CalendarAuthViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
