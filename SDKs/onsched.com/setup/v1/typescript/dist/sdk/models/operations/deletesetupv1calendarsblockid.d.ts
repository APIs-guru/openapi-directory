import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1CalendarsBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1CalendarsBlockIdPathParams;
}
export declare class DeleteSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
    calendarBlockViewModel?: shared.CalendarBlockViewModel;
    contentType: string;
    statusCode: number;
}
