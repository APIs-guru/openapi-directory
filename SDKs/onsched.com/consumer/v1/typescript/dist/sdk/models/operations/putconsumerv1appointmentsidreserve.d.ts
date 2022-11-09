import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutConsumerV1AppointmentsIdReservePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutConsumerV1AppointmentsIdReserveQueryParams extends SpeakeasyBase {
    sendNotifications?: boolean;
}
export declare class PutConsumerV1AppointmentsIdReserveRequests extends SpeakeasyBase {
    appointmentReserveModel?: shared.AppointmentReserveModel;
    appointmentReserveModel1?: shared.AppointmentReserveModel;
    appointmentReserveModel2?: shared.AppointmentReserveModel;
    appointmentReserveModel3?: shared.AppointmentReserveModel;
}
export declare class PutConsumerV1AppointmentsIdReserveRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1AppointmentsIdReservePathParams;
    queryParams: PutConsumerV1AppointmentsIdReserveQueryParams;
    request?: PutConsumerV1AppointmentsIdReserveRequests;
}
export declare class PutConsumerV1AppointmentsIdReserveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
