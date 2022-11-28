import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1AppointmentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1AppointmentsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1AppointmentsIdPathParams;
}
export declare class GetSetupV1AppointmentsIdResponse extends SpeakeasyBase {
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
}
