import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutConsumerV1AppointmentsIdCancelPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutConsumerV1AppointmentsIdCancelRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1AppointmentsIdCancelPathParams;
}
export declare class PutConsumerV1AppointmentsIdCancelResponse extends SpeakeasyBase {
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
}
