import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1AppointmentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1AppointmentsIdPathParams;
}
export declare class GetConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
}
