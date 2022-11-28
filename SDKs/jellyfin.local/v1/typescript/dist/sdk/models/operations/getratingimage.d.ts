import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRatingImagePathParams extends SpeakeasyBase {
    name: string;
    theme: string;
}
export declare class GetRatingImageRequest extends SpeakeasyBase {
    pathParams: GetRatingImagePathParams;
}
export declare class GetRatingImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getRatingImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
