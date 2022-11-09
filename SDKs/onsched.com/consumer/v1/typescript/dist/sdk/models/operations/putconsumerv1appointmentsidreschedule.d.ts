import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutConsumerV1AppointmentsIdReschedulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutConsumerV1AppointmentsIdRescheduleRequests extends SpeakeasyBase {
    appointmentRescheduleModel?: shared.AppointmentRescheduleModel;
    appointmentRescheduleModel1?: shared.AppointmentRescheduleModel;
    appointmentRescheduleModel2?: shared.AppointmentRescheduleModel;
    appointmentRescheduleModel3?: shared.AppointmentRescheduleModel;
}
export declare class PutConsumerV1AppointmentsIdRescheduleRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1AppointmentsIdReschedulePathParams;
    request?: PutConsumerV1AppointmentsIdRescheduleRequests;
}
export declare class PutConsumerV1AppointmentsIdRescheduleResponse extends SpeakeasyBase {
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
}
