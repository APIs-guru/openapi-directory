import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}
export declare class GetApiQuestionsMediaTypeExtensionPathParams extends SpeakeasyBase {
    mediaTypeExtension: GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum;
}
export declare class GetApiQuestionsMediaTypeExtensionRequest extends SpeakeasyBase {
    pathParams: GetApiQuestionsMediaTypeExtensionPathParams;
}
export declare class GetApiQuestionsMediaTypeExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
