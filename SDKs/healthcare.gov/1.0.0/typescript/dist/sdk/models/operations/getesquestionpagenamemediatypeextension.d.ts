import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetEsQuestionPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetEsQuestionPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetEsQuestionPageNameMediaTypeExtensionPathParams;
}
export declare class GetEsQuestionPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
