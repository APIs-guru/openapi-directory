import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStateNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetStateNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetStateNameMediaTypeExtensionMediaTypeExtensionEnum;
    stateName: string;
}
export declare class GetStateNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetStateNameMediaTypeExtensionPathParams;
}
export declare class GetStateNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
