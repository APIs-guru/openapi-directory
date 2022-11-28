import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdImageInt16PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdImageInt16QueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdImageInt16Headers extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdImageInt16Request extends SpeakeasyBase {
    pathParams: GetInstancesIdImageInt16PathParams;
    queryParams: GetInstancesIdImageInt16QueryParams;
    headers: GetInstancesIdImageInt16Headers;
}
export declare class GetInstancesIdImageInt16Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
