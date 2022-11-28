import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1CalendarsRequests extends SpeakeasyBase {
    scheduleInputModel?: shared.ScheduleInputModel;
    scheduleInputModel1?: shared.ScheduleInputModel;
    scheduleInputModel2?: shared.ScheduleInputModel;
    scheduleInputModel3?: shared.ScheduleInputModel;
}
export declare class PostSetupV1CalendarsRequest extends SpeakeasyBase {
    request?: PostSetupV1CalendarsRequests;
}
export declare class PostSetupV1CalendarsResponse extends SpeakeasyBase {
    contentType: string;
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
}
