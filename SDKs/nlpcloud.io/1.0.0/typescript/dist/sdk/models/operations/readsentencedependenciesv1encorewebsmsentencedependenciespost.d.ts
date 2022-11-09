import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest extends SpeakeasyBase {
    request: shared.UserRequestIn;
}
export declare class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    sentenceDependenciesOut?: shared.SentenceDependenciesOut;
    statusCode: number;
}
