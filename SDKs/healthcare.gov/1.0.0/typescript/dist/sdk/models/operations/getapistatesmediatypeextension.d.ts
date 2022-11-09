import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetApiStatesMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetApiStatesMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetApiStatesMediaTypeExtensionMediaTypeExtensionEnum;
}
export declare class GetApiStatesMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetApiStatesMediaTypeExtensionPathParams;
}
export declare class GetApiStatesMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
