import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetApiArticlesMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetApiArticlesMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetApiArticlesMediaTypeExtensionMediaTypeExtensionEnum;
}
export declare class GetApiArticlesMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetApiArticlesMediaTypeExtensionPathParams;
}
export declare class GetApiArticlesMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
