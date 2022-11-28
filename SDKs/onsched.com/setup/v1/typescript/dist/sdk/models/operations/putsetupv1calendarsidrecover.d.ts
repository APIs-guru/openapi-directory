import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1CalendarsIdRecoverPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1CalendarsIdRecoverRequest extends SpeakeasyBase {
    pathParams: PutSetupV1CalendarsIdRecoverPathParams;
}
export declare class PutSetupV1CalendarsIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
}
