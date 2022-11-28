import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutConsumerV1AppointmentsIdBookPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutConsumerV1AppointmentsIdBookRequests extends SpeakeasyBase {
    appointmentBookModel?: shared.AppointmentBookModel;
    appointmentBookModel1?: shared.AppointmentBookModel;
    appointmentBookModel2?: shared.AppointmentBookModel;
    appointmentBookModel3?: shared.AppointmentBookModel;
}
export declare class PutConsumerV1AppointmentsIdBookRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1AppointmentsIdBookPathParams;
    request?: PutConsumerV1AppointmentsIdBookRequests;
}
export declare class PutConsumerV1AppointmentsIdBookResponse extends SpeakeasyBase {
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
}
