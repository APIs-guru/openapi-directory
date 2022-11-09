import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetQuestionPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum;
    pageName: string;
}
export declare class GetQuestionPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetQuestionPageNameMediaTypeExtensionPathParams;
}
export declare class GetQuestionPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
