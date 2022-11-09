import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutConsumerV1AppointmentsIdNoshowPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutConsumerV1AppointmentsIdNoshowRequests extends SpeakeasyBase {
    appointmentNoShowModel?: Map<string, any>;
    appointmentNoShowModel1?: Map<string, any>;
    appointmentNoShowModel2?: Map<string, any>;
    appointmentNoShowModel3?: Map<string, any>;
}
export declare class PutConsumerV1AppointmentsIdNoshowRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1AppointmentsIdNoshowPathParams;
    request?: PutConsumerV1AppointmentsIdNoshowRequests;
}
export declare class PutConsumerV1AppointmentsIdNoshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
