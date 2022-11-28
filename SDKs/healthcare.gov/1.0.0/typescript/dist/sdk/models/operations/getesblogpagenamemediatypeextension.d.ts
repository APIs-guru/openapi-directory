import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetEsBlogPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetEsBlogPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetEsBlogPageNameMediaTypeExtensionPathParams;
}
export declare class GetEsBlogPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
