import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetApiTopicsMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetApiTopicsMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetApiTopicsMediaTypeExtensionMediaTypeExtensionEnum;
}
export declare class GetApiTopicsMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetApiTopicsMediaTypeExtensionPathParams;
}
export declare class GetApiTopicsMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
