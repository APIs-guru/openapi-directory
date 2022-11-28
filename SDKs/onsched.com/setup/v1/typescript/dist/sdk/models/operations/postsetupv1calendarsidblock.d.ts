import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1CalendarsIdBlockPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1CalendarsIdBlockRequests extends SpeakeasyBase {
    calendarBlockInputModel?: shared.CalendarBlockInputModel;
    calendarBlockInputModel1?: shared.CalendarBlockInputModel;
    calendarBlockInputModel2?: shared.CalendarBlockInputModel;
    calendarBlockInputModel3?: shared.CalendarBlockInputModel;
}
export declare class PostSetupV1CalendarsIdBlockRequest extends SpeakeasyBase {
    pathParams: PostSetupV1CalendarsIdBlockPathParams;
    request?: PostSetupV1CalendarsIdBlockRequests;
}
export declare class PostSetupV1CalendarsIdBlockResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
