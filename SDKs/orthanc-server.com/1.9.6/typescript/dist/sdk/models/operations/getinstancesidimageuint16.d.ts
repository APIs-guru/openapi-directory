import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdImageUint16PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdImageUint16QueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdImageUint16Headers extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdImageUint16Request extends SpeakeasyBase {
    pathParams: GetInstancesIdImageUint16PathParams;
    queryParams: GetInstancesIdImageUint16QueryParams;
    headers: GetInstancesIdImageUint16Headers;
}
export declare class GetInstancesIdImageUint16Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
