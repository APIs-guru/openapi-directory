import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetBlogPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetBlogPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetBlogPageNameMediaTypeExtensionPathParams;
}
export declare class GetBlogPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
