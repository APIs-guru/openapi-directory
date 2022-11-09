import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdFilePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdFileHeaders extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdFileRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdFilePathParams;
    headers: GetInstancesIdFileHeaders;
}
export declare class GetInstancesIdFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getInstancesIdFile200ApplicationDicomPlusJsonAny?: any;
    statusCode: number;
}
