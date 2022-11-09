import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdRenderedPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdRenderedQueryParams extends SpeakeasyBase {
    height?: number;
    quality?: number;
    smooth?: boolean;
    width?: number;
    windowCenter?: number;
    windowWidth?: number;
}
export declare class GetInstancesIdRenderedHeaders extends SpeakeasyBase {
    accept?: string;
}
export declare class GetInstancesIdRenderedRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdRenderedPathParams;
    queryParams: GetInstancesIdRenderedQueryParams;
    headers: GetInstancesIdRenderedHeaders;
}
export declare class GetInstancesIdRenderedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
