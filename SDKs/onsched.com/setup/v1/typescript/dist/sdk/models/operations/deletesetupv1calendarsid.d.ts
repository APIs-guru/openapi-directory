import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1CalendarsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1CalendarsIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1CalendarsIdPathParams;
}
export declare class DeleteSetupV1CalendarsIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
}
