import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams extends SpeakeasyBase {
    id: string;
    resourceId: string;
}
export declare class PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams extends SpeakeasyBase {
    calendarId?: string;
    endDate?: Date;
    startDate?: Date;
}
export declare class PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams;
    queryParams: PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams;
}
export declare class PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse extends SpeakeasyBase {
    appointmentViewModels?: shared.AppointmentViewModel[];
    contentType: string;
    statusCode: number;
}
