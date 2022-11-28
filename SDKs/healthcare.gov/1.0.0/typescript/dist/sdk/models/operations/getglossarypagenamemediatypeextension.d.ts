import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetGlossaryPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetGlossaryPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetGlossaryPageNameMediaTypeExtensionPathParams;
}
export declare class GetGlossaryPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
