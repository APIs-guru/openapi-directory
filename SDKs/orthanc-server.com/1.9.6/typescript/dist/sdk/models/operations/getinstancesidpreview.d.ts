import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdPreviewPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdPreviewQueryParams extends SpeakeasyBase {
    quality?: number;
}
export declare class GetInstancesIdPreviewHeaders extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdPreviewRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdPreviewPathParams;
    queryParams: GetInstancesIdPreviewQueryParams;
    headers: GetInstancesIdPreviewHeaders;
}
export declare class GetInstancesIdPreviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
