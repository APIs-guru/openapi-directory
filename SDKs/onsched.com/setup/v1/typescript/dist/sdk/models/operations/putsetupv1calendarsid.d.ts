import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1CalendarsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1CalendarsIdRequests extends SpeakeasyBase {
    scheduleUpdateModel?: shared.ScheduleUpdateModel;
    scheduleUpdateModel1?: shared.ScheduleUpdateModel;
    scheduleUpdateModel2?: shared.ScheduleUpdateModel;
    scheduleUpdateModel3?: shared.ScheduleUpdateModel;
}
export declare class PutSetupV1CalendarsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1CalendarsIdPathParams;
    request?: PutSetupV1CalendarsIdRequests;
}
export declare class PutSetupV1CalendarsIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
}
