import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetPageNameMediaTypeExtensionPathParams;
}
export declare class GetPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
