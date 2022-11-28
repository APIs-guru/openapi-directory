import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1AppointmentsIdReassignResourceResourceIdPathParams extends SpeakeasyBase {
    id: string;
    resourceId: string;
}
export declare class PutSetupV1AppointmentsIdReassignResourceResourceIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1AppointmentsIdReassignResourceResourceIdPathParams;
}
export declare class PutSetupV1AppointmentsIdReassignResourceResourceIdResponse extends SpeakeasyBase {
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
}
