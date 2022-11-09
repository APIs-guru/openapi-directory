import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetEsGlossaryPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetEsGlossaryPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetEsGlossaryPageNameMediaTypeExtensionPathParams;
}
export declare class GetEsGlossaryPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
