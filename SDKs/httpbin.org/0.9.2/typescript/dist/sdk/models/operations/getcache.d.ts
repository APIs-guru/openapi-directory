import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCacheHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare class GetCacheRequest extends SpeakeasyBase {
    headers: GetCacheHeaders;
}
export declare class GetCacheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
