import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRemoteImageQueryParams extends SpeakeasyBase {
    imageUrl: string;
}
export declare class GetRemoteImageRequest extends SpeakeasyBase {
    queryParams: GetRemoteImageQueryParams;
}
export declare class GetRemoteImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getRemoteImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
