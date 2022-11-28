import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUntaggedImageCountPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetUntaggedImageCountQueryParams extends SpeakeasyBase {
    iterationId?: string;
}
export declare class GetUntaggedImageCountHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetUntaggedImageCountRequest extends SpeakeasyBase {
    pathParams: GetUntaggedImageCountPathParams;
    queryParams: GetUntaggedImageCountQueryParams;
    headers: GetUntaggedImageCountHeaders;
}
export declare class GetUntaggedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getUntaggedImageCount200ApplicationJsonInt32Integer?: number;
    getUntaggedImageCount200TextJsonInt32Integer?: number;
    statusCode: number;
}
