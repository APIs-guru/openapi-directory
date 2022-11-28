import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1CalendarsBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1CalendarsBlockIdRequests extends SpeakeasyBase {
    calendarBlockInputModel?: shared.CalendarBlockInputModel;
    calendarBlockInputModel1?: shared.CalendarBlockInputModel;
    calendarBlockInputModel2?: shared.CalendarBlockInputModel;
    calendarBlockInputModel3?: shared.CalendarBlockInputModel;
}
export declare class PutSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1CalendarsBlockIdPathParams;
    request?: PutSetupV1CalendarsBlockIdRequests;
}
export declare class PutSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
    calendarBlockViewModel?: shared.CalendarBlockViewModel;
    contentType: string;
    statusCode: number;
}
