import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1CalendarsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CalendarsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CalendarsIdPathParams;
}
export declare class GetSetupV1CalendarsIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
}
