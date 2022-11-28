import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMediaInfoImagePathParams extends SpeakeasyBase {
    name: string;
    theme: string;
}
export declare class GetMediaInfoImageRequest extends SpeakeasyBase {
    pathParams: GetMediaInfoImagePathParams;
}
export declare class GetMediaInfoImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getMediaInfoImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
