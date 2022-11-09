import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutConsumerV1AppointmentsIdConfirmPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutConsumerV1AppointmentsIdConfirmQueryParams extends SpeakeasyBase {
    undo?: boolean;
}
export declare class PutConsumerV1AppointmentsIdConfirmRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1AppointmentsIdConfirmPathParams;
    queryParams: PutConsumerV1AppointmentsIdConfirmQueryParams;
}
export declare class PutConsumerV1AppointmentsIdConfirmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
