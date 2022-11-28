import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams extends SpeakeasyBase {
    googleEmailAddress: string;
    id: string;
}
export declare class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
}
export declare class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams;
    queryParams: GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams;
}
export declare class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse extends SpeakeasyBase {
    calendarAuthViewModel?: shared.CalendarAuthViewModel;
    contentType: string;
    statusCode: number;
}
