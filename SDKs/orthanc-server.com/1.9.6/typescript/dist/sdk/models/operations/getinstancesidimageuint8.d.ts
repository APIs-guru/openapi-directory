import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdImageUint8PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdImageUint8QueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdImageUint8Headers extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdImageUint8Request extends SpeakeasyBase {
    pathParams: GetInstancesIdImageUint8PathParams;
    queryParams: GetInstancesIdImageUint8QueryParams;
    headers: GetInstancesIdImageUint8Headers;
}
export declare class GetInstancesIdImageUint8Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
