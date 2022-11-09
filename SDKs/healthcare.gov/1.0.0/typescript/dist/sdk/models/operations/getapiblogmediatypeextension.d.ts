import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetApiBlogMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetApiBlogMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetApiBlogMediaTypeExtensionMediaTypeExtensionEnum;
}
export declare class GetApiBlogMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetApiBlogMediaTypeExtensionPathParams;
}
export declare class GetApiBlogMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
