import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteConsumerV1AppointmentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
    pathParams: DeleteConsumerV1AppointmentsIdPathParams;
}
export declare class DeleteConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
}
