import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetEsPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetEsPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetEsPageNameMediaTypeExtensionPathParams;
}
export declare class GetEsPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
