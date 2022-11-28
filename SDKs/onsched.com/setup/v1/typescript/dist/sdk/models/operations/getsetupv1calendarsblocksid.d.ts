import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1CalendarsBlocksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CalendarsBlocksIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CalendarsBlocksIdPathParams;
}
export declare class GetSetupV1CalendarsBlocksIdResponse extends SpeakeasyBase {
    calendarBlockViewModel?: shared.CalendarBlockViewModel;
    contentType: string;
    statusCode: number;
}
