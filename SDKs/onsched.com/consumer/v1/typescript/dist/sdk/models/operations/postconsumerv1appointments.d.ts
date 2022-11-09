import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostConsumerV1AppointmentsQueryParams extends SpeakeasyBase {
    completeBooking?: string;
}
export declare class PostConsumerV1AppointmentsRequests extends SpeakeasyBase {
    appointmentInitialModel?: shared.AppointmentInitialModel;
    appointmentInitialModel1?: shared.AppointmentInitialModel;
    appointmentInitialModel2?: shared.AppointmentInitialModel;
    appointmentInitialModel3?: shared.AppointmentInitialModel;
}
export declare class PostConsumerV1AppointmentsRequest extends SpeakeasyBase {
    queryParams: PostConsumerV1AppointmentsQueryParams;
    request?: PostConsumerV1AppointmentsRequests;
}
export declare class PostConsumerV1AppointmentsResponse extends SpeakeasyBase {
    appointmentInitialViewModel?: shared.AppointmentInitialViewModel;
    contentType: string;
    statusCode: number;
}
