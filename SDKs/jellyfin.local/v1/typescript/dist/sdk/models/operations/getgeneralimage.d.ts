import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGeneralImagePathParams extends SpeakeasyBase {
    name: string;
    type: string;
}
export declare class GetGeneralImageRequest extends SpeakeasyBase {
    pathParams: GetGeneralImagePathParams;
}
export declare class GetGeneralImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getGeneralImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
