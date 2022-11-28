import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetApiGlossaryMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetApiGlossaryMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetApiGlossaryMediaTypeExtensionMediaTypeExtensionEnum;
}
export declare class GetApiGlossaryMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetApiGlossaryMediaTypeExtensionPathParams;
}
export declare class GetApiGlossaryMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
