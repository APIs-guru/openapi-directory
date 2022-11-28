import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams extends SpeakeasyBase {
    id: string;
    outlookEmailAddress: string;
}
export declare class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams extends SpeakeasyBase {
    outlookAuthReturnUrl?: string;
}
export declare class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams;
    queryParams: GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams;
}
export declare class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse extends SpeakeasyBase {
    calendarAuthViewModel?: shared.CalendarAuthViewModel;
    contentType: string;
    statusCode: number;
}
