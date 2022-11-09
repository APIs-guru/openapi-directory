import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetEsStateNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum;
    stateName: string;
}
export declare class GetEsStateNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetEsStateNameMediaTypeExtensionPathParams;
}
export declare class GetEsStateNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
